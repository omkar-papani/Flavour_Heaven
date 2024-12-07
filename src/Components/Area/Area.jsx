import React, { useEffect, useState } from 'react'
import AreaCards from './AreaCards'
import { AreaContext} from './AreaCodes'

function Area() {

    const data = AreaContext._currentValue.countries

        data.map((item)=>{
                console.log(item.name)  
        })
  return (
    <div className='bg-darkbg pt-5'>
        <h1 className='text-3xl font-bold text-customBrown place-self-center mb-5'>Here are the countries</h1>
        <p className='text-xl font-semibold text-customBrown place-self-center'>Click on the wished country to get all the recipes</p>
        <div className='bg-darkbg p-3 flex flex-wrap justify-evenly'>
            <AreaCards data={data}/>
        </div>
    </div>
  )
}

export default Area