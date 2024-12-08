import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'

function Card({data}) {

  return (
    <div  className='flex flex-wrap justify-evenly gap-y-4 pt-4 pb-4' style={{backgroundColor:'#F2F2E6'}}>
    {data && data.length > 0 ? (
        data.map(({strMeal, strMealThumb, idMeal, strCategory, strArea}) =>{
           const id = {idMeal}
            return(
            <>
                <div key={idMeal} className='flex flex-col border p-6 bg-white 2xl:w-96 xl:w-72 lg:w-64 md:w-56 sm:w-[30%] w-64 rounded-xl'>
                    <img src={strMealThumb} alt={strMeal}  className='2xl:w-80 2xl:h-80 xl:w-64 xl:h-64 lg:w-60 lg:h-60 md:w-48 md:h-48 sm:w-40 sm:h-40 w-60 h-60'/>
                    <h2 className='text-xl text-left font-semibold mt-4 text-customBrown truncate'>{strMeal ? (strMeal.length > 22 ? strMeal.slice(0, 22) + '..' : strMeal) : ''}</h2>
                    <div className='flex flex-wrap justify-around w-full mt-4'>
                        <p className='text-xs font-semibold text-gray-500'>{strArea ? (strArea.toUpperCase()): ''}</p>
                        <p className='text-xs font-semibold text-gray-500'>{strCategory ? (strCategory.toUpperCase()): ''}</p>
                    </div>
                    <Link to='/ri' state={id} > 
                        <button className='p-2 rounded mt-4 font-semibold bg-customBrown w-full' style={{color:'#fff', }}>
                       Read More 
                        </button>
                        </Link>
            </div>
          
           </>
            )
        })
    ) : (
        <Loader />
    )
}
    
</div>

  )
}

export default Card
