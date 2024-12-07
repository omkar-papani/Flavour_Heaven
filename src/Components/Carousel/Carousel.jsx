import { useState } from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

export default function Carousel({slides}){

    let [current, setCurrent] = useState(0)

    let previousSlide = () => {
        if(current === 0) setCurrent(slides.length - 1)
        else setCurrent(current - 1)
    }
    let nextSlide = () => {
        if(current === slides.length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }
    setTimeout(() => {
        if(current === slides.length - 1) setCurrent(0)
            else setCurrent(current + 1)
    }, 3000);

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition ease-out duration-500"
            style={{
                transform:`translateX(-${current * 100}%)`
            }}>
            {slides.map((s) => {
                return <img src={s} className='w-max'/>
            })}
            </div>
            <div className='absolute top-0 h-full w-full justify-between flex items-center'>
                <button onClick={previousSlide} className='opacity-25 hover:opacity-75'>
                    <IoIosArrowBack style={{
                        fontSize:'50px', color:'#fff', 
                    }}/>
                </button>
                <button onClick={nextSlide} className='opacity-25 hover:opacity-75'>
                    <IoIosArrowForward style={{
                        fontSize:'50px', color:'#fff', 
                    }}/>
                </button>
            </div>
        </div>
    )
}