import React, { useEffect, useState } from 'react'
import CategoryCards from './CategoryCards'

function Category() {

    const [data, setData] = useState()

    useEffect(() => {
        
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => {
    
        setData(data.categories)

    })


    }, [])
    console.log(data)
    

  return (
    <>
      <div className='bg-bgColor w-full pt-2'>
          <h1 className='text-3xl font-bold text-customBrown place-self-center mb-5'>Here are the categories</h1>
          <p className='text-xl font-semibold text-customBrown place-self-center'>Click on the wished category to get all the recipes</p>
      </div>
      
        <CategoryCards data={data}/>
     
    </>
  )
}

export default Category