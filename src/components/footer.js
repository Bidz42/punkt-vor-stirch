import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-pink py-4 flex flex-col md:flex-row justify-evenly text-white left-0 bottom-0 w-full'>
        <h1 className='px-10'>© 2021 punktvorstrich, All Rights Reserved.</h1>
          <Link to='/impressum'><h1>Impressum</h1></Link>
    </div>
  )
}

export default Footer