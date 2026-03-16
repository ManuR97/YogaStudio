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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-10 text-center shadow-md">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-purple-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Telefon</h3>
            <p className="text-gray-600">+43 XXX XXX XXXX</p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-md">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-purple-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">E-Mail</h3>
            <p className="text-gray-600">info@dein-yoga.at</p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-md">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-purple-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Adresse</h3>
            <p className="text-gray-600">Musterstraße 123<br />6850 Dornbirn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;