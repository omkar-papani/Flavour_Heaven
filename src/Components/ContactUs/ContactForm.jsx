import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function ContactForm() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')
    const [number , setNumber] = useState('')

    const sendData = (e) =>{
        e.preventDefault()
        console.log(name, email, message , number)

        const templateParams = {
            from_name: name,
            from_email:email,
            to_name: 'Omkar',
            message: message,
            from_number: number,    
        }

        emailjs.send('service_7h11nli', 'template_gazgqou', templateParams, 'n5mLz128QRYtf5OFz')
      .then(
        () => {
          console.log('SUCCESS!')
          alert('Your message has been sent!')
          setName('')
          setEmail('')
          setMessage('')
          setMessage('')
          setNumber('')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
       
    }
    
  return (
<div className='w-full p-4 flex flex-wrap sm:flex-wrap md:flex-wrap md:justify-evenly lg:justify-center justify-center items-center' style={{backgroundColor:'#F2F2E6'}}>
    <div style={{backgroundColor:'#E0E0C7'}} className='flex flex-col justify-between p-10 h-64 rounded-2xl text-customBrown'>
        <div className='flex flex-col'>
        <h1 className='text-3xl font-bold place-self-center'>Get in touch:</h1>
        <p className='font-semibold text-sm'>Fill the form to start a conversation</p>
        </div>
    <div>
        <div className='place-self-center'>
            <h1 className='font-semibold'>or get me over here!</h1>
        </div>
        <div className='flex justify-evenly mt-5'>
            <a href="https://www.github.com/omkar-papani">
            <svg
                                width="40" height="40"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                style={{cursor:'pointer', fill:'#646340'}}
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
</a>
<a href="https://www.linkedin.com/in/omkar-papani">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" style={{fill: '#646340' , cursor:'pointer'}}>
  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
</a>
<a href='https://www.instagram.com/omkar__netha'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" style={{fill: '#646340' , cursor:'pointer'}}>
  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
</svg>
</a>
{/* <a>
<img src="Images/world.png" alt="" srcset="" width="40" height="40" style={{cursor:'pointer'}}/>
</a> */}
        </div>  
  </div>        
    </div>

    <div className='w-fit sm:w-fit flex p-2 rounded mt-5 justify-center'>
        <form onSubmit={sendData} className='flex flex-col w-full gap-2 items-center  m-4 font-semibold p-3'>
          
            <input type="text" name="user_name" placeholder='Full Name' 
            className='border border-customBrown p-2 mt-1 rounded lg:w-72 md:w-68 sm:w-72 w-72' 
            required
            value={name} 
            onChange={(e) => setName(e.target.value)}/>

         

            <input type='tel' placeholder='Telephone Number' 
            className='border border-customBrown p-2 mt-1 rounded lg:w-72 md:w-68 sm:w-72 w-72'  
            required
            value={number} 
            onChange={(e) => setNumber(e.target.value)}/>


            <input type="email" placeholder='Email' 
            className='border border-customBrown p-2 mt-1 rounded lg:w-72 md:w-68 sm:w-72 w-72' 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>


            <textarea  placeholder='Any Message?'
            className='border border-customBrown p-2 mt-1 rounded lg:w-72 md:w-68 sm:w-72 w-72 h-24' 
            style={{resize:'none'}} 
            maxlength="120"
            value={message}
             onChange={(e) => setMessage(e.target.value)}>
             </textarea>

            <button type="submit" 
                className='self-start bg-customBrown p-2 px-5 rounded text-white font-bold'
                >Submit
            </button>
        </form>
    </div>

</div>
  )
}

export default ContactForm