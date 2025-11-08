"use client";
import React from 'react'
import Nav from './component/Nav';
import Hero from './pages/Hero';

const page = () => {
  return (
    <div>
      <Nav/>
     <div className='md:pl-24 pl-12 md:pr-16 pr-8'>
       <Hero/>
     </div>
    </div>
  )
}

export default page;
