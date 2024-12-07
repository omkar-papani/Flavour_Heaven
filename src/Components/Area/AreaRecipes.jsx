import React, { useState , useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Loader from '../Loader/Loader'


function AreaRecipes() {
    const location = useLocation()
    const {country} = location.state || {}
    const[data,setData] = useState(null)

    console.log(country)

    useEffect(() => {
        setTimeout(() => {
            if (!country) return
                fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
                .then(res => res.json())
                .then(data => {
                    setData(data.meals)
                    console.log(data.meals)
                })
        }, 100)
    }, [country])

  return (
    <div className='bg-bgColor p-2'>
        <h1 className='text-3xl text-customBrown font-bold place-self-center mb-2'>Here are {country}'s recipes</h1>
        <p className='text-xl text-customBrown place-self-center'>Click on the recipes to learn them!</p>
    <div className='flex flex-wrap justify-evenly bg-bgColor p-5' style={{cursor:'pointer'}}>
        {data && data.length > 0 ? (
            data.map(({strMeal,strMealThumb,idMeal})=>{
                
                return(
                    <Link to='/ri' state={{idMeal : idMeal}}>
                        <div key={idMeal} className='bg-white p-3 m-2 rounded-lg' >
                            <h1 className='font-semibold text-xl text-customBrown mb-3'>{strMeal.length > 18 ? strMeal.slice(0,20) + '...' : strMeal}</h1>
                            <img src={strMealThumb} alt="" className='w-64 h-64 md:w-56 md:h-56' />
                        </div>
                    </Link>
                )
            })
        ) : (<Loader />)}
    </div>
    </div>
  )
}

export default AreaRecipes