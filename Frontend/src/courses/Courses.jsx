import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Course from '../components/Course.jsx'
import Footer from '../components/Footer.jsx'

const Courses = () => {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
        <Course/>
        </div>
      
        <Footer/>
    </div>
  );
};

export default Courses;