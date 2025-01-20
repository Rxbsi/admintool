# 🛠️ Admin Tool

Ein einfaches **Admin Tool** zur Verwaltung von **Benutzern**.

## 🚀 Features

- **🔹 Benutzer hinzufügen**: Erstelle neue Benutzerkonten mit den benötigten Details.
- **🔹 Benutzer entfernen**: Lösche Benutzerkonten aus der Datenbank.
- **🔹 Benutzerdetails einsehen**: Zeige die Details der Benutzer an, einschließlich Name, E-Mail und weiterer Informationen.

## 🧑‍💻 Endpunkte

### 1. Benutzer hinzufügen 📤
- **Methode**: `POST`
- **URL**: `/api/user/create`

- **Request Body**:
```json
{
  "username": "neuerBenutzer",
  "email": "neuer.benutzer@example.com",
  "password": "sicheresPasswort",
  "name": "Max",
  "lastName": "Mustermann"
}
```

### 2. Alle benutzer anzeigen 👪
- **Methode**: `GET`
- **URL**: `/api/user/users`

**Zeigt die User in folgendem Format an:**
```json
{
  "id:" 1
  "username": "username",
  "email": "email.email@example.com",
  "password": "password",
  "name": "name",
  "lastName": "lastName"
}
```
