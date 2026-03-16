# 🗓️ Google Sheets Integration Setup

Diese Anleitung zeigt dir Schritt für Schritt, wie du deine Yoga-Kurse in einer Google Sheets-Tabelle verwalten kannst, die automatisch auf der Website angezeigt werden.

## Warum Google Sheets?

✅ **Einfache Verwaltung** - Keine technischen Kenntnisse nötig
✅ **Echtzeit-Updates** - Änderungen sind sofort auf der Website sichtbar
✅ **Kostenlos** - Google bietet unbegrenzten Speicher
✅ **Zugriff von überall** - Online-Tabellenkalkulation
✅ **Sicherheit** - Google sichert deine Daten

---

## 📋 Schritt 1: Google Sheets-Tabelle erstellen

### 1.1 Neue Tabelle erstellen

1. Gehe zu [Google Sheets](https://sheets.google.com)
2. Klicke auf **"Neue Tabelle erstellen"** → **"Leere Tabelle"**
3. Benne die Tabelle um zu: **"Yoga Studio - Kurse"**

### 1.2 Tabellenlayout einrichten

Erstelle folgende Spalten in **Zeile 1**:

| Spalte | Name | Beispiel |
|--------|------|----------|
| A | Kursname | Hatha Yoga |
| B | Beschreibung | Sanfte Dehnübungen für Anfänger |
| C | Dauer | 60 Min |
| D | Level | Anfänger |

**So sieht Zeile 1 aus:**
```
Kursname | Beschreibung | Dauer | Level
```

### 1.3 Kurse hinzufügen

Starte ab **Zeile 2** und trage deine Kurse ein:

```
Zeile 2: Hatha Yoga | Sanfte Dehnübungen für Anfänger | 60 Min | Anfänger
Zeile 3: Power Yoga | Kräftigende Übungen mit Atemtechniken | 75 Min | Fortgeschritten
Zeile 4: Stuhl-Yoga | Yoga im Sitzen, ideal für Senioren | 45 Min | Anfänger
Zeile 5: Yin Yoga | Tiefe Entspannung und Flexibilität | 60 Min | Alle Levels
```

**Beispiel:**
```
A          | B                                    | C       | D
Hatha Yoga | Sanfte Dehnübungen für Anfänger     | 60 Min  | Anfänger
Power Yoga | Kräftigende Übungen mit Atemtechniken | 75 Min | Fortgeschritten
Stuhl-Yoga | Yoga im Sitzen, ideal für Senioren | 45 Min  | Anfänger
Yin Yoga   | Tiefe Entspannung und Flexibilität  | 60 Min  | Alle Levels
```

---

## 🔐 Schritt 2: Tabelle öffentlich freigeben

### 2.1 Öffentlich machen

1. Klicke rechts oben auf **"Freigeben"** (Share-Button)
2. Klicke auf **"Ändern"** (neben "Eingeschränkt")
3. Wähle **"Jeder mit dem Link"** oder **"Öffentlich"**
4. Stelle sicher: **"Viewer"** (Ansicht) ist ausgewählt
5. Klicke **"Kopieren"** (um den Link zu kopieren)
6. Klicke **"Fertig"**

> ⚠️ **Wichtig:** Die Tabelle muss für die Website lesbar sein!

---

## 🔑 Schritt 3: Google Cloud API einrichten

### 3.1 Google Cloud Projekt erstellen

1. Gehe zu [Google Cloud Console](https://console.cloud.google.com)
2. Wenn nötig, melde dich mit deinem Google-Konto an
3. Klicke oben auf **"Projekt wählen"** → **"Neues Projekt"**
4. Gib den Namen ein: **"Yoga Studio Website"**
5. Klicke **"Erstellen"** und warte auf die Bestätigung

### 3.2 Google Sheets API aktivieren

1. Suche oben nach **"Sheets API"**
2. Klicke auf **"Google Sheets API"**
3. Klicke auf **"Aktivieren"**

### 3.3 API-Schlüssel erstellen

1. Klicke auf **"Anmeldedaten"** in der linken Seitenleiste
2. Klicke **"+ Anmeldedaten erstellen"** → **"API-Schlüssel"**
3. Ein neuer API-Schlüssel wird angezeigt
4. Kopiere den Schlüssel und speichere ihn sicher

> ✅ **Beispiel API-Schlüssel:** `AIzaSyDx...` (sehr lang)

---

## 🎯 Schritt 4: Sheet-ID herausfinden

### 4.1 Sheet-ID aus der URL

1. Öffne deine Google Sheets-Tabelle
2. Schaue auf die URL in der Adressleiste:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_HIER/edit
   ```
3. Kopiere die lange ID zwischen `/d/` und `/edit`

**Beispiel URL:**
```
https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j/edit
```

**Sheet-ID:** `1a2b3c4d5e6f7g8h9i0j`

---

## 📝 Schritt 5: Website konfigurieren

### 5.1 Datei bearbeiten

1. Öffne das Projekt in deinem Code-Editor (z.B. VS Code)
2. Navigiere zu: `src/data/coursesConfig.ts`
3. Ersetze die Platzhalter:

```typescript
export const GOOGLE_SHEET_CONFIG = {
  SHEET_ID: 'HIER_DEINE_SHEET_ID_EINGEBEN',
  API_KEY: 'HIER_DEIN_API_KEY_EINGEBEN',
  RANGE: 'Kurse!A1:D100'
};
```

### 5.2 Beispiel-Konfiguration

```typescript
export const GOOGLE_SHEET_CONFIG = {
  SHEET_ID: '1a2b3c4d5e6f7g8h9i0j',
  API_KEY: 'AIzaSyDx123456789...',
  RANGE: 'Kurse!A1:D100'
};
```

### 5.3 Speichern und testen

1. Speichere die Datei (Ctrl+S)
2. Die Website aktualisiert sich automatisch
3. Gehe zur **"Kurse"**-Seite
4. Du solltest deine Kurse sehen!

---

## ✅ Fehlersuche

### Problem: "Kurse werden nicht angezeigt"

**Lösung:**
1. Öffne die Browser-Konsole (F12 → Console)
2. Schau nach roten Fehlermeldungen
3. Kontrolliere:
   - [ ] Sheet-ID ist korrekt kopiert?
   - [ ] API-Key ist korrekt kopiert?
   - [ ] Google Sheets Tabelle ist öffentlich?
   - [ ] Google Sheets API ist aktiviert?

### Problem: "403 Forbidden Error"

**Bedeutung:** API-Key hat nicht genug Berechtigung

**Lösung:**
1. Gehe zurück zu [Google Cloud Console](https://console.cloud.google.com)
2. Wähle dein Projekt: **"Yoga Studio Website"**
3. Klicke auf **"Anmeldedaten"**
4. Überprüfe, dass **Google Sheets API** aktiviert ist
5. Erstelle einen neuen API-Schlüssel (falls nötig)

### Problem: "Sheet-ID ungültig"

**Lösung:**
1. Öffne deine Google Sheets-Tabelle
2. Überprüfe die URL nochmal
3. Kopiere die ID neu und vermeide Leerzeichen
4. Teste die ID in dieser URL:
   ```
   https://sheets.googleapis.com/v4/spreadsheets/SHEET_ID/values/Kurse!A1:D100?key=API_KEY
   ```

---

## 🎨 Kurse anpassen

### Spalten ändern

Falls du andere Spalten nutzen möchtest, ändere `RANGE` in `coursesConfig.ts`:

```typescript
// Nur erste 3 Spalten
RANGE: 'Kurse!A1:C100'

// Mit 5 Spalten (z.B. mit Preis)
RANGE: 'Kurse!A1:E100'
```

### Andere Sheet-Namen

Falls deine Tabelle anders heißt (z.B. "Classes"):

```typescript
RANGE: 'Classes!A1:D100'  // Statt 'Kurse!A1:D100'
```

---

## 🔄 Updates durchführen

Die Website lädt die Kurse automatisch:
- ✅ Beim Laden der "Kurse"-Seite
- ✅ Alle Änderungen sind sofort sichtbar
- ✅ Keine Wartezeit nötig

**So aktualisierst du deine Kurse:**
1. Öffne deine Google Sheets-Tabelle
2. Ändere einen Kurs
3. Aktualisiere die Website (Browser-Refresh)
4. Die neuen Kurse werden sofort angezeigt

---

## 🚀 Fortgeschrittene Optionen

### Mit Google Kalender verbinden

Die Website verlinkt automatisch auf Google Kalender für die Stundenplanung:

1. Erstelle einen Google Kalender für deine Yogakurse
2. Teile den Link in deiner Booking-Seite
3. Kurse sehen verfügbare Zeiten im Kalender

### CSV-Export (Backup)

Falls du die Daten sichern möchtest:
1. Öffne Google Sheets
2. Klicke **"Datei"** → **"Herunterladen als"** → **"CSV"**

---

## 📞 Unterstützung

Falls etwas nicht funktioniert:

1. **Überprüfe die Browser-Konsole** (F12 → Console Tab)
2. **Teste deine API** in dieser URL:
   ```
   https://sheets.googleapis.com/v4/spreadsheets/SHEET_ID/values/Kurse!A1:D100?key=API_KEY
   ```
3. **Kontaktiere deinen Entwickler** mit der Fehlermeldung aus der Konsole

---

## 🎓 Zusammenfassung der Schritte

| Schritt | Was zu tun ist | Status |
|---------|----------------|--------|
| 1 | Google Sheets-Tabelle erstellen | ⬜ |
| 2 | Kurse in die Tabelle eingeben | ⬜ |
| 3 | Tabelle öffentlich freigeben | ⬜ |
| 4 | Google Cloud Projekt erstellen | ⬜ |
| 5 | Sheets API aktivieren | ⬜ |
| 6 | API-Schlüssel erstellen | ⬜ |
| 7 | Sheet-ID kopieren | ⬜ |
| 8 | `coursesConfig.ts` bearbeiten | ⬜ |
| 9 | Website testen | ⬜ |

---

**Viel Spaß mit deinem Yoga Studio! 🧘‍♀️**

Falls du noch Fragen hast, kontaktiere deine IT-Person oder den Website-Entwickler.
