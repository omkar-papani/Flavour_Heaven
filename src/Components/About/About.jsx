import React from 'react'
import ContactForm from '../ContactUs/ContactForm'

function About() {
  return (
    <div className='bg-bgColor p-2'>
        <div className='bg-white md:w-[70%] w-[95%] rounded-xl place-self-center p-4'>
            <h1 className='text-2xl text-customBrown font-bold place-self-center mb-5'>About this web :</h1>
            <p className='text-gray-500 px-5'>This a website dedicated to recipes, where users can explore a wide variety of dishes, view detailed instructions, and learn more about each recipe. The website features a categorized list of recipes, allowing users to browse by meal types such as Breakfast, Lunch, Dinner, Snacks, and Desserts. Additionally, it includes an area-based filter, enabling users to discover cuisines from different regions like Italian, Indian, Chinese, and Mexican. To enhance user experience, the site offers a powerful search functionality, making it easy to find recipes by entering keywords or specific ingredients. In the 'About' section, I will provide an overview of these features to guide users on how to navigate the site and make the most of its offerings.</p>
        </div>
        <div className='bg-white md:w-[70%] w-[95%] rounded-xl place-self-center p-4 mt-10'>
            <h1 className='text-2xl text-customBrown font-bold place-self-center mb-5 underline'>About me</h1>
            <img src="/Images/omkar.png" alt="" className='w-52 h-52 place-self-center rounded-[50%]'/>
            <h1 className='text-xl text-customBrown font-bold place-self-center mt-4'>P OMKAR</h1>
            <p className='text-gray-500 p-5'>I am a passionate and skilled front-end developer with a strong foundation in creating responsive and visually appealing websites. I have expertise in HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS, enabling me to design and develop user-friendly interfaces that stand out. My experience also includes building responsive web designs, mastering version control systems like Git, and focusing on delivering seamless user experiences.
            <br/>
            <br/>
                As a quick and enthusiastic learner, I am constantly looking to expand my knowledge and skills in web development. I am eager to explore back-end technologies and other aspects of full-stack development, ensuring I stay at the forefront of the ever-evolving tech landscape. My dedication to continuous learning and growth drives me to create impactful and innovative web solutions.
            </p>
        </div>
        <ContactForm />
    </div>
  )
}

export default About