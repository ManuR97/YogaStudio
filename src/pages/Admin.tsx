import React from 'react';
import { Download, FileText } from 'lucide-react';
import { DEFAULT_COURSES } from '../data/coursesConfig';

const Admin = () => {
  const handleExport = () => {
    const dataToExport = { courses: DEFAULT_COURSES };
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'courses.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-7 h-7 text-purple-600" />
            <h1 className="text-3xl md:text-4xl font-light text-gray-700">Kursdaten</h1>
          </div>

          <p className="text-gray-600 mb-8 max-w-2xl">
            Diese Website bleibt bewusst einfach. Die Kurse sind direkt in <span className="font-medium">src/data/coursesConfig.ts</span> hinterlegt.
            Wenn du Inhalte ändern willst, bearbeite die Datei direkt oder exportiere die aktuelle Liste als JSON.
          </p>

          <button
            onClick={handleExport}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-3 rounded-lg transition"
          >
            <Download className="w-4 h-4" />
            Kurse als JSON exportieren
          </button>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {DEFAULT_COURSES.map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
                <h2 className="text-lg font-medium text-gray-700 mb-2">{course.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
