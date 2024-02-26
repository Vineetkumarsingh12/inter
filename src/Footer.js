import React from 'react';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex justify-around items-center  bg-red-700 pt-3 pb-5 m-2 text-white
     flex-wrap gap-2'>
      <div className=' flex'>
        <FaPhoneSquareAlt />
        <Link to="tel:18002001234">Toll Free 1800 200 1234</Link>
      </div>
      <div className=' flex'>
        <FaFacebook />
        <Link href="https://www.facebook.com/cripumps" target="_blank" rel="noopener noreferrer">www.facebook.com/cripumps</Link>
      </div>
      <div className=' flex'>
        <ImEarth />
        <Link href="http://www.crigroups.com" target="_blank" rel="noopener noreferrer">www.crigroups.com</Link>
      </div>
    </div>
  );
}

export default Footer;
