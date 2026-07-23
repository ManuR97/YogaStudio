import React from 'react';
import { Mail } from 'lucide-react';

const Booking = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-700 mb-3">
            Kursbuchung
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-6">
            Für eine Buchung deiner Kurse erreichst du uns gern direkt per E-Mail oder über das Kontaktformular.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-sm sm:text-base text-white font-medium hover:bg-purple-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
