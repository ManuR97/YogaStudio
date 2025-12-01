import React from 'react';

const About = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl h-96 flex items-center justify-center">
              {/* Hier dein Foto einfügen: */}
              {/* <img src="/dein-foto.jpg" alt="Über mich" className="rounded-3xl h-96 w-full object-cover" /> */}
              <p className="text-gray-500 text-center px-8">Dein Foto hier</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Über Mich</h2>
            <p className="text-gray-600 mb-4">
              Hallo, ich bin [Dein Name], zertifizierte Yogalehrerin mit über [X] Jahren Erfahrung.
            </p>
            <p className="text-gray-600 mb-4">
              Meine Reise begann [deine Geschichte hier]. Heute ist es meine Leidenschaft, 
              Menschen dabei zu helfen, durch Yoga mehr Balance und Wohlbefinden in ihr Leben zu bringen.
            </p>
            <p className="text-gray-600">
              In meinen Kursen kombiniere ich traditionelle Yoga-Techniken mit modernen Ansätzen, 
              um eine ganzheitliche Praxis zu schaffen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;