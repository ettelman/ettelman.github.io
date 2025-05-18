# ✅ API Pentest Checklista

> En strukturerad lista för att testa REST och GraphQL-API:er

---

## 🔍 Upptäck API:et

- Dokumentation (Swagger, GraphQL schema)?
- Brute force av endpoints (`ffuf`, introspection)?
- Fungerar introspection i GraphQL?

---

## 🔐 Autentisering & Tokens

- Krävs `Authorization`-header?
- Kan man kringgå auth?
- JWT:
  - Manipulerbar?
  - `exp` saknas?
- Tokens utan utgångstid?

---

## 🛡️ Autorisering / Åtkomst

- BOLA: Kan du byta ID i URL eller JSON?
- Går det att höja privilegier (`role: admin`)?
- Saknas resurskontroll?

---

## 📦 Input / Overposting

- Kan du skicka extra fält?
- Mass assignment möjlig?
- Valideras `null`, tomma strängar, fel datatyper?

---

## 📈 Rate Limiting

- Går det att brute force login/reset?
- Kommer `429 Too Many Requests`?
- Finns `Retry-After`?
- Testa från olika IP:er

---

## 🧪 Injection / Attacker

- SQL Injection
- Command Injection
- Path Traversal
- Reflekterad XSS via JSON

---

## 🔐 Transport / CORS

- Används alltid HTTPS?
- `Access-Control-Allow-Origin` för permissiv?
- CORS-kringgåenden?

---

## 🧾 Felhantering

- Stack traces?
- Felmeddelanden med känslig information?

---

## 📤 Dataexponering

- Exponeras fält som:
  - `is_admin`
  - `user_id`
  - `password_hash`?

---

## 🎯 Klar!

Använd denna checklista som struktur i dina pentest eller API-labs.
