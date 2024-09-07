import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaArrowAltCircleRight } from "react-icons/fa";



const testimonials = [
  {
    name: "Ayesha Khan",
    feedback: "SchoolsInfo made it so easy to find the perfect school for my child. The details about facilities and locations helped us make an informed decision.",
    rating: 5
  },
  {
    name: "Ahmed Raza",
    feedback: "Thanks to SchoolsInfo, we found a school with excellent sports facilities and a great academic environment. Highly recommended for parents!",
    rating: 4
  },
  {
    name: "Sadia Malik",
    feedback: "The website's layout and information about various schools saved us a lot of time. We could easily compare schools and pick the best one.",
    rating: 5
  },
  {
    name: "Bilal Hussain",
    feedback: "It's a wonderful platform for parents like me who want to explore different schooling options. The detailed info is very helpful.",
    rating: 4
  },
  {
    name: "Fatima Sheikh",
    feedback: "SchoolsInfo made our search for a school so much easier. The facilities, reviews, and comparison options really stood out.",
    rating: 5
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center mb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-[60%]  m-auto my-10">
      <h2 className="text-4xl text-sky-500 font-bold text-center mb-8">What Parents Say</h2>
      <div className="relative">
        <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-xl italic mb-4">"{testimonials[currentIndex].feedback}"</p>
          {renderStars(testimonials[currentIndex].rating)}
          <h3 className="text-2xl font-semibold text-green-700">
            - {testimonials[currentIndex].name}
          </h3>
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
        >
          <BsArrowLeftCircleFill />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
        >
         <FaArrowAltCircleRight />

        </button>
      </div>
    </div>
  );
};

export default Testimonial;
