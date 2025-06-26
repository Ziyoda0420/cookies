import React from 'react'
import Poster from './Poster.svg'
import Both from '../assets/Both.svg'

const header = () => {
  return (
    <div>
        
        <img className='ml-[50px]' src={Poster} alt="" />
         <ul className='flex gap-30 justify-end mt-[-50px]'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Contact</a></li>
            
         </ul>
         <div className="bg-cover bg-center h-174 w-full mt-[50px]"
        style={{ backgroundImage: "url('/src/assets/Background.svg')" }}>
            <p className='text-white text-[25px] flex justify-center pt-[50px] font-medium'>Food app</p>
            <p className='text-white text-[55px] flex justify-center pt-[50px] text-center font-medium'>Why stay hungry when <br />
             you can order form Bella Onojie</p>
            <p className='text-white flex justify-center pt-[30px] text-[18px]'> Download the bella onoje’s food app now on</p>
            <div className='flex justify-center gap-20 pt-[50px]'>
            <button className='w-[200px] h-[60px] rounded-3xl border-2 text-white text-[20px] hover:bg-amber-600 duration-75'>Playstore</button>  
            <button className='w-[200px] h-[60px] rounded-3xl border-2 text-white text-[20px] hover:bg-amber-600 duration-75'>Appstore</button>
            </div>
         </div>
         <img className='ml-[400px] mt-[-300px]' src={Both} alt="" />
         
  </div>
  )
}

export default header