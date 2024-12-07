import {React, useState} from 'react'
import {Menu, X} from 'lucide-react'
import NavLinks from './NavLinks'


function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    
    
    
        
  return (
    <>
    <nav className='w-1/12 md:w-8/12 lg:w-2/3 xl:w-6/12 flex justify-end mt-2.5 '>
        <div className='hidden w-full md:flex justify-between items-center'>
            <NavLinks />
        </div>
        <div className='md:hidden'>
            <button onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu />}
            </button>
        </div>  
    </nav>

    {isOpen && (
    <div className="flex basis-full flex-col items-center mt-2">
        <NavLinks />
    </div>
)}

</>
  )
}

export default Nav


