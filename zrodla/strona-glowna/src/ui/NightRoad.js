import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

/* ------------------------------------------------------------------------ *
 *  A night road in real 3D perspective, with a photographed M4 (cut out    *
 *  from its background) driving towards the camera.                        *
 * ------------------------------------------------------------------------ */

// ---- measurements taken on the cut-out photo (1920 x 1435 px) ------------
const IMG_W = 1920
const IMG_H = 1435
const M_PER_PX = 1.887 / (1639 - 235) // body width 1,887 mm
const PLANE_W = IMG_W * M_PER_PX
const PLANE_H = IMG_H * M_PER_PX
const PLANE_Y = (1223 - IMG_H / 2) * M_PER_PX // tyre contact row -> ground
const PLANE_X = (IMG_W / 2 - 937) * M_PER_PX // centre the body
const HEADLIGHTS_PX = [
  [440, 780],
  [1440, 790],
]
const HEADLIGHTS = HEADLIGHTS_PX.map(([x, y]) => new THREE.Vector3((x - IMG_W / 2) * M_PER_PX + PLANE_X, PLANE_Y - (y - IMG_H / 2) * M_PER_PX, 0.25))
const HL_UV = HEADLIGHTS_PX.map(([x, y]) => new THREE.Vector2(x / IMG_W, 1 - y / IMG_H))

export const D_START = 230
const LAMP_S = 34 // street-lamp spacing (m)
const LAMP_Z0 = 22
const LAMP_X = 5.7 // lamp head over the road edge
const LAMP_H = 8.4
const LAMP_ROWS = 26
const FOG = new THREE.Color('#0a0f19')
const FOG_DENSITY = 0.0062

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const lerp = (a, b, t) => a + (b - a) * t
const smooth = (a, b, v) => {
  const t = clamp((v - a) / (b - a))
  return t * t * (3 - 2 * t)
}
const easeInOut = (t) => 0.5 - 0.5 * Math.cos(Math.PI * t)

function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = Math.imul(s ^ (s >>> 15), s | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function canvasTex(w, h, draw, srgb = false) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  draw(c.getContext('2d'), w, h)
  const t = new THREE.CanvasTexture(c)
  if (srgb) t.colorSpace = THREE.SRGBColorSpace
  return t
}

const glowTex = () =>
  canvasTex(256, 256, (g, w) => {
    const grd = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2)
    grd.addColorStop(0, 'rgba(255,255,255,1)')
    grd.addColorStop(0.08, 'rgba(255,255,255,0.9)')
    grd.addColorStop(0.25, 'rgba(255,255,255,0.28)')
    grd.addColorStop(0.55, 'rgba(255,255,255,0.06)')
    grd.addColorStop(1, 'rgba(255,255,255,0)')
    g.fillStyle = grd
    g.fillRect(0, 0, w, w)
  })

const streakTex = () =>
  canvasTex(512, 32, (g, w, h) => {
    const img = g.createImageData(w, h)
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        const dx = Math.abs(x / w - 0.5) * 2
        const dy = Math.abs(y / h - 0.5) * 2
        const v = Math.pow(1 - dx, 2.6) * Math.exp(-dy * dy * 14)
        const i = (y * w + x) * 4
        img.data[i] = img.data[i + 1] = img.data[i + 2] = 255
        img.data[i + 3] = v * 255
      }
    g.putImageData(img, 0, 0)
  })

const asphaltTex = () => {
  const r = rng(7)
  const t = canvasTex(512, 512, (g, w) => {
    const img = g.createImageData(w, w)
    for (let i = 0; i < img.data.length; i += 4) {
      const n = 120 + (r() - 0.5) * 120 + (r() < 0.03 ? 70 : 0)
      img.data[i] = img.data[i + 1] = img.data[i + 2] = n
      img.data[i + 3] = 255
    }
    g.putImageData(img, 0, 0)
    // wet patches in alpha-less red channel trick: darker blobs
    for (let k = 0; k < 40; k++) {
      const x = r() * w
      const y = r() * w
      const rad = 20 + r() * 90
      // draw with wrap-around copies so the texture tiles seamlessly
      for (const ox of [-w, 0, w])
        for (const oy of [-w, 0, w]) {
          const grd = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, rad)
          grd.addColorStop(0, 'rgba(20,20,20,0.55)')
          grd.addColorStop(1, 'rgba(20,20,20,0)')
          g.fillStyle = grd
          g.fillRect(x + ox - rad, y + oy - rad, rad * 2, rad * 2)
        }
    }
  })
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.anisotropy = 8
  return t
}

const fogTex = () => {
  const r = rng(11)
  return canvasTex(512, 128, (g, W, H) => {
    for (let i = 0; i < 90; i++) {
      const x = W * 0.15 + r() * W * 0.7
      const y = H * 0.35 + r() * H * 0.3
      const rad = 18 + r() * 40
      const grd = g.createRadialGradient(x, y, 0, x, y, rad)
      grd.addColorStop(0, `rgba(255,255,255,${0.1 + r() * 0.12})`)
      grd.addColorStop(1, 'rgba(255,255,255,0)')
      g.fillStyle = grd
      g.fillRect(x - rad, y - rad, rad * 2, rad * 2)
    }
    g.globalCompositeOperation = 'destination-in'
    g.save()
    g.scale(1, H / W)
    const m = g.createRadialGradient(W / 2, W / 2, 0, W / 2, W / 2, W / 2)
    m.addColorStop(0, '#000')
    m.addColorStop(0.55, 'rgba(0,0,0,0.6)')
    m.addColorStop(1, 'rgba(0,0,0,0)')
    g.fillStyle = m
    g.fillRect(0, 0, W, W)
    g.restore()
  })
}

