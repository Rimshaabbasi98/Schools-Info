import React from 'react';
import { Link } from 'react-router-dom';


const schoolTypes = [
  {
    img: "https://www.brookings.edu/wp-content/uploads/2018/03/cue_girls_pakistan_001.jpg?quality=75&w=1500",
    name: "Public Schools",
    desc: "Public schools in Karachi provide a robust and inclusive educational experience, ensuring that students from all socioeconomic backgrounds have access to quality education. These schools focus on delivering a well-rounded curriculum that prepares students for further education and career opportunities, with an emphasis on affordability and accessibility.",
    btnText: "Explore All Public Schools",
    btnLink: "/public"
  },
  {
    img: "https://psra.gkp.pk/en/assets/slider_images/png_2.png",
    name: "Private Schools",
    desc: "Private schools in Karachi offer a premium education experience with a strong emphasis on academic excellence, extracurricular activities, and advanced facilities. These institutions provide personalized attention and a variety of programs designed to enhance student learning and development, often featuring state-of-the-art infrastructure and specialized teaching methods.",
    btnText: "Explore All Private Schools",
    btnLink: "/private"
  },
  {
    img: "https://skyschoolsystem.org/wp-content/uploads/2016/08/DSC00159-1030x773.jpg",
    name: "Boarding Schools",
    desc: "Boarding schools in Karachi offer a comprehensive educational experience that includes both residence and schooling. These schools help students develop independence and life skills in a structured environment. They provide students with a supportive community, access to a range of academic and extracurricular activities, and a balanced approach to personal growth and education.",
    btnText: "Explore All Boarding Schools",
    btnLink: "/boarding"
  },
  {
    img: "https://static.theprint.in/wp-content/uploads/2019/01/madarsa_story_647_081117050521_0.jpg",
    name: "Madrasas",
    desc: "Madrasas in Karachi offer a unique educational model focusing on religious studies alongside core academic subjects. These institutions aim to provide students with a comprehensive understanding of Islamic teachings and values while ensuring they receive fundamental education that supports their overall development and prepares them for various life challenges.",
    btnText: "Explore All Madrasas",
    btnLink: "/madrassa"
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
              <p className="my-4 text-gray-600">{school.desc}</p>
              <Link to={school.btnLink}>
                <button className='bg-green-500 hover:bg-green-600 rounded-3xl py-2 px-5 text-white'>{school.btnText}</button>
              </Link>
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
