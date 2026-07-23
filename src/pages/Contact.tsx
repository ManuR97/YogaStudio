import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-700 mb-4">Kontakt</h2>
          <p className="text-lg text-gray-600">Wir freuen uns auf deine Nachricht</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-10 text-center shadow-md hover:shadow-lg transition">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-purple-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Telefon</h3>
            <p className="text-gray-600 font-medium">+43 670 3540160</p>
            <p className="text-sm text-gray-500 mt-2">Montag - Samstag: 9:00 - 18:00</p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-md hover:shadow-lg transition">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-purple-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">E-Mail</h3>
            <a href="mailto:info@divinesoul-yoga.at" className="text-purple-600 hover:underline font-medium">
              info@divinesoul-yoga.at
            </a>
            <p className="text-sm text-gray-500 mt-2">Antwort innerhalb von 24 Stunden</p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-md hover:shadow-lg transition">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-purple-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Adresse</h3>
            <p className="text-gray-600 font-medium">Adresse bitte eintragen</p>
            <p className="text-sm text-gray-500 mt-2">6921 Kennelbach</p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Für weitere Informationen siehe auch:
          </p>
          <div className="space-x-6">
            <a href="/legal" className="text-purple-600 hover:underline">
              Impressum
            </a>
            <span className="text-gray-400">•</span>
            <a href="/privacy" className="text-purple-600 hover:underline">
              Datenschutz
            </a>
            <span className="text-gray-400">•</span>
            <a href="#booking" className="text-purple-600 hover:underline">
              Kursbuchung
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;