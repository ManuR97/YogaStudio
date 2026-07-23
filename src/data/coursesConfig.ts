export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  level: string;
}

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

export const loadCoursesFromGoogleSheets = async (): Promise<Course[]> => Promise.resolve(DEFAULT_COURSES);
