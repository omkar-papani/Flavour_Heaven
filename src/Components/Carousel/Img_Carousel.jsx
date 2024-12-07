import React from 'react'
import Carousel from './Carousel'

function Img_Carousel() {
    let slides = [
        '/Images/11.png',
        '/Images/12.png',
        '/Images/13.png',
        '/Images/14.png'
    ]
  return (
    <div className='w-full m-auto'>
        <Carousel slides={slides} />
    </div>
  )
}

export default Img_Carousel