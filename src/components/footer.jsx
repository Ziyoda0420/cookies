import React from 'react'
import Page from '../assets/Page.svg'
import Footer from '../assets/Footer.svg'

const footer = () => {
  return (
    <div>
      <div  className="bg-cover bg-center h-140 w-full"
        style={{ backgroundImage: "url('/src/assets/Page.svg')" }}>
            <p className='text-white text-[50px] flex justify-center pt-[180px] font-medium'>Download the app now.</p>
            <p className='text-white flex justify-center text-[22px] pt-[30px]'>Available on your favorite store. Start your premium experience now</p>
<div className='flex justify-center gap-20 pt-[130px]'>
            <button className='w-[200px] h-[60px] rounded-2xl border-2 text-white text-[20px] hover:bg-amber-700 duration-75'>Playstore</button>  
            <button className='w-[200px] h-[60px] rounded-2xl border-2 text-white text-[20px] hover:bg-amber-700 duration-75'>Appstore</button>
            </div>
        </div>
        <img className='ml-[150px] mt-[50px]' src={Footer} alt="" />
    </div>
  )
}

export default footer