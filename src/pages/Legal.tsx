import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Legal = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light text-gray-700 mb-8">Impressum</h1>
        
        <div className="bg-white rounded-lg p-8 space-y-8 text-gray-700">
          {/* Betreiberin */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-purple-600" />
              Betreiberin
            </h2>
            <p className="font-semibold text-lg mb-2">Name bitte eintragen</p>
            <p className="text-gray-600">Studiobetreiberin / Yogalehrerin</p>
          </div>

          {/* Kontaktinformationen */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-6 flex items-center gap-3">
              <Phone className="w-6 h-6 text-purple-600" />
              Kontaktinformationen
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Adresse:</p>
                  <p className="text-gray-600">Adresse bitte eintragen</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Telefon:</p>
                  <p>
                    <a href="tel:+430000000000" className="text-purple-600 hover:underline">
                      Telefonnummer bitte eintragen
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">E-Mail:</p>
                  <p>
                    <a href="mailto:info@divinesoul-yoga.at" className="text-purple-600 hover:underline">
                      info@divinesoul-yoga.at
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Haftungsausschluss */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">Haftungsausschluss</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Inhalte der Webseite:</strong> Die Inhalte dieser Webseite wurden sorgfältig erstellt. Wir können jedoch keine Garantie für die Richtigkeit, Vollständigkeit oder Aktualität geben. Die Nutzung der Inhalte erfolgt auf eigenes Risiko.
              </p>
              <p>
                <strong>Yoga ist kein Ersatz für medizinische Behandlung:</strong> Die Yoga-Kurse dienen zur Entspannung und zum Wohlbefinden. Sie sind kein Ersatz für medizinische Ratschläge, Diagnosen oder Behandlung. Bei gesundheitlichen Bedenken konsultiere bitte einen Arzt.
              </p>
              <p>
                <strong>Externe Links:</strong> Diese Webseite enthält Links zu anderen Webseiten. Wir sind nicht verantwortlich für den Inhalt dieser externen Seiten.
              </p>
            </div>
          </div>

          {/* Datenschutz */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">Datenschutz</h2>
            <p className="text-gray-600">
              Siehe auch unsere <a href="#privacy" className="text-purple-600 hover:underline">Datenschutzerklärung</a> für weitere Informationen zur Verarbeitung persönlicher Daten.
            </p>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">Urheberrecht & Lizenz</h2>
            <p className="text-gray-600 mb-4">
              © 2026 Divinesoul Yoga. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-600">
              Die Inhalte dieser Webseite (Texte, Bilder, Grafiken) sind urheberrechtlich geschützt. Jede weitere Verwendung ohne Genehmigung ist untersagt.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Wichtiger Hinweis:</strong> Bitte trage vor dem Livegang deine echten Kontaktdaten ein und prüfe die rechtlichen Angaben.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <p className="text-center text-gray-600 mt-8 text-sm">
          Zuletzt aktualisiert: Juli 2026
        </p>
      </div>
    </section>
  );
};

export default Legal;