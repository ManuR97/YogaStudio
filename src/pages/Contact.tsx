import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Kontakt</h2>
          <p className="text-gray-600">Wir freuen uns auf deine Nachricht</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-pink-400" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Telefon</h3>
            <p className="text-gray-600">+43 XXX XXX XXXX</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-pink-400" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">E-Mail</h3>
            <p className="text-gray-600">info@dein-yoga.at</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-pink-400" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Adresse</h3>
            <p className="text-gray-600">Musterstraße 123<br />6850 Dornbirn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;