import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <div className='footer-container bg-black-200 py-5 rounded-3xl'>
      <div className='flex gap-4 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-10 h-10 object-contain'
              />
            </Link>
          ))}
        </div>
        <p className='mt-4 text-center text-white font-medium mb-4'>
          © 2023 <strong>Rohan Kakare</strong>. All rights reserved.
        </p> 
      </div>
    </footer>
  );
};

export default Footer;