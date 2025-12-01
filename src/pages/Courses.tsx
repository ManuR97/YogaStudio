import React from 'react';
import { Heart } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Hatha Yoga",
      description: "Klassisches Yoga für Körper und Geist. Perfekt für Einsteiger.",
      duration: "60 Min",
      level: "Anfänger"
    },
    {
      title: "Vinyasa Flow",
      description: "Dynamische Sequenzen im Atemrhythmus für mehr Energie.",
      duration: "75 Min",
      level: "Mittelstufe"
    },
    {
      title: "Yin Yoga",
      description: "Sanfte, meditative Praxis für tiefe Entspannung.",
      duration: "90 Min",
      level: "Alle Level"
    },
    {
      title: "Meditation",
      description: "Geführte Meditationen für innere Ruhe und Klarheit.",
      duration: "45 Min",
      level: "Alle Level"
    }
  ];

  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Unsere Kurse</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wähle aus unserem vielfältigen Angebot den perfekten Kurs für dich
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-pink-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{course.duration}</span>
                <span>{course.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;