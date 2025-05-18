## Vad är ett API?

- Ett API (Application Programming Interface) är ett sätt för program att kommunicera.
- Exempel: Din mobilapp frågar en server om dina data via API:t.

---

## REST vs GraphQL

| | REST | GraphQL |
|--|--|--|
| Strukturerat | Flera endpoints | En endpoint |
| Data | Fördefinierat | Du väljer själv |
| Flexibilitet | Begränsad | Hög |

---

## Varför API:er är sårbara

- Ingen frontend = mindre skydd
- JSON kan manipuleras
- Tokens används felaktigt
- Saknar ofta rate limiting
- GraphQL exponerar ofta mer än den borde

---

## Vad är BOLA?

- BOLA står för Broken Object Level Authorization.
- Det uppstår när API:et inte kontrollerar om du har rätt att se eller ändra en viss resurs.

---

## Exempel

Du är användare 123:

- `GET /api/user/123` → Rätt!
- `GET /api/user/124` → Du får någon annans data (fel!)

---

## Varför är API:er extra känsliga?

- Ingen session, bara tokens + ID:n
- Du kan lätt manipulera JSON eller URL
- API:er förlitar sig ofta på att klienten gör rätt

---

## Så testar du för BOLA

- Leta efter `id`, `user_id`, `account_id`
- Ändra ID:n i URL eller request body
- Kommer du åt något du inte borde?

---

# Autentiseringsbrister i API:er

---

### 1. Svaga eller saknade tokens

- API:et kräver inte token
- Token kontrolleras inte korrekt
- Token kan vara falsk, men ändå fungera

---

### 2. Ingen kontroll av resurs-ägarskap

- Du har en giltig token, men får data som tillhör någon annan
- API:et kollar inte vem som äger ID:t du frågar efter

---

### 3. Tokens utan utgångsdatum

- Giltiga för alltid
- Kan återanvändas om de läcker

---

### 4. Privilege escalation genom JSON

- Du skickar `"role": "admin"` i din request
- API:et accepterar och uppdaterar dig som admin

---

## Så här testar du

- Skicka request utan token
- Byt ut `role`, `user_id` i request-body
- Förfalska JWT och se om det accepteras

---

# GraphQL

---

## Vad är GraphQL?

- Ett språk för att hämta och ändra data via API
- Du skickar en fråga (query) eller ändring (mutation)
- Du får exakt den data du ber om – inget mer, inget mindre

---

## Exempel på query

```graphql
{
  user(id: 1) {
    name
    email
  }
}
```

---

## GraphQL: Introspection och Overposting

---

### Vad är introspection?

- GraphQL låter dig fråga vilka typer, queries och mutationer som finns
- Gör API:et självupptäckande
- Exponering = attackerare kan kartlägga allt

---

### Exempel: Introspection-query

```graphql
{
  __schema {
    types {
      name
      fields {
        name
      }
    }
  }
}
```

---

## Rate Limiting & Brute Force

---

### Vad är rate limiting?

- Begränsar hur ofta en användare eller IP kan anropa ett API
- Skyddar mot brute force, spam, överbelastning

---

### Exempel på brute force

- Massor av inloggningsförsök:

```http
POST /api/login
{ "email": "bobbo@corp.com", "password": "..." }
```