import React from 'react'
import Img_Carousel from '../Carousel/Img_Carousel'
import ContactForm from '../ContactUs/ContactForm'
import Marquee from 'react-fast-marquee';
import RandomMeals from './RandomMeals';
import AreaCategory from './AreaCategory';


function Home() {
  return (
    <>
    <Img_Carousel />
    <div className='bg-bgColor py-4'>
      <div className='bg-customBrown p-4 font-semibold text-xl text-white'>
        <Marquee>
             Discover &nbsp;&nbsp;&nbsp;&nbsp; Learn &nbsp;&nbsp;&nbsp;&nbsp; Cook &nbsp;&nbsp;&nbsp;&nbsp;  Savor &nbsp;&nbsp;&nbsp;&nbsp; Repeat!
        </Marquee>
      </div>
    </div>
    <AreaCategory />
    <RandomMeals />
    <ContactForm />
    </>
  )
}

export default Home