import React from 'react';
import schoolsData from '../../../data/data.json';

const Private = () => {
  const privateSchoolsData = schoolsData.find(schoolGroup => schoolGroup.type === 'private');
  const privateSchools = privateSchoolsData ? privateSchoolsData.schools : [];

  return (
    <div className="w-[80%] m-auto mt-10 text-center">
      <h1 className="text-4xl font-bold mb-8">Private Schools in Karachi</h1>

      {privateSchools.map((school, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row mb-10 items-center justify-center"
        >
          <img
            src={school.image}
            alt={school.name}
            className="w-full md:w-[50%] h-80 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
          />
          <div className="text-left md:w-[50%]">
            <h2 className="text-3xl font-semibold mb-2">{school.name}</h2>
            <p className="text-lg mb-2">Intake Capacity: {school.intake_capacity} students</p>
            <p className="text-lg mb-2">Library Available: {school.library_available ? 'Yes' : 'No'}</p>
            <p className="text-lg mb-2">Canteen Available: {school.canteen_available ? 'Yes' : 'No'}</p>
            <p className="text-lg mb-2">Boarding Available: {school.boarding_available ? 'Yes' : 'No'}</p>
            <p className="text-lg mb-4">Sports Options: {school.sports_options.join(', ')}</p>
            <a
              href="/path-to-your-file/c:\Users\HP\Desktop\School's Info-Detailed Information.docx"
              download
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-colors duration-300 mt-28">
              Download Detailed Information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Private;


