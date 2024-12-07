import React from 'react'
import { Link } from 'react-router-dom'

function AreaCards({data}) {

        
  return (
    <>
        {
            data.map((items) => {
                return(

                    < Link to='/ar' state={{country:items.name}}>
                    <div key={items.id} className='bg-white rounded flex flex-col items-center w-32 m-5 p-3' style={{cursor:'pointer'}} >
                        <h1 className='text-xl font-bold text-customBrown'>{items.name}</h1>
                        <img className='w-20 h-20' src={`https://flagsapi.com/${items.code}/flat/64.png`} alt={items.name} />
                    </div>
                </Link>
                
            )})
        }
    </>
  )
}

export default AreaCards