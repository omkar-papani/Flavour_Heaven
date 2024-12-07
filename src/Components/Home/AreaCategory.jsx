import React from 'react'
import { Link } from 'react-router-dom'


function AreaCategory() {


  return (
    <>
      <div className='w-full bg-bgColor h-full flex lg:flex-nowrap sm:flex-wrap flex-wrap justify-around py-4'>
            <div className='bg-darkbg p-4 rounded-xl w-fit m-2 container'>
                <h1 className='text-2xl text-customBrown font-semibold place-self-center mb-2'>
                  Area
                </h1>
                <div className='flex flex-wrap w-fit gap-3 '>
                    <div className='flex flex-col border p-6 lg:p-3 xl:p-6 bg-white 2xl:w-80 xl:w-72 lg:w-56 sm:w-64 w-68 rounded-xl card'>
                      <img src="https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg"
                        className='2xl:w-72 2xl:h-72 xl:w-68 xl:h-68 lg:w-56 lg:h-56 sm:w-60 sm:h-60 w-64 h-64 place-self-center'
                      alt="" srcset="" />
                      <h1 className='text-xl text-left font-semibold mt-4 text-customBrown'>Dal fry</h1>
                      <div className='flex flex-wrap justify-around w-full mt-4'>
                        <p className='text-xs font-semibold text-gray-500'>INDIAN</p>
                        <p className='text-xs font-semibold text-gray-500'>VEGETARIAN</p>
                      </div>
                      <Link to='/ri' state={{idMeal:52785}}>
                        <button className='p-2 rounded mt-4 font-semibold bg-customBrown text-white w-full'>Read More</button>
                      </Link>
                    </div>
                    <div className='flex flex-col border p-6 lg:p-3 xl:p-6 bg-white 2xl:w-80 xl:w-72 lg:w-56 sm:w-64 w-68 rounded-xl card'>
                      <img src="https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg"
                        className='2xl:w-72 2xl:h-72 xl:w-68 xl:h-68 lg:w-56 lg:h-56 sm:w-60 sm:h-60 w-64 h-64 place-self-center'
                      alt="" srcset="" />
                      <h1 className='text-xl text-left font-semibold mt-4 text-customBrown'>Matar Paneer</h1>
                      <div className='flex flex-wrap justify-around w-full mt-4'>
                        <p className='text-xs font-semibold text-gray-500'>INDIAN</p>
                        <p className='text-xs font-semibold text-gray-500'>VEGETARIAN</p>
                      </div>
                      <Link to='/ri' state={{idMeal:52865}}>
                        <button className='p-2 rounded mt-4 font-semibold bg-customBrown text-white w-full'>Read More</button>
                      </Link>
                    </div>
                </div>
                <Link to='/area'>
              <p  className='text-customBrown p-2 mt-4 place-self-center hover:underline'>
                List all Area wise recipes
                </p>
              </Link>
            </div>

            <div className='bg-darkbg p-4 rounded-xl w-fit m-2 container'>
                <h1 className='text-2xl text-customBrown font-semibold place-self-center mb-2'>
                  Category
                </h1>
                <div className='flex flex-wrap w-fit gap-3'>
                    <div className='flex flex-col border p-6 lg:p-3 xl:p-6 bg-white 2xl:w-80 xl:w-72 lg:w-56 sm:w-64 w-68 rounded-xl card'>
                      <img src="https://www.themealdb.com/images/media/meals/1550441882.jpg"
                        className='2xl:w-72 2xl:h-72 xl:w-68 xl:h-68 lg:w-56 lg:h-56 sm:w-60 sm:h-60 w-64 h-64 place-self-center'
                      alt="" srcset="" />
                      <h1 className='text-xl text-left font-semibold mt-4 text-customBrown'>Breakfast Potatoes</h1>
                      <div className='flex flex-wrap justify-around w-full mt-4'>
                        <p className='text-xs font-semibold text-gray-500'>CANADIAN</p>
                        <p className='text-xs font-semibold text-gray-500'>BREAKFAST</p>
                      </div>
                      <Link to='/ri' state={{idMeal:52965}}>
                        <button className='p-2 rounded mt-4 font-semibold bg-customBrown text-white w-full'>Read More</button>
                      </Link>
                    </div>
                    <div className='flex flex-col border p-6 lg:p-3 xl:p-6 bg-white 2xl:w-80 xl:w-72 lg:w-56 sm:w-64 w-68 rounded-xl card'>
                      <img src="https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg"
                        className='2xl:w-72 2xl:h-72 xl:w-68 xl:h-68 lg:w-56 lg:h-56 sm:w-60 sm:h-60 w-64 h-64 place-self-center'
                      alt="" srcset="" />
                      <h1 className='text-xl text-left font-semibold mt-4 text-customBrown'>Bread omelette</h1>
                      <div className='flex flex-wrap justify-around w-full mt-4'>
                        <p className='text-xs font-semibold text-gray-500'>INDIAN</p>
                        <p className='text-xs font-semibold text-gray-500'>BREAKFAST</p>
                      </div>
                      <Link to='/ri' state={{idMeal:53076}}>
                        <button className='p-2 rounded mt-4 font-semibold bg-customBrown text-white w-full'>Read More</button>
                      </Link>  
                    </div>
                </div>
                <Link to='/category'>
              <p  className='text-customBrown p-2 mt-4 place-self-center hover:underline'>
                List all Category wise recipes
                </p>
              </Link>
            </div>
      </div>
   </>
  )
}

export default AreaCategory
