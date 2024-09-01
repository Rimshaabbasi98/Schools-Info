import React from 'react';
import Logo from '../assets/schoolinfo.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='text-center py-4 bg-gray-100'>
      <img src={Logo} alt="SchoolInfo Logo" className="mx-auto mb-2" />
      <div className="flex justify-center space-x-4 text-xl text-green-500 mb-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
      <p className="text-sm text-gray-600">© 2024 Schools' Info. All rights reserved.</p>
    </div>
  );
}

export default Footer;
