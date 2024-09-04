import React from 'react';
import mission from '../../assets/mission.jfif'

const AboutContent = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-sky-500 mb-12">Our Mission</h2>

        <div className="relative bg-gradient-to-r from-green-400 to-sky-500 rounded-xl shadow-xl overflow-hidden mb-12">
          <img
            src={mission} alt="Mission"
            className="w-full h-80 object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold max-w-3xl mx-auto leading-snug">
              Empowering students and parents with the information they need to make the best educational choices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Quality Education</h3>
            <p className="text-gray-600">
              We are committed to showcasing schools that provide top-notch education and help students achieve their full potential.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Community Focus</h3>
            <p className="text-gray-600">
              We aim to build a community where students, parents, and educators can share experiences and insights to improve educational outcomes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Diverse Options</h3>
            <p className="text-gray-600">
              Our platform offers information on a variety of schools, including public, private, boarding, and madrasas, to cater to diverse needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
