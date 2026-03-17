import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { loadCoursesFromGoogleSheets, DEFAULT_COURSES, Course } from '../data/coursesConfig';

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>(DEFAULT_COURSES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const loadedCourses = await loadCoursesFromGoogleSheets();
      setCourses(loadedCourses);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-700 mb-4">Unsere Kurse</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wähle aus unserem vielfältigen Angebot den perfekten Kurs für dich
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">Kurse werden geladen...</p>
          </div>
        )}

        {!loading && (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-purple-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-light text-gray-700 mb-3">{course.name}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;