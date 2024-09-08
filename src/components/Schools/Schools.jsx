import React from 'react';

const schoolTypes = [
  {
    img: "https://www.brookings.edu/wp-content/uploads/2018/03/cue_girls_pakistan_001.jpg?quality=75&w=1500",
    name: "Public Schools",
    desc: "Public schools in Karachi offer affordable and accessible education to students of all backgrounds."
  },
  {
    img: "https://psra.gkp.pk/en/assets/slider_images/png_2.png",
    name: "Private Schools",
    desc: "Private schools provide premium education, co-curricular activities, and state-of-the-art facilities."
  },
  {
    img: "https://skyschoolsystem.org/wp-content/uploads/2016/08/DSC00159-1030x773.jpg",
    name: "Boarding Schools",
    desc: "Boarding schools offer both accommodation and education, helping students build independence."
  },
  {
    img: "https://static.theprint.in/wp-content/uploads/2019/01/madarsa_story_647_081117050521_0.jpg",
    name: "Madrasas",
    desc: "Madrasas focus on religious education along with basic academic teachings for holistic development."
  }
];

const Schools = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="w-[80%] m-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Explore Schools in Karachi</h1>
        <p className="text-lg text-gray-600 mt-4">This website helps you explore different types of schools in Karachi, making it easier for you to find the perfect fit for your child’s education.</p>
      </div>

      <div className="space-y-16 w-[80%] m-auto">
        {schoolTypes.map((school, index) => (
          <div key={index} className={`flex flex-col-reverse md:flex-row items-center md:gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
            <div className="md:w-1/2 text-center md:text-left p-4">
              <h2 className="text-3xl font-bold text-gray-800">{school.name}</h2>
              <p className="mt-4 text-gray-600">{school.desc}</p>
            </div>
            <div className="md:w-1/2">
              <img src={school.img} alt={school.name} className="w-full h-100 object-cover rounded-xl shadow-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schools;
