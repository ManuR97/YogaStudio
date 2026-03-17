import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { loadCoursesFromGoogleSheets, DEFAULT_COURSES, Course } from '../data/coursesConfig';

const Booking = () => {
  const [courses, setCourses] = useState<Course[]>(DEFAULT_COURSES);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Lade Kurse beim Laden der Komponente
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(false);
      const loadedCourses = await loadCoursesFromGoogleSheets();
      setCourses(loadedCourses);
    };

    fetchCourses();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validierung
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      setError('Bitte füllen Sie alle Pflichtfelder aus');
      return;
    }

    // Email-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein');
      return;
    }

    // Telefon-Validierung (mindestens 6 Zeichen)
    if (formData.phone.replace(/\D/g, '').length < 6) {
      setError('Bitte geben Sie eine gültige Telefonnummer ein');
      return;
    }

    // Formular erfolgreich eingereicht
    setSubmitted(true);
    
    // Nach 3 Sekunden zurücksetzen
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const selectedCourse = courses.find(c => c.name === formData.course);

  return (
    <section className="py-20 min-h-screen flex items-center bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light text-gray-700 mb-4">Buche deine Klasse</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wähle deinen Lieblingskurs und kontaktiere uns für eine Anmeldung
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-light text-gray-700 mb-3">Vielen Dank für deine Anfrage!</h3>
              <p className="text-gray-600 mb-8">
                Wir haben deine Kontaktdaten erhalten und werden uns in Kürze bei dir melden.
              </p>
              <p className="text-sm text-gray-500">
                Diese Seite wird in Kürze zurückgesetzt...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Kurs-Auswahl */}
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                  Wähle einen Kurs *
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  required
                  disabled={loading}
                >
                  <option value="">
                    {loading ? 'Kurse werden geladen...' : '-- Kurs auswählen --'}
                  </option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Google Kalender Info */}
              {selectedCourse && (
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm text-gray-700 mb-3">
                    Sieh dir die verfügbaren Zeiten in unserem <strong>{selectedCourse.name}</strong>-Kalender an:
                  </p>
                  <a
                    href="https://calendar.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Google Kalender öffnen
                  </a>
                  <p className="text-xs text-gray-500 mt-3">
                    💡 Tipp: Kopiere den Link für den Kurs aus unserem Kalender und wähle einen Termin aus
                  </p>
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Max Mustermann"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="max@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Telefon */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+49 123 456789"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Nachricht */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Z.B. Anfängerin / Verletzungen / besondere Wünsche..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none"
                />
              </div>

              {/* Fehler-Anzeige */}
              {error && (
                <div className="p-4 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition transform hover:scale-105 active:scale-95"
              >
                Anfrage senden
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Pflichtfelder
              </p>
            </form>
          )}
        </div>

        {/* Info-Box */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-medium text-gray-700 mb-3">Wie funktioniert die Anmeldung?</h3>
          <ol className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-3">
              <span className="font-medium text-blue-600 min-w-fit">1.</span>
              <span>Wähle einen Kurs und schau dir die verfügbaren Zeiten in Google Kalender an</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-blue-600 min-w-fit">2.</span>
              <span>Fülle dieses Formular aus und erwähne deinen gewünschten Termin</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-blue-600 min-w-fit">3.</span>
              <span>Wir bestätigen deine Anmeldung per E-Mail oder Telefon</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Booking;
