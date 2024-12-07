import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

function NavLinks() {
        const[search , setSearch] = useState('')
        const navigate = useNavigate()

        const searchResults = (e) => {
            e.preventDefault()
            setSearch('')
           navigate('/results' , {state:{search:search}})
        }


 return (
    <>

        <div>
            <form onSubmit={searchResults} className='flex -mt-0.5 items-center' style={{border:'1px solid #646340', borderRadius:'5px', borderTopRightRadius:'6px', borderBottomRightRadius:'6px',}}>
                <input type="text" name="search" id="" placeholder='Find a recipe' 
                    style={{borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px', textAlign:'center'}}  
                    className='h-10  md:w-52 lg:w-72 sm:w-56 w-full focus:outline-none focus:ring-0 font-medium'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button className='p-2' style={{backgroundColor:'#646340', borderTopRightRadius:'5px', borderBottomRightRadius:'5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                        <g fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" >
                            <g transform="scale(5.12,5.12)">
                                <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
                            </g>
                        </g>
                    </svg>
                </button>
            </form>
        </div>
        <div className='md:flex md:flex-row flex flex-col items-center w-1/2 justify-evenly font-semibold'>
            <li className='list-none'>
                <NavLink 
                    to=''
                className={({isActive}) =>
                                        `${isActive ? 'text-customBrown' : 'text-gray-500'} text-lg list-none py-2 `}>Home</NavLink>
            </li>
            <li className='list-none' >
                <NavLink 
                    to='/area'
                    className={ ({isActive}) =>
                        `${isActive ? 'text-customBrown' : 'text-gray-500'} text-lg list-none py-2 `}
                >Area</NavLink>
            </li>
            <li className='list-none ' >
                <NavLink
                        to='/category'
                    className={({isActive}) =>
                        `${isActive ? 'text-customBrown' : 'text-gray-500'} text-lg list-none py-2 `}
                >Category</NavLink>
            </li>
        </div>
    </>        
  )
}

export default NavLinks