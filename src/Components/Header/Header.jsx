import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
       
        <header className='sticky top-0 z-50 flex flex-wrap w-full items-center justify-between  p-2 bg-white'>
            <div className='logo h-16 w-60 -mt-3'>
             <NavLink 
             to=''>   
            <img src="/Images/logo.png" alt="logo"  className='logo h-16 w-60'/>
            </NavLink>
            </div>
           <Nav />
        </header>
       
        
    );
}

