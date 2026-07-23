import React from 'react';

const Privacy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light text-gray-700 mb-8">Datenschutzerklärung</h1>
        <p className="text-gray-600 mb-6">Zuletzt aktualisiert: Juli 2026</p>

        <div className="bg-white rounded-lg p-8 space-y-8 text-gray-700">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">1. Verantwortliche Person</h2>
            <p className="mb-2">
              <strong>Name:</strong> Bitte eintragen
            </p>
            <p className="mb-2">
              <strong>Adresse:</strong> Bitte eintragen
            </p>
            <p className="mb-2">
              <strong>E-Mail:</strong> info@divinesoul-yoga.at
            </p>
            <p>
              <strong>Telefon:</strong> Bitte eintragen
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">2. Erfassung und Verarbeitung von Daten</h2>
            <p className="mb-4">
              Wir respektieren deine Privatsphäre. Diese Webseite sammelt nur die Informationen, die du freiwillig im Kontakt- oder Buchungsformular eingibst.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-2">2.1 Kontaktformular</h3>
            <p className="mb-4">
              Wenn du unser Kontaktformular ausfüllst, erfassen wir:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Vollständiger Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Nachricht/Anfrage</li>
            </ul>
            <p className="mb-4">
              Diese Daten werden verwendet um:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Deine Kursbuchung zu verarbeiten</li>
              <li>Dir eine Bestätigung zu senden</li>
              <li>Mit dir in Kontakt zu treten</li>
              <li>Fragen zu beantworten</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">3. Cookies</h2>
            <p className="mb-4">
              Unsere Webseite verwendet nur ein einfaches Cookie-Banner, damit du deine Auswahl speichern kannst:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Deine Präferenzen zu speichern</li>
              <li>Cookie-Einstellungen zu merken</li>
            </ul>
            <p className="mt-4">
              Du kannst Cookies in deinen Browser-Einstellungen deaktivieren. Dies kann aber die Funktionalität einschränken.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">4. Speicherdauer</h2>
            <p className="mb-4">
              Deine Daten werden wie folgt gespeichert:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Kontakt- und Buchungsanfragen: nur so lange wie für die Bearbeitung nötig</li>
              <li>Cookie-Auswahl: abhängig von den Browser-Einstellungen</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">5. Deine Rechte</h2>
            <p className="mb-4">
              Du hast das Recht:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Auskunft über deine gespeicherten Daten</li>
              <li>Berichtigung falscher Daten</li>
              <li>Löschung deiner Daten ("Recht auf Vergessenwerden")</li>
              <li>Widerspruch gegen Datenverarbeitung</li>
            </ul>
            <p className="mt-4">
              Kontaktiere uns unter: <a href="mailto:info@divinesoul-yoga.at" className="text-purple-600 hover:underline">info@divinesoul-yoga.at</a>
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">6. Sicherheit</h2>
            <p className="mb-4">
              Wir schützen deine Daten durch:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>HTTPS-Verschlüsselung (SSL/TLS)</li>
              <li>Schutz vor unbefugtem Zugriff auf Seitenebene</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
            <p className="mb-4">
              Wir können diese Datenschutzerklärung jederzeit aktualisieren. Die letzte Änderung ist oben vermerkt.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">8. Fragen?</h2>
            <p>
              Hast du Fragen zu dieser Datenschutzerklärung? <br />
              Kontaktiere uns: <a href="mailto:info@divinesoul-yoga.at" className="text-purple-600 hover:underline">info@divinesoul-yoga.at</a>
            </p>
          </div>

          {/* DSGVO Notice */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Datenschutz-Grundverordnung (DSGVO):</strong> Diese Seite ist bewusst schlank gehalten. Bitte ergänze die Texte mit deinen echten Kontaktdaten und prüfe sie vor dem Livegang rechtlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
