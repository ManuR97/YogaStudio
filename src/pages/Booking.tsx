import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    date: '',
    message: ''
  });

  const handleSubmit = () => {
    // Hier deine Buchungslogik einfügen
    console.log('Buchung:', formData);
    alert('Buchungsanfrage wurde gesendet!');
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Termin Buchen</h2>
          <p className="text-gray-600">Sichere dir deinen Platz in unserem nächsten Kurs</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">E-Mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Telefon</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Kurs</label>
                <select
                  value={formData.course}
                  onChange={(e) => handleChange('course', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:outline-none"
                >
                  <option value="">Bitte wählen</option>
                  <option value="hatha">Hatha Yoga</option>
                  <option value="vinyasa">Vinyasa Flow</option>
                  <option value="yin">Yin Yoga</option>
                  <option value="meditation">Meditation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Wunschtermin</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Nachricht (optional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:outline-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-pink-400 text-white py-4 rounded-lg hover:bg-pink-500 transition font-medium"
            >
              Buchungsanfrage senden
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;