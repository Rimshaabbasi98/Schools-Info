import React from 'react';
import schoolsData from '../../../data/data.json';

const Madrasa = () => {
  // Find the object with type "madrassa" and get its schools array
  const madrassaSchoolsData = schoolsData.find(schoolGroup => schoolGroup.type === 'madrassa');
  const madrassaSchools = madrassaSchoolsData ? madrassaSchoolsData.schools : [];

  return (
    <div className="w-[80%] m-auto mt-10 text-center">
      <h1 className="text-4xl font-bold mb-8">Madrassas in Karachi</h1>

      {madrassaSchools.map((school, index) => (
        <div 
          key={index} 
          className="flex flex-col md:flex-row mb-10 items-center justify-center"
        >
          <img 
            src={school.image} 
            alt={school.name} 
            className="w-full md:w-[50%] h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-8"
          />
          <div className="text-left md:w-[50%]">
            <h2 className="text-3xl font-semibold mb-2">{school.name}</h2>
            <p className="text-lg mb-2">Intake Capacity: {school.intake_capacity} students</p>
            <p className="text-lg mb-2">Library Available: {school.library_available ? 'Yes' : 'No'}</p>
            <p className="text-lg mb-2">Canteen Available: {school.canteen_available ? 'Yes' : 'No'}</p>
            <p className="text-lg mb-2">Boarding Available: {school.boarding_available ? 'Yes' : 'No'}</p>
            <p className="text-lg mb-4">Sports Options: {school.sports_options.join(', ')}</p>
            <a href="/Madrasa-Detailed-Info.docx" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
              Download Detailed Info
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Madrasa;
