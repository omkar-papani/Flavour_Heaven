import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'

function CategoryCards({data}) {

  return (
  <div className='bg-bgColor flex flex-wrap justify-evenly'>

   {data && data.length > 0 ? (
    data.map((items) => {
        
       
        return(

          <Link to='/cr' state={{category:items.strCategory}}>
            <div key={items.idCategory} className='rounded-lg w-40 bg-white flex flex-col items-center m-3 p-5'>
                <h1 className='text-customBrown font-semibold text-xl mb-2'>{items.strCategory}</h1>
                <img src={items.strCategoryThumb} alt="" />
            </div>
            </Link>
        )
    })
   ) : (
    <Loader />
   )

   }
    </div>
  )
}

export default CategoryCards