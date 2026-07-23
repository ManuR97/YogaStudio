# Yoga Studio - Webseite

Eine schlichte React-Webseite für ein Yoga-Studio. Der Fokus liegt auf einer ruhigen Startseite, einer Kursübersicht, einer einfachen Anfrage und den Pflichtseiten.

## Starten

```bash
npm install
npm start
```

Die App läuft dann unter http://localhost:3000.

## Aufbau

- `src/pages/Home.tsx` - Startseite
- `src/pages/About.tsx` - Über mich
- `src/pages/Courses.tsx` - Kurse
- `src/pages/Booking.tsx` - Anfrageformular
- `src/pages/Contact.tsx` - Kontakt
- `src/pages/Legal.tsx` - Impressum
- `src/pages/Privacy.tsx` - Datenschutz
- `src/pages/Admin.tsx` - einfache Kursübersicht und JSON-Export

## Inhalte anpassen

Die Kursliste liegt direkt in `src/data/coursesConfig.ts`. Wenn du Inhalte ändern willst, passe dort die Einträge an. Die Admin-Seite ist nur eine kleine Hilfe zum Export der aktuellen Liste.

## Hinweise

- Es gibt keine Datenbank und keine externe Kursverwaltung.
- Das Anfrageformular sammelt nur die Daten, die im Browser eingegeben werden.
- Bitte prüfe Impressum und Datenschutz vor dem Livegang mit deinen echten Kontaktdaten.

## Build

```bash
npm run build
```
