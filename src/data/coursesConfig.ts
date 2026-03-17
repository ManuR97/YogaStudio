// Google Sheets API Konfiguration
// Diese Datei lädt die Kurse direkt von Google Sheets

export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  level: string;
}

// Ersetze diese mit deinen Daten!
export const GOOGLE_SHEET_CONFIG = {
  // Deine Google Sheet ID (aus der URL)
  SHEET_ID: 'YOUR_GOOGLE_SHEET_ID_HERE',
  
  // Google API Key (mit Sheets API aktiviert)
  API_KEY: 'YOUR_GOOGLE_API_KEY_HERE',
  
  // Range in der Sheet (z.B. "Kurse!A1:F100")
  RANGE: 'Kurse!A1:F100'
};

// Beispiel Kurse (falls Google Sheets nicht verfügbar)
export const DEFAULT_COURSES: Course[] = [
  {
    id: 'hatha',
    name: 'Hatha Yoga',
    description: 'Klassisches Yoga für Körper und Geist. Perfekt für Einsteiger.',
    duration: '60 Min',
    level: 'Anfänger'
  },
  {
    id: 'vinyasa',
    name: 'Vinyasa Flow',
    description: 'Dynamische Sequenzen im Atemrhythmus für mehr Energie.',
    duration: '75 Min',
    level: 'Mittelstufe'
  },
  {
    id: 'yin',
    name: 'Yin Yoga',
    description: 'Sanfte, meditative Praxis für tiefe Entspannung.',
    duration: '90 Min',
    level: 'Alle Level'
  },
  {
    id: 'meditation',
    name: 'Meditation',
    description: 'Geführte Meditationen für innere Ruhe und Klarheit.',
    duration: '45 Min',
    level: 'Alle Level'
  }
];

/**
 * Lädt Kurse von Google Sheets
 * Returns DEFAULT_COURSES falls Fehler auftritt
 */
export const loadCoursesFromGoogleSheets = async (): Promise<Course[]> => {
  try {
    // Falls noch nicht konfiguriert
    if (GOOGLE_SHEET_CONFIG.SHEET_ID === 'YOUR_GOOGLE_SHEET_ID_HERE') {
      console.warn('⚠️  Google Sheets noch nicht konfiguriert. Verwende Standard-Kurse.');
      return DEFAULT_COURSES;
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_CONFIG.SHEET_ID}/values/${GOOGLE_SHEET_CONFIG.RANGE}?key=${GOOGLE_SHEET_CONFIG.API_KEY}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Fehler beim Laden von Google Sheets');
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length < 2) {
      console.warn('Google Sheet ist leer oder nicht formatiert korrekt');
      return DEFAULT_COURSES;
    }

    // Überspringe Header Row
    const courses: Course[] = rows.slice(1).map((row: any[], index: number) => ({
      id: `course-${index}`,
      name: row[0] || '',
      description: row[1] || '',
      duration: row[2] || '',
      level: row[3] || ''
    }));

    return courses.filter(c => c.name); // Filtere leere Zeilen
  } catch (error) {
    console.error('❌ Fehler beim Laden von Google Sheets:', error);
    return DEFAULT_COURSES;
  }
};
