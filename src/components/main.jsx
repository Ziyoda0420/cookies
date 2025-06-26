import React from 'react'
import Photo1 from '../assets/Photo 1.svg'
import Photo2 from '../assets/Photo 2.svg'
import Photo3 from '../assets/Photo 3.svg'

const main = () => {
  return (
    <div>
        <p className='text-black flex justify-center mt-[50px] text-[45px] font-medium'>How the app works</p>
        <div className='flex mt-[50px] ml-[150px] gap-20'>
            <img src={Photo1} alt="" />
            <div className='mt-[250px]'>
                <p className='text-red-500 text-[22px] font-medium'>Create an account</p>
                <p className='text-black text-[40px] font-medium mt-[10px]'>Create login to an existing <br />account to get started</p>
                <p className='text-gray-800 text-[19px] mt-[20px]'>An account is created with your email <br />and a desired password</p>

                                                     
            </div>

        </div>
          <div className='flex mt-[-70px] ml-[320px] gap-30'>
           
            <div className='mt-[250px]'>
                <p className='text-red-500 text-[22px] font-medium'>Explore varieties</p>
                <p className='text-black text-[40px] font-medium mt-[10px]'>Shop for your favorites <br />meal as e dey hot.</p>

                <p className='text-gray-800 text-[19px] mt-[20px]'>Shop for your favorite meals or drinks <br />and enjoy while doing it.</p>


                                                     
            </div>
             <img src={Photo2} alt="" />

        </div>
          <div className='flex mt-[-50px] ml-[150px] gap-20'>
            <img src={Photo3} alt="" />
            <div className='mt-[250px]'>
                <p className='text-red-500 text-[22px] font-medium'>Checkout</p>
                <p className='text-black text-[40px] font-medium mt-[10px]'>When you done check out <br />and get it delivered.</p>

                <p className='text-gray-800 text-[19px] mt-[20px]'>When you done check out and get it <br /> delivered with ease.</p>


                                                     
            </div>

        </div>
    </div>
  )
}

export default main