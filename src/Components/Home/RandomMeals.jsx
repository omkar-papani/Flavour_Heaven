import React, { useEffect, useState } from 'react'
import Card from '../Cards/Card'

function RandomMeals() {
    const [data, setData] = useState()

    const fetchMeals = async () => {
        const mealPromises = 
        Array(4).fill().map(()=>{
            return(
            fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((res) => res.json())
            )
        }
        )
        const mealData = await Promise.all(mealPromises)
        setData(mealData.map(data => data.meals[0]))
    }


useEffect(() => {
        fetchMeals()
        
}, [])

const showAlert = () =>{
    alert('We got youu!')
}

const RandomMealsGenerator = () => {
    fetchMeals()
    showAlert()
}

    
    
  return (
    <div className='w-full h-full p-2 bg-bgColor flex flex-col justify-center'>
        <h1 className='text-customBrown text-3xl font-bold self-center'>Random Recipes</h1>
        <div className='w-full h-full p-2'>
            <Card data={data}/>
        </div>
        <div className='w-full flex flex-col'>        
            <h1 className='text-customBrown text-xl font-semibold place-self-center'>Wanna generate some random recipes?</h1>
            <button onClick={RandomMealsGenerator} className='p-2 rounded mt-4 font-semibold w-fit px-4 text-white bg-customBrown place-self-center'>Click me</button>
        </div>
    </div>
  )
}

export default RandomMeals