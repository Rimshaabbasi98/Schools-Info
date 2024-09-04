import React from 'react';

const ContactForm = () => {
  return (
    <div className="relative bg-[url('https://img.freepik.com/free-photo/side-view-young-boy-reading_23-2148469946.jpg?t=st=1725473621~exp=1725477221~hmac=7560489a46e153c9fdec8f8cb1736efa77a4cf6b7fb773d193614a61765986f9&w=1380')] bg-cover bg-center py-20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      {/* Form Container */}
      <div className="relative w-full max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg my-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Full Name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email Address" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              placeholder="Subject" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Your Message" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button 
              type="submit" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
