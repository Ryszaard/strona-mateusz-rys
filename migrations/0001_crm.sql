-- Baza CRM (Cloudflare D1, nazwa bazy: crm, binding w Pages: DB)
-- Uruchomienie: Cloudflare → Storage & databases → D1 → crm → Console → wklej i wykonaj.

CREATE TABLE IF NOT EXISTS orders (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  number        TEXT UNIQUE,                         -- np. MR-2026-0001
  created_at    TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now')),
  updated_at    TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now')),
  status        TEXT NOT NULL DEFAULT 'nowe',        -- nowe, kontakt, wycena, zaakceptowane, realizacja, oddane, oplacone, odrzucone
  source        TEXT NOT NULL DEFAULT 'formularz',   -- formularz albo recznie
  lang          TEXT NOT NULL DEFAULT 'pl',
  name          TEXT NOT NULL,
  company       TEXT,
  email         TEXT,
  phone         TEXT,
  package       TEXT,
  price_range   TEXT,
  agreed_price  INTEGER,                             -- uzgodniona cena w zł (brutto, bez groszy)
  notes         TEXT,                                -- notatki Mateusza
  data          TEXT NOT NULL DEFAULT '{}',          -- wszystkie pola formularza (JSON)
  ip_hash       TEXT                                 -- skrót adresu IP (tylko ochrona przed spamem)
);

CREATE INDEX IF NOT EXISTS idx_orders_created ON orders (created_at);
CREATE INDEX IF NOT EXISTS idx_orders_status  ON orders (status);
CREATE INDEX IF NOT EXISTS idx_orders_ip      ON orders (ip_hash, created_at);
