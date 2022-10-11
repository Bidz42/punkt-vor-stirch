import React from 'react'
import { Link } from 'react-router-dom'

const Partners = () => {
  
  return (
    <div className= "my-10 py-10 mx-4" id="partner">
      <div className='text-center mb-10'>
        <h1 className='text-3xl mb-4'>Gemeinsam Stark</h1>
        <p className='text-base text-gray-500'>Gemeinsam mit unseren Kooperationspartnern schaffen und gestalten wir ein neues und inklusiveres Bild der Mobilität.</p>
      </div>
      
      <div className='flex flex-col md:flex-row justify-center ml-32 md:ml-0'>
        <a target="_blank" href="https://www.womeninmobility.org/"> <img className='object-scale-down h-20 my-4 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/wim_Logo.png"
        alt="logo" /></a>

        <a target="_blank" href="https://triply.at/"><img className='object-scale-down h-20 my-4 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/triply_Logo.png"
        alt="logo" /></a>
        <a target="_blank" href="https://www.plus.ac.at/geoinformatik/"><img className='object-scale-down h-10 my-4 md:mt-6 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/zgis_logo.png"
        alt="logo" /></a>
        <a target="_blank" href="https://www.carployee.com/"><img className='object-scale-down h-10 my-4 md:mt-5 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/carployee_logo.png"
        alt="logo" /></a>
        <a target="_blank" href="https://www.ffg.at/"><img className='object-scale-down h-20 my-4 md:mt-2 md:mx-6' src ="https://www.punkt-vor-strich.at/assets/images/FFG_Logo.png"
        alt="logo" /></a>
      </div>


    </div>
  )
}

export default Partners