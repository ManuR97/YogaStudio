import React from 'react';
import { Heart } from 'lucide-react';
import portraitImage from '../assets/portrait.jpeg';

const About = () => {
  return (
    <section className="py-20 min-h-screen flex items-center bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Titel */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light text-gray-700 mb-4">Über Mich</h2>
          <div className="flex justify-center mb-6">
            <Heart className="w-8 h-8 text-purple-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meine Geschichte mit Yoga und meine Leidenschaft, Menschen auf ihrem Weg zu begleiten
          </p>
        </div>

        {/* Bild */}
        <div className="flex justify-center mb-12">
          <img 
            src={portraitImage} 
            alt="Tina - Yogalehrerin" 
            className="rounded-3xl shadow-xl max-h-[400px] w-auto object-cover border-8 border-white"
          />
        </div>

        {/* Haupttext */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-6">
          {/* Erste Sektion */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Yoga begleitet mich seit einigen Jahren und ist für mich weit mehr als Bewegung. Es ist ein Weg zu mehr Ruhe, Kraft und Verbindung mit sich selbst.
            </p>
          </div>

          {/* Zweite Sektion */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vor fast einem Jahr habe ich mich als Yogalehrerin selbstständig gemacht, weil ich meine Erfahrung und die positiven Veränderungen, die Yoga in mein Leben gebracht hat, mit anderen Menschen teilen möchte. In meinen Stunden geht es nicht um Perfektion oder Leistung, sondern darum, im eigenen Tempo anzukommen und sich selbst etwas Gutes zu tun.
            </p>
          </div>

          {/* Stuhl-Yoga Sektion */}
          <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-500">
            <h3 className="text-2xl font-light text-gray-700 mb-4 flex items-center gap-3">
              <span className="text-3xl">🪑</span> Stuhl-Yoga
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ein besonderer Teil meiner Arbeit ist das Stuhl-Yoga, das ich seit Beginn meiner Selbstständigkeit wöchentlich anbiete. Diese Einheiten richten sich vor allem an Seniorinnen und Senioren oder Menschen mit Einschränkungen – alle die sich auf sanfte Weise bewegen und etwas für ihre Gesundheit tun möchten.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Einmal pro Woche treffen wir uns zu einer gemeinsamen 30-minütigen Einheit. Mit einfachen, angepassten Übungen auf dem Stuhl fördern wir Beweglichkeit, stärken den Körper und bringen den Kreislauf in Schwung. Dabei steht immer die Freude an der Bewegung im Mittelpunkt.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Es ist schön zu sehen, wie viel Lebensfreude und Energie in diesen gemeinsamen Minuten entstehen. Viele Teilnehmerinnen und Teilnehmer freuen sich jede Woche auf unser Training – nicht nur wegen der Bewegung, sondern auch wegen der Gemeinschaft und der positiven Atmosphäre.
            </p>
          </div>

          {/* Philosophie Sektion */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ich lege großen Wert auf eine entspannte Atmosphäre, in der sich jeder willkommen fühlt, egal ob Anfänger oder mit Erfahrung. Durch achtsame Bewegungen, bewusste Atmung und kleine Momente der Stille entsteht Raum für Entspannung, neue Energie und mehr Balance im Alltag.
            </p>
          </div>

          {/* Abschluss */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Es ist mir eine Herzensangelegenheit, Menschen auf ihrem individuellen Yogaweg zu begleiten. Ich freue mich darauf, dich auf der Matte oder auf dem Stuhl begrüßen zu dürfen.
            </p>
            <div className="text-right">
              <p className="text-2xl font-light text-purple-600 mb-2">Namasté</p>
              <p className="text-xl text-gray-700">
                Tina <span className="text-2xl">💜</span>
              </p>
            </div>
          </div>
        </div>

        {/* Werte-Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🧘</div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">Achtsamkeit</h3>
            <p className="text-gray-600">
              Bewusste Bewegungen und Atmung für innere Balance
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl mb-3">💚</div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">Einfühlsamkeit</h3>
            <p className="text-gray-600">
              Jeder ist willkommen – im eigenen Tempo und Niveau
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">Ganzheitlichkeit</h3>
            <p className="text-gray-600">
              Körper, Geist und Seele in Einklang bringen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
