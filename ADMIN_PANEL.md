# Kursdaten - Hinweis

Die Website ist bewusst einfach gehalten. Es gibt keine Datenbank, keine Google-Sheets-Anbindung und keinen Login-Workflow mehr.

## Wo die Kurse liegen

Die Kurse sind direkt in [src/data/coursesConfig.ts](src/data/coursesConfig.ts) hinterlegt.

## Was die Seite /admin macht

Die Seite zeigt die aktuelle Kursliste und bietet einen JSON-Export an. Sie dient nur als kleine Hilfe für manuelle Inhalte.

## Wenn du Kurse ändern willst

1. Öffne [src/data/coursesConfig.ts](src/data/coursesConfig.ts)
2. Passe die Kurse direkt an
3. Lade die Seite neu

Oder exportiere die Liste über `/admin`, wenn du sie als JSON weitergeben willst.

## Kurz gesagt

- Kein Passwort
- Kein LocalStorage-Workflow
- Keine externe Kursverwaltung
