# 🧘 Yoga Studio - Webseite

Eine moderne, einfache Webseite für dein Yoga-Studio ohne komplexe Infrastruktur.

## ✨ Features

- **Responsive Design** - Funktioniert auf allen Geräten (Mobile, Tablet, Desktop)
- **Kurs-Übersicht** - Zeige deine Kurse und Angebote
- **Einfaches Kontaktformular** - Besucher können sich für Kurse anmelden
- **Google Kalender Integration** - Verwalte deine Kurstermine über Google Kalender
- **Keine Datenbank nötig** - Alles läuft lokal im Browser
- **Sauberer Code** - React + TypeScript + Tailwind CSS

## 🚀 Getting Started

### Voraussetzungen

- Node.js 16+ und npm installiert

### Installation

```bash
# 1. Dependencies installieren
npm install

# 2. Entwicklungsserver starten
npm start
```

Die App läuft dann unter [http://localhost:3000](http://localhost:3000)

## 📋 Struktur

```
src/
├── pages/
│   ├── Home.tsx        - Startseite mit Hero
│   ├── About.tsx       - Über uns
│   ├── Courses.tsx     - Kurs-Katalog
│   ├── Booking.tsx     - Kontaktformular mit Google Kalender Integration
│   └── Contact.tsx     - Kontakt/Impressum
├── components/
│   ├── Header.tsx      - Navigation
│   ├── Footer.tsx      - Footer
│   └── CookieBanner.tsx - Cookie Consent
└── App.tsx             - Hauptkomponente
```

## � Google Sheets einrichten (Kursverwaltung)

Deine Kurse werden automatisch von einer Google Sheets-Tabelle geladen. So kannst du die Kurse jederzeit aktualisieren ohne den Code zu ändern.

### Schritt-für-Schritt Setup:

**Siehe:** [📘 GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) für detaillierte Anleitung

**Kurz zusammengefasst:**
1. Google Sheets-Tabelle mit deinen Kursen erstellen
2. Google Cloud API konfigurieren (kostenlos)
3. API-Key und Sheet-ID in `src/data/coursesConfig.ts` eingeben
4. Website neu laden - Kurse werden automatisch angezeigt!

**Beispiel Tabelle (Google Sheets):**
```
Kursname    | Beschreibung                   | Dauer  | Level
------------|--------------------------------|--------|----------
Hatha Yoga  | Sanfte Dehnübungen            | 60 Min | Anfänger
Vinyasa Flow| Dynamische Sequenzen          | 75 Min | Mittelstufe
Stuhl-Yoga  | Yoga im Sitzen für Senioren   | 45 Min | Anfänger
Yin Yoga    | Tiefe Entspannung             | 90 Min | Alle Level
```

## 🗓️ Google Kalender verlinken

1. Erstelle einen Google Kalender für deine Kurse
2. Trage deine Kurstermine ein
3. Teile den Kalender öffentlich
4. Besucher können im Kontaktformular die verfügbaren Zeiten sehen

## 📧 Kontaktformular konfigurieren

Das Kontaktformular auf der Booking-Seite sammelt Anfragen. Aktuell werden Daten nur im Browser gespeichert.

### E-Mail-Versand einrichten (Optional):

Wenn du E-Mails für Anfragen bekommen möchtest, nutze eine dieser Optionen:

**Option 1: Formspree (Empfohlen)**
1. Gehe zu [formspree.io](https://formspree.io)
2. Registriere dich kostenlos
3. Erstelle ein neues Formular
4. Kopiere deine Form-ID (z.B. `f_abc123def`)
5. Aktualisiere `src/pages/Booking.tsx` - Zeile nach `<form onSubmit=...` in:
```typescript
<form onSubmit={(e) => {
  handleSubmit(e);
  // Sende Daten auch zu Formspree
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
}}
```

**Option 2: Netlify Forms**
Wenn du auf Netlify hostest, nutze deren kostenlosen Form-Service automatisch.

**Option 3: Backend-Service**
- SendGrid, Mailgun, oder eigenes Backend einbinden

### Oder manuell:
Besucher schreiben dir E-Mails direkt - du antwortest persönlich. 💌

## 🎨 Design anpassen

Das Projekt nutzt **Tailwind CSS** für Styling:

- Farben in `tailwind.config.js` anpassen
- CSS-Dateien in `src/` bearbeiten

## 📱 Build für Production

```bash
# Production-Build erstellen
npm run build

# Folder "build/" ist ready für Deployment
```

## 🔒 Datenschutz & DSGVO

- ✅ Keine Datenbank - Keine persönlichen Daten lokal gespeichert
- ✅ Keine Google Analytics
- ✅ Cookie Banner - DSGVO konform
- ⚠️ Impressum & Datenschutz erforderlich (bearbeite Contact.tsx)

## 🚀 Deployment Optionen

### Vercel (Empfohlen)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Lade "build/" Folder auf netlify.com hoch
```

### GitHub Pages
```bash
npm run build
# Push build/ zu deinem Repository
```

## 📝 Nächste Schritte

1. **Google Kalender** - Erstelle Kalender für deine Kurse und verlinke sie
2. **Formspree** - Richte einen Form-Handler ein für E-Mails
3. **Impressum** - Bearbeite `src/pages/Contact.tsx` mit deinen Kontaktdaten
4. **Content** - Personalisiere alle Seiten mit deinen Kursen und Infos
5. **Deployment** - Hoste die App auf Vercel, Netlify oder GitHub Pages

## 🆘 Troubleshooting

### npm install Fehler
```bash
rm -r node_modules package-lock.json
npm install
```

### App lädt nicht
- Browser Console öffnen (F12) - Fehler ansehen
- Port 3000 überprüfen

### Tailwind CSS funktioniert nicht
- Neustarten: `npm start`
- Cache löschen: `npm run build`

---

**Viel Spaß mit deiner Yoga-Studio Webseite! 🧘‍♀️**
