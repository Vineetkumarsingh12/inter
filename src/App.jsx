import React from 'react';
import './App.css';
import pic1 from "./asserts/1.png";
import pic2 from "./asserts/2.png";
import pic3 from "./asserts/3.png";
import logo from "./asserts/logo.png";
import Footer from "./Footer";

function App() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-300 to-yellow-200 ">
      <img src={logo} alt="logo" className=' mx-auto h-32'/>
      <div className=' md:flex flex-wrap gap-2 mx-auto'>
        <img src={pic1} alt="pic1" className=' md:w-[30%]'/>
        <div className='md: w-[60%] mx-auto'>
          <h2 className=' font-bold text-lg'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
         
            <li className=' pl-4'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li className=' pl-4'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
         
          <img src={pic2} alt="pic2" className='py-3'/>
          <p>Government of India has awarded the <span className=' font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <p className=' mt-6 p-2  text-center'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
      <img src={pic3} alt="pic3"/>
      <div className="bg-red-600 h-[3px] w-[90%] mx-auto"></div>
      <h2 className=' font-bold text-center pt-3'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
      <p  className=' text-center'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
      <div className='p-2'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
