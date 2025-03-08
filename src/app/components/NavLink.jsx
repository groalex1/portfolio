import Link from "next/link";
import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ href, title }) => {
    const handleClick = (e) => {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <a 
        href={href} 
        onClick={handleClick}
        className="block text-slate-300 py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white"
      >
        {title}
      </a>
    );
  };
  

export default NavLink