const fogChunk = /* glsl */ `
  float fogF(float d){ float f = ${FOG_DENSITY.toFixed(5)} * d; return 1.0 - exp(-f * f); }
`

/* ------------------------------------------------------------------------ */
export function createNightRoad(canvas, carUrl, { mobile = false, lite = false } = {}) {
  // lite = słabszy komputer albo telefon: mniej cząsteczek, niższa rozdzielczość, bez rozmycia ruchu
  if (lite) mobile = true
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: lite ? 'default' : 'high-performance', stencil: false })
  renderer.setClearColor(FOG)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  let dpr = Math.min(window.devicePixelRatio || 1, lite ? 1 : mobile ? 1.5 : 1.75)
  renderer.setPixelRatio(dpr)

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(FOG, FOG_DENSITY)
  const camera = new THREE.PerspectiveCamera(40, 1, 0.05, 2000)
  camera.position.set(0, 1.2, 0)

  const glow = glowTex()
  let lampGlowMat = null
  let roadMat = null
  let roadMesh = null
  let aviation = null
  let rainMat = null
  const streak = streakTex()
  const uniforms = {
    uCarZ: { value: -D_START },
    uCamZ: { value: 0 },
    uProx: { value: 0 },
    uTime: { value: 0 },
    uFog: { value: FOG },
  }

  /* ---------------- sky, stars, mountains ---------------- */
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(900, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: { uMoon: { value: new THREE.Vector3(-0.45, 0.3, -1).normalize() } },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
      fragmentShader: `uniform vec3 uMoon; varying vec3 vDir;
        void main(){ vec3 d = normalize(vDir); float h = d.y;
          vec3 hor = vec3(0.016,0.022,0.035), mid = vec3(0.004,0.007,0.014), top = vec3(0.0006,0.001,0.003);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.15, h)); c = mix(c, top, smoothstep(0.12, 0.7, h));
          float m = max(dot(d, uMoon), 0.0);
          c += vec3(0.07, 0.04, 0.02) * exp(-max(h, 0.0) * 14.0) * smoothstep(-0.05, 0.02, h) * (0.6 + 0.4 * exp(-pow(d.x / 0.5, 2.0)));
          c += vec3(0.05,0.065,0.1) * pow(m, 10.0) + vec3(0.25,0.28,0.35) * pow(m, 300.0) + vec3(3.0) * smoothstep(0.99985, 0.99995, m);
          gl_FragColor = vec4(c, 1.0); }`,
    })
  )
  sky.renderOrder = -10
  scene.add(sky)

  {
    const r = rng(3)
    const n = mobile ? 900 : 1800
    const pos = []
    const col = []
    for (let i = 0; i < n; i++) {
      const u = r() * Math.PI * 2
      const y = 0.05 + Math.pow(r(), 0.7) * 0.95
      const rr = Math.sqrt(1 - y * y)
      pos.push(Math.cos(u) * rr * 850, y * 850, Math.sin(u) * rr * 850)
      const b = 0.3 + r() * 0.8
      col.push(b * 0.85, b * 0.9, b)
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
    const stars = new THREE.Points(g, new THREE.PointsMaterial({ size: 1.5, sizeAttenuation: false, vertexColors: true, fog: false, transparent: true, depthWrite: false }))
    stars.renderOrder = -9
    sky.add(stars)
  }

  {
    const r = rng(21)
    const layers = [
      { z: -980, h: [110, 260], c: '#0e1520', step: 26 },
      { z: -760, h: [70, 170], c: '#0b111a', step: 20 },
      { z: -560, h: [35, 90], c: '#080c13', step: 14 },
    ]
    for (const d of layers) {
      const s = new THREE.Shape()
      const W = 2400
      s.moveTo(-W, -40)
      const ph = r() * 10
      for (let x = -W; x <= W; x += d.step) {
        const n = Math.sin(x * 0.0021 + ph) * 0.5 + Math.sin(x * 0.0057 + ph * 2) * 0.3 + Math.sin(x * 0.017 + ph * 3) * 0.12
        const y = lerp(d.h[0], d.h[1], 0.5 + 0.5 * n) + (r() - 0.5) * d.step * 0.6
        s.lineTo(x, y * (1 - 0.55 * Math.exp(-Math.pow(x / 260, 2))))
      }
      s.lineTo(W, -40)
      const m = new THREE.Mesh(new THREE.ShapeGeometry(s), new THREE.MeshBasicMaterial({ color: d.c, fog: false, depthWrite: false }))
      m.position.set(0, -6, d.z)
      m.renderOrder = -8
      scene.add(m)
    }
  }

  /* ---------------- lights for the forest ---------------- */
  scene.add(new THREE.HemisphereLight('#24365a', '#050608', 0.7))
  const moon = new THREE.DirectionalLight('#9bb4ff', 0.5)
  moon.position.set(-60, 80, -160)
  scene.add(moon)

  /* ---------------- forest ---------------- */
  {
    const tiers = [
      [1.0, 0.55, 0.0],
      [0.78, 0.45, 0.28],
      [0.55, 0.36, 0.52],
    ].map(([rad, h, y]) => new THREE.ConeGeometry(rad, h, 7, 1).translate(0, y + h / 2, 0).toNonIndexed())
    const geo = mergeGeometries(tiers)
    const count = mobile ? 500 : 1000
    const mesh = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ color: '#ffffff' }), count)
    const r = rng(5)
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const c = new THREE.Color()
    for (let i = 0; i < count; i++) {
      const side = i % 2 ? 1 : -1
      const x = side * (22 + Math.pow(r(), 1.4) * 110)
      const z = -40 - r() * 520
      const h = 7 + r() * 13
      const w = h * (0.17 + r() * 0.07)
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r() * Math.PI)
      m.compose(new THREE.Vector3(x, -0.3, z), q, new THREE.Vector3(w, h, w))
      mesh.setMatrixAt(i, m)
      c.setHSL(0.37 + r() * 0.07, 0.3, 0.035 + r() * 0.04)
      mesh.setColorAt(i, c)
    }
    mesh.frustumCulled = false
    scene.add(mesh)
  }

  /* ---------------- road (custom shader: asphalt, markings, headlight pool, wet streaks) ---- */
  {
    const asphalt = asphaltTex()
    const len = 940
    const road = (roadMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(220, len, 16, 120).rotateX(-Math.PI / 2).translate(0, 0, 40 - len / 2),
      new THREE.ShaderMaterial({
        uniforms: { ...uniforms, uTex: { value: asphalt }, uHL: { value: HEADLIGHTS.map((h) => h.x) }, uCamY: { value: 1.2 } },
        vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
        fragmentShader: /* glsl */ `
          uniform sampler2D uTex; uniform float uCarZ, uCamZ, uCamY, uProx, uTime; uniform vec3 uFog; uniform float uHL[2];
          varying vec3 vW;
          ${fogChunk}
          void main(){
            vec2 p = vW.xz;
            float onRoad = 1.0 - smoothstep(6.4, 6.6, abs(p.x));
            float grain = texture2D(uTex, p * vec2(0.22, 0.22)).r;
            float wet = texture2D(uTex, p * vec2(0.035, 0.012) + vec2(0.5, 0.0)).r; // large wet patches
            vec3 asph = vec3(0.020, 0.021, 0.024) * (0.55 + grain * 0.9);
            vec3 shoulder = vec3(0.010, 0.012, 0.010) * (0.6 + grain * 0.8);
            vec3 base = mix(shoulder, asph, onRoad);
            // markings
            float edge = (1.0 - smoothstep(0.07, 0.09, abs(abs(p.x) - 5.95)));
            float dash = (1.0 - smoothstep(0.065, 0.085, abs(abs(p.x) - 2.0))) * step(mod(p.y, 10.0), 3.4);
            float mark = max(edge, dash) * (0.75 + 0.25 * grain);
            // headlight pool in front of the car (towards the camera)
            float dz = p.y - (uCarZ + 0.25);
            float ahead = smoothstep(-0.5, 2.0, dz) * (1.0 - smoothstep(30.0, 70.0, dz));
            float width = 0.9 + max(dz, 0.0) * 0.32;
            float pool = exp(-pow(p.x / width, 2.0) * 1.6) * ahead / (1.0 + max(dz, 0.0) * 0.09);
            float lightAmt = pool * (0.6 + uProx * 1.6);
            vec3 lightCol = vec3(0.85, 0.9, 1.0);
            vec3 col = base * (0.35 + lightAmt * 7.0) + mark * vec3(0.05, 0.052, 0.055) * (0.3 + lightAmt * 7.0);
            // wet specular streaks: headlights mirrored on the asphalt, running to the viewer
            float spec = 0.0;
            for (int i = 0; i < 2; i++) {
              float hx = uHL[i];
              float s = exp(-pow((p.x - hx * 1.02) / (0.08 + max(dz, 0.0) * 0.012), 2.0));
              spec += s;
            }
            float along = smoothstep(-0.3, 0.6, dz) * exp(-max(dz, 0.0) * 0.07);
            float rip = 0.55 + 0.45 * sin(p.y * 7.0 + grain * 6.0) * (0.5 + 0.5 * sin(p.y * 1.3));
            col += lightCol * spec * along * rip * (0.4 + wet * 0.9) * (0.3 + uProx * 1.4) * onRoad;
            // sodium street lamps: warm pools of light on the asphalt
            vec3 warm = vec3(1.0, 0.62, 0.28);
            float zl = floor((p.y - ${LAMP_Z0.toFixed(1)}) / ${LAMP_S.toFixed(1)} + 0.5) * ${LAMP_S.toFixed(1)} + ${LAMP_Z0.toFixed(1)};
            float pools = 0.0;
            for (int k = -1; k <= 1; k++) {
              float lz = zl + float(k) * ${LAMP_S.toFixed(1)};
              float dzl = p.y - lz;
              pools += exp(-(pow(p.x - ${LAMP_X.toFixed(1)}, 2.0) + dzl * dzl) / 30.0);
              pools += exp(-(pow(p.x + ${LAMP_X.toFixed(1)}, 2.0) + dzl * dzl) / 30.0);
            }
            col += base * warm * pools * 9.0 + mark * warm * pools * 0.08;
            // mirror-like reflections of the lamps on the wet road, stretched towards the viewer
            float tR = uCamY / (uCamY + ${LAMP_H.toFixed(1)});
            float firstRow = floor((uCamZ - ${LAMP_Z0.toFixed(1)}) / ${LAMP_S.toFixed(1)});
            vec3 lampRefl = vec3(0.0);
            for (int k = 0; k < 12; k++) {
              float lz = (firstRow - float(k)) * ${LAMP_S.toFixed(1)} + ${LAMP_Z0.toFixed(1)};
              float rz = uCamZ + tR * (lz - uCamZ);
              float len = 0.6 + (uCamZ - rz) * 0.09;
              float along = exp(-pow((p.y - rz) / len, 2.0));
              for (int sd = 0; sd < 2; sd++) {
                float lx = (sd == 0 ? -1.0 : 1.0) * ${LAMP_X.toFixed(1)};
                float rx = lx * tR;
                float w = 0.05 + (uCamZ - rz) * 0.004;
                lampRefl += warm * exp(-pow((p.x - rx) / w, 2.0)) * along;
              }
            }
            col += lampRefl * smoothstep(0.25, 0.75, wet) * (0.5 + 0.5 * rip) * 0.32;
            // moonlit sheen on wet patches
            col += vec3(0.02, 0.028, 0.045) * smoothstep(0.45, 0.2, wet) * onRoad * 0.6;
            float d = distance(vW, cameraPosition);
            col = mix(col, uFog, fogF(d));
            gl_FragColor = vec4(col, 1.0);
          }`,
      })
    ))
    roadMat = road.material
    scene.add(road)

    // reflector posts
    const posts = new THREE.InstancedMesh(new THREE.BoxGeometry(0.1, 1.1, 0.1), new THREE.MeshLambertMaterial({ color: '#8d9197' }), 120)
    const refl = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.06, 0.14, 0.02),
      new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(2.4, 0.9, 0.15), toneMapped: false }),
      120
    )
    const m = new THREE.Matrix4()
    let k = 0
    for (let z = 34; z > -860 && k < 120; z -= 32) {
      for (const x of [-7.3, 7.3]) {
        if (k >= 120) break
        m.makeTranslation(x, 0.55, z)
        posts.setMatrixAt(k, m)
        m.makeTranslation(x, 0.86, z + 0.07)
        refl.setMatrixAt(k, m)
        k++
      }
    }
    posts.count = refl.count = k
    posts.frustumCulled = refl.frustumCulled = false
    scene.add(posts, refl)
  }


  /* ---------------- street lamps ---------------- */
  {
    const n = LAMP_ROWS * 2
    const poleGeo = new THREE.CylinderGeometry(0.07, 0.11, LAMP_H, 8).translate(0, LAMP_H / 2, 0)
    const armGeo = new THREE.BoxGeometry(2.3, 0.08, 0.12)
    const headGeo = new THREE.BoxGeometry(0.75, 0.12, 0.3)
    const metal = new THREE.MeshLambertMaterial({ color: '#5a5f66' })
    const poles = new THREE.InstancedMesh(poleGeo, metal, n)
    const arms = new THREE.InstancedMesh(armGeo, metal, n)
    const heads = new THREE.InstancedMesh(headGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(4.5, 2.6, 1.1), toneMapped: false }), n)
    const m = new THREE.Matrix4()
    const glowPos = []
    let k = 0
    for (let i = 0; i < LAMP_ROWS; i++) {
      const z = LAMP_Z0 - i * LAMP_S
      for (const sd of [-1, 1]) {
        m.makeTranslation(sd * (LAMP_X + 2.2), 0, z)
        poles.setMatrixAt(k, m)
        m.makeTranslation(sd * (LAMP_X + 1.1), LAMP_H - 0.05, z)
        arms.setMatrixAt(k, m)
        m.makeTranslation(sd * LAMP_X, LAMP_H - 0.12, z)
        heads.setMatrixAt(k, m)
        glowPos.push(sd * LAMP_X, LAMP_H - 0.3, z)
        k++
      }
    }
    for (const o of [poles, arms, heads]) {
      o.frustumCulled = false
      scene.add(o)
    }
    // soft glow around each lamp head (fades with distance like real haze)
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(glowPos, 3))
    const glows = new THREE.Points(
      g,
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uMap: { value: glow }, uPixel: { value: dpr }, uH: { value: 900 } },
        vertexShader: `uniform float uPixel, uH; varying float vF;
          void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); float d = -mv.z;
            vF = exp(-d * 0.006);
            gl_PointSize = clamp(uPixel * uH * 2.6 / d, 2.0, 420.0);
            gl_Position = projectionMatrix * mv; }`,
        fragmentShader: `uniform sampler2D uMap; varying float vF;
          void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vec3(1.0, 0.6, 0.26) * a * a * 1.6 * vF + vec3(1.0,0.75,0.5) * pow(a, 6.0) * 2.0 * vF, 1.0); }`,
      })
    )
    glows.frustumCulled = false
    glows.renderOrder = 7
    scene.add(glows)
    lampGlowMat = glows.material
  }

  /* ---------------- guardrails (lit by the lamps) ---------------- */
  {
    const seg = 4
    const count = Math.floor((LAMP_Z0 + 10 + LAMP_ROWS * LAMP_S) / seg) * 2
    const rail = new THREE.InstancedMesh(new THREE.BoxGeometry(0.06, 0.32, seg - 0.05), new THREE.MeshBasicMaterial({ color: '#ffffff' }), count)
    const post = new THREE.InstancedMesh(new THREE.BoxGeometry(0.1, 0.7, 0.1), new THREE.MeshBasicMaterial({ color: '#ffffff' }), count)
    const m = new THREE.Matrix4()
    const c = new THREE.Color()
    let k = 0
    for (let z = LAMP_Z0 + 10; k < count; z -= seg) {
      for (const sd of [-1, 1]) {
        if (k >= count) break
        const dz = ((((z - LAMP_Z0) % LAMP_S) + LAMP_S * 1.5) % LAMP_S) - LAMP_S / 2
        const lit = Math.exp(-(dz * dz) / 40)
        c.setRGB(0.05 + lit * 0.55, 0.055 + lit * 0.36, 0.065 + lit * 0.18)
        m.makeTranslation(sd * 7.05, 0.62, z)
        rail.setMatrixAt(k, m)
        rail.setColorAt(k, c)
        m.makeTranslation(sd * 7.12, 0.35, z - seg / 2)
        post.setMatrixAt(k, m)
        post.setColorAt(k, c.multiplyScalar(0.7))
        k++
      }
    }
    rail.frustumCulled = post.frustumCulled = false
    scene.add(rail, post)
  }

  /* ---------------- city skyline at the end of the road ---------------- */
  {
    const r = rng(33)
    const n = mobile ? 70 : 130
    const box = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0)
    const mat = new THREE.ShaderMaterial({
      fog: false,
      uniforms: { uFog: { value: FOG } },
      vertexShader: `varying vec3 vW; varying vec3 vN; void main(){ vec4 w = modelMatrix * instanceMatrix * vec4(position,1.); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: `uniform vec3 uFog; varying vec3 vW; varying vec3 vN;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main(){
          vec2 f = abs(vN.z) > 0.5 ? vW.xy : vW.zy;
          vec2 cell = floor(f / vec2(2.2, 2.8));
          vec2 g = fract(f / vec2(2.2, 2.8));
          float win = step(0.25, g.x) * step(g.x, 0.75) * step(0.3, g.y) * step(g.y, 0.75);
          float on = step(0.8, h(cell + floor(vW.x * 0.01))) * (0.5 + 0.5 * h(cell * 3.1));
          vec3 wc = mix(vec3(1.0, 0.68, 0.35), vec3(0.65, 0.8, 1.0), step(0.8, h(cell * 1.7)));
          vec3 col = vec3(0.008, 0.01, 0.015) + wc * win * on * 0.55;
          col += vec3(1.5, 0.15, 0.1) * step(0.985, h(vec2(floor(vW.x), 1.0))) * step(abs(vN.y), 0.5) * 0.0; // reserved
          float d = length(vW.xz);
          float fog = 1.0 - exp(-pow(d * 0.0024, 2.0));
          gl_FragColor = vec4(mix(col, uFog * 1.5, fog * 0.9), 1.0);
        }`,
    })
    const city = new THREE.InstancedMesh(box, mat, n)
    const m = new THREE.Matrix4()
    for (let i = 0; i < n; i++) {
      const x = (r() - 0.5) * 900
      const z = -540 - r() * 160
      const centre = Math.exp(-Math.pow(x / 160, 2))
      const h = 12 + Math.pow(r(), 2.4) * 75 + centre * 25 * r()
      const w = 10 + r() * 22
      m.compose(new THREE.Vector3(x, -1, z), new THREE.Quaternion(), new THREE.Vector3(w, h, 8 + r() * 14))
      city.setMatrixAt(i, m)
    }
    city.frustumCulled = false
    city.renderOrder = -7
    scene.add(city)
    // red aviation lights on the tallest towers
    const tops = []
    const tmp = new THREE.Matrix4()
    const pos = new THREE.Vector3()
    const sc = new THREE.Vector3()
    for (let i = 0; i < n; i++) {
      city.getMatrixAt(i, tmp)
      tmp.decompose(pos, new THREE.Quaternion(), sc)
      if (sc.y > 70) tops.push(pos.x, sc.y - 0.6, pos.z)
    }
    const tg = new THREE.BufferGeometry()
    tg.setAttribute('position', new THREE.Float32BufferAttribute(tops, 3))
    aviation = new THREE.Points(tg, new THREE.PointsMaterial({ color: new THREE.Color().setRGB(3, 0.15, 0.1), size: 3, sizeAttenuation: false, fog: false, toneMapped: false, transparent: true }))
    scene.add(aviation)
  }

  /* ---------------- light rain ---------------- */
  {
    const n = mobile ? 700 : 1500
    const r = rng(41)
    const pos = new Float32Array(n * 6)
    const topY = new Float32Array(n * 2)
    for (let i = 0; i < n; i++) {
      const x = (r() - 0.5) * 26
      const y = r() * 12
      const z = -r() * 60
      const l = 0.35 + r() * 0.35
      pos.set([x, 0, z, x + 0.04, -l, z + 0.02], i * 6)
      topY[i * 2] = topY[i * 2 + 1] = y
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aTop', new THREE.BufferAttribute(topY, 1))
    rainMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { ...uniforms },
      vertexShader: `uniform float uTime, uCamZ, uCarZ, uProx; attribute float aTop; varying float vA;
        void main(){
          vec3 p = position;
          float y = mod(aTop - uTime * 9.0, 12.0) + p.y;
          vec3 w = vec3(p.x, y, uCamZ + mod(p.z, 60.0) - 58.0);
          vec4 mv = viewMatrix * vec4(w, 1.0);
          float dz = w.z - uCarZ;
          float beam = step(0.0, dz) * exp(-dz * 0.06) * (1.0 - smoothstep(1.5, 1.0 + dz * 0.25, abs(w.x)));
          vA = (0.05 + beam * (0.5 + uProx)) * smoothstep(1.0, 5.0, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `varying float vA; void main(){ gl_FragColor = vec4(vec3(0.7, 0.78, 0.9) * vA, 1.0); }`,
    })
    const rain = new THREE.LineSegments(g, rainMat)
    rain.frustumCulled = false
    rain.renderOrder = 8
    scene.add(rain)
  }

  /* ---------------- the car ---------------- */
  const car = new THREE.Group()
  scene.add(car)
  const carTex = new THREE.TextureLoader().load(carUrl)
  carTex.colorSpace = THREE.SRGBColorSpace
  carTex.anisotropy = 8
  const carUniforms = {
    ...uniforms,
    uMap: { value: carTex },
    uReveal: { value: 0 },
    uHL: { value: HL_UV },
    uMirror: { value: 0 },
    uLamp: { value: 0 },
  }
  const carFrag = /* glsl */ `
    uniform sampler2D uMap; uniform float uReveal, uProx, uMirror, uTime, uLamp; uniform vec3 uFog; uniform vec2 uHL[2];
    varying vec2 vUv; varying vec3 vW;
    ${fogChunk}
    void main(){
      vec2 uv = vUv;
      if (uMirror > 0.5) uv.x += sin(uv.y * 160.0 + uTime * 1.5) * 0.0025; // ripples in the wet road
      vec4 t = texture2D(uMap, uv);
      if (t.a < 0.01) discard;
      float lum = dot(t.rgb, vec3(0.299, 0.587, 0.114));
      // night grade: deep, cool, contrasty; revealed as the car comes close
      vec3 night = pow(t.rgb, vec3(1.25)) * vec3(0.32, 0.36, 0.5);
      vec3 col = mix(night, t.rgb * vec3(0.92, 0.95, 1.05), uReveal);
      // keep the LED headlights alive
      float hl = 0.0;
      for (int i = 0; i < 2; i++) {
        vec2 d = (uv - uHL[i]) * vec2(1.34, 1.0);
        hl += smoothstep(0.075, 0.0, length(d));
      }
      col += t.rgb * hl * smoothstep(0.55, 0.95, lum) * (2.5 + uProx * 3.0);
      // warm street-lamp light sweeping over roof, bonnet and shoulders
      col += t.rgb * vec3(1.0, 0.7, 0.42) * uLamp * (0.25 + 0.55 * smoothstep(0.35, 0.85, uv.y)) * (1.0 - uReveal * 0.6);
      // rim light along the roof and shoulders, cool blue
      col += vec3(0.05, 0.08, 0.16) * smoothstep(0.6, 1.0, lum) * (1.0 - uReveal) ;
      float a = t.a;
      if (uMirror > 0.5) {
        float fade = smoothstep(0.38, 0.95, uv.y); // strongest near the tyres
        a *= fade * 0.32;
        col *= 0.55;
      }
      float d = distance(vW, cameraPosition);
      col = mix(col, uFog, fogF(d));
      gl_FragColor = vec4(col, a);
    }`
  const carVert = `varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`
  const carGeo = new THREE.PlaneGeometry(PLANE_W, PLANE_H)
  const carMesh = new THREE.Mesh(
    carGeo,
    new THREE.ShaderMaterial({ uniforms: carUniforms, vertexShader: carVert, fragmentShader: carFrag, transparent: true, depthWrite: false })
  )
  carMesh.position.set(PLANE_X, PLANE_Y, 0)
  carMesh.renderOrder = 3
  car.add(carMesh)

  const mirrorUniforms = { ...carUniforms, uMirror: { value: 1 } }
  const mirror = new THREE.Mesh(
    carGeo,
    new THREE.ShaderMaterial({ uniforms: mirrorUniforms, vertexShader: carVert, fragmentShader: carFrag, transparent: true, depthWrite: false, depthTest: false })
  )
  mirror.position.set(PLANE_X, -PLANE_Y, 0.02)
  mirror.scale.y = -1
  mirror.renderOrder = 1
  car.add(mirror)

  // soft contact shadow
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.7, 1.6).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: glow, color: '#000', transparent: true, opacity: 0.9, depthWrite: false, fog: false })
  )
  shadow.position.set(PLANE_X, 0.01, -0.3)
  shadow.renderOrder = 2
  car.add(shadow)

  // headlight glow + anamorphic streak (always on top, never fogged)
  const spriteMat = (map, color, opacity) =>
    new THREE.SpriteMaterial({ map, color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, fog: false, toneMapped: false })
  const fx = HEADLIGHTS.map((p) => {
    const core = new THREE.Sprite(spriteMat(glow, new THREE.Color().setRGB(2.6, 2.8, 3.2), 1))
    const halo = new THREE.Sprite(spriteMat(glow, new THREE.Color().setRGB(0.45, 0.6, 1.0), 0.45))
    const flare = new THREE.Sprite(spriteMat(streak, new THREE.Color().setRGB(0.4, 0.6, 1.3), 0.55))
    for (const s of [core, halo, flare]) {
      s.position.copy(p)
      s.renderOrder = 10
      car.add(s)
    }
    return { core, halo, flare }
  })

  /* ---------------- dust in the beams ---------------- */
  {
    const n = mobile ? 1200 : 2600
    const r = rng(9)
    const pos = new Float32Array(n * 3)
    const seed = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (r() - 0.5) * 22
      pos[i * 3 + 1] = r() * 6
      pos[i * 3 + 2] = 6 - Math.pow(r(), 1.3) * 230
      seed[i] = r()
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1))
    const pts = new THREE.Points(
      g,
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { ...uniforms, uPixel: { value: dpr }, uMap: { value: glow } },
        vertexShader: /* glsl */ `
          uniform float uTime, uCarZ, uProx, uPixel; attribute float aSeed; varying float vB;
          void main(){
            vec3 p = position;
            p.x += sin(uTime * (0.15 + aSeed * 0.2) + aSeed * 40.0) * 0.8;
            p.y = mod(p.y + uTime * (0.04 + aSeed * 0.06), 6.0);
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            float dz = p.z - (uCarZ + 0.3);
            float ahead = step(0.0, dz) * (1.0 - smoothstep(3.0, 38.0, dz));
            float width = 0.9 + dz * 0.2;
            float lat = 1.0 - smoothstep(width * 0.4, width, abs(p.x));
            float hgt = 1.0 - smoothstep(0.4 + dz * 0.06, 1.2 + dz * 0.12, abs(p.y - 0.6));
            float camFade = smoothstep(1.5, 14.0, -mv.z);
            vB = (0.02 + ahead * lat * hgt * (0.18 + uProx * 0.16)) * camFade;
            gl_PointSize = clamp(uPixel * (0.5 + aSeed) * 18.0 / -mv.z, 0.0, 14.0 * uPixel);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `uniform sampler2D uMap; varying float vB; void main(){ float a = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(vec3(0.72,0.82,1.0) * vB * a, 1.0); }`,
      })
    )
    pts.frustumCulled = false
    pts.renderOrder = 6
    scene.add(pts)
  }

  /* ---------------- low ground fog ---------------- */
  const sheets = []
  {
    const ft = fogTex()
    const r = rng(17)
    const n = mobile ? 12 : 20
    for (let i = 0; i < n; i++) {
      const w = 30 + r() * 26
      const h = 5 + r() * 3
      const mat = new THREE.MeshBasicMaterial({ map: ft, color: '#8aa0c4', transparent: true, opacity: 0, depthWrite: false, fog: false })
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat)
      mesh.position.set((r() - 0.5) * 30, h * 0.5 - 0.15, 4 - Math.pow(i / n, 1.1) * 240 - r() * 6)
      mesh.renderOrder = 5
      scene.add(mesh)
      sheets.push({ mesh, mat, x: mesh.position.x, base: 0.025 + r() * 0.03, sp: (r() - 0.5) * 0.4 })
    }
  }

  /* ---------------- post-processing ---------------- */
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.6, 0.55, 0.88)
  composer.addPass(bloom)
  const zoomBlur = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uStrength: { value: 0 }, uCenter: { value: new THREE.Vector2(0.5, 0.48) } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D tDiffuse; uniform float uStrength; uniform vec2 uCenter; varying vec2 vUv;
      void main(){
        vec2 dir = vUv - uCenter; vec3 acc = vec3(0.0); float tot = 0.0;
        for (int i = 0; i < 10; i++) {
          float t = float(i) / 9.0; vec2 q = uCenter + dir * (1.0 - uStrength * t);
          vec3 c = vec3(texture2D(tDiffuse, q + dir * uStrength * 0.04).r, texture2D(tDiffuse, q).g, texture2D(tDiffuse, q - dir * uStrength * 0.04).b);
          float w = 1.0 - t * 0.55; acc += c * w; tot += w;
        }
        gl_FragColor = vec4(acc / tot, 1.0);
      }`,
  })
  if (!lite) composer.addPass(zoomBlur)
  composer.addPass(new OutputPass())

  /* ---------------- sizing ---------------- */
  let width = 1
  let height = 1
  const resize = () => {
    width = canvas.clientWidth || window.innerWidth
    height = canvas.clientHeight || window.innerHeight
    renderer.setSize(width, height, false)
    composer.setSize(width, height)
    composer.setPixelRatio(dpr)
    bloom.resolution.set(width / (lite ? 4 : 2), height / (lite ? 4 : 2))
    const aspect = width / height
    camera.aspect = aspect
    camera.fov = aspect < 1 ? clamp(THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(20)) / aspect)), 40, 72) : 40
    camera.updateProjectionMatrix()
  }
  resize()

  /* ---------------- per-frame ---------------- */
  let lastP = 0
  let vel = 0
  let time = 0
  let frames = 0
  let fpsT = 0
  let quality = 0
  const target = new THREE.Vector3()
  const out = { d: D_START, prox: 0 }

  const render = (p, dt) => {
    dt = Math.min(Math.max(dt, 0.001), 0.05)
    time += dt
    vel = lerp(vel, (p - lastP) / dt, 1 - Math.exp(-dt * 7))
    lastP = p

    const aspect = width / height
    const hfov = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * aspect)
    const dEnd = clamp(0.98 / (0.74 * Math.tan(hfov / 2)), 1.9, 5)
    const a = clamp(p / 0.8)
    const e = easeInOut(a)
    const d = D_START * Math.pow(dEnd / D_START, e)
    const prox = clamp(1 - Math.log(d / dEnd) / Math.log(D_START / dEnd))
    const fin = smooth(0.86, 0.98, p)
    const camZ = -18 * e
    const carZ = camZ - d
    out.d = d
    out.prox = prox

    // tiny suspension movement on the car, subtle handheld camera
    car.position.set(0, Math.sin(time * 11) * 0.002 * (1 - fin), carZ)
    const shake = Math.pow(prox, 4) * 0.004 * (1 - fin)
    camera.position.set(Math.sin(time * 0.31) * 0.03 + Math.sin(time * 37) * shake, lerp(1.22, 0.98, e) + fin * 0.06 + Math.sin(time * 41) * shake, camZ)
    target.set(0, lerp(1.0, 0.66, e) + fin * 0.04, carZ)
    camera.lookAt(target)

    uniforms.uCarZ.value = carZ
    uniforms.uCamZ.value = camZ
    uniforms.uProx.value = prox
    uniforms.uTime.value = time
    carUniforms.uReveal.value = smooth(0.45, 0.95, prox) * 0.85
    {
      const dzl = ((((carZ - LAMP_Z0) % LAMP_S) + LAMP_S * 1.5) % LAMP_S) - LAMP_S / 2
      carUniforms.uLamp.value = Math.exp(-(dzl * dzl) / 50)
    }
    if (lampGlowMat) lampGlowMat.uniforms.uH.value = height
    if (aviation) aviation.material.opacity = 0.5 + 0.5 * Math.sin(time * 3.0)
    roadMat.uniforms.uCamY.value = camera.position.y

    const vFov = THREE.MathUtils.degToRad(camera.fov)
    const px = (2 * Math.tan(vFov / 2) * Math.max(d, 0.5)) / height
    fx.forEach((f) => {
      f.core.scale.setScalar(Math.max(0.1, px * 18))
      f.halo.scale.setScalar(Math.max(0.55 - prox * 0.15, px * 70))
      f.halo.material.opacity = 0.35 - prox * 0.1
      f.flare.scale.set(Math.max(2.2 + prox * 1.5, px * 340), Math.max(0.035 + prox * 0.02, px * 9), 1)
      f.flare.material.opacity = (0.4 + prox * 0.15) * (1 - fin * 0.6)
      f.core.material.opacity = 1 - fin * 0.3
    })

    for (const s of sheets) {
      s.mesh.position.x = s.x + Math.sin(time * 0.05 + s.x) * 5 + time * s.sp * 0.2
      const dzs = s.mesh.position.z - carZ
      const lit = dzs > 0 ? Math.exp(-dzs / 25) : Math.exp(dzs / 4) * 0.4
      const toCam = camZ - s.mesh.position.z
      s.mat.opacity = (s.base + lit * (0.05 + prox * 0.04)) * smooth(1.5, 9, toCam) * (1 - smooth(120, 240, toCam))
      s.mat.color.setRGB(0.42 + lit * 0.4, 0.5 + lit * 0.4, 0.64 + lit * 0.4)
    }

    const v = Math.abs(vel)
    const rush = smooth(0.4, 0.85, prox) * (1 - smooth(0.92, 1, prox))
    const sBlur = clamp(v * 0.08 + rush * v * 0.22, 0, 0.1)
    zoomBlur.uniforms.uStrength.value += (sBlur - zoomBlur.uniforms.uStrength.value) * 0.2
    bloom.strength = 0.55 + prox * 0.3 - fin * 0.25

    composer.render(dt)

    // adaptive resolution
    frames++
    fpsT += dt
    if (fpsT > (lite ? 0.8 : 1.2)) {
      const fps = frames / fpsT
      // spadają klatki -> obniżamy jakość krok po kroku (rozdzielczość, potem rozmycie, potem poświata)
      if (fps < (lite ? 26 : 42) && quality < 5) {
        quality += fps < 15 && quality < 3 ? 2 : 1
        if (quality === 3 || quality === 4) zoomBlur.enabled = false
        if (quality === 1) dpr = Math.min(dpr, 1)
        else if (quality === 2) dpr = 0.75
        else if (quality === 3) { zoomBlur.enabled = false; dpr = 0.66 }
        else if (quality === 4) { bloom.enabled = false; zoomBlur.enabled = false }
        else dpr = 0.5
        renderer.setPixelRatio(dpr)
        resize()
      }
      frames = 0
      fpsT = 0
    }
    return out
  }

  const dispose = () => {
    renderer.dispose()
    composer.dispose?.()
  }

  return { render, resize, dispose, isLowest: () => quality >= 5 }
}
