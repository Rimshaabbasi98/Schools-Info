import React from 'react';
import schoolsData from '../../../data/data.json';

const Schools = () => {
  const publicSchoolsData = schoolsData.find(schoolGroup => schoolGroup.type === 'public');
  const publicSchools = publicSchoolsData ? publicSchoolsData.schools : [];

  return (
    <div className="w-[80%] m-auto mt-10 text-center">
      <h1 className="text-4xl font-bold my-8 text-center">Welcome to the Schools' Info</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {publicSchools.map((school, index) => (
          <div 
            key={index} 
            className="shadow-lg hover:shadow-xl hover:bg-sky-500 hover:scale-105 transition-shadow duration-300 rounded-2xl border border-gray-300 p-4 flex flex-col items-center"
          >
            <img 
              src={school.image} 
              alt={school.name} 
              className="w-full h-48 object-cover rounded-t-2xl mb-4"
            />
            <h2 className="text-3xl font-semibold mb-2">{school.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schools;
