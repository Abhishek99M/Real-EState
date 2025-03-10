import React, { useState } from 'react'
import {FaLocationDot} from "react-icons/fa6"
const Searchbar = ({filter, setFilter}) => {
    
  return (
    <div className='flexBetween font-semibold !pl-6 h-[3.3rem] bg-white w-full max-w-[366px] border-2 rounded-full ring-1 ring-slate-900/5'>
      <input type='text' value={filter} onChange={(e) =>  setFilter(e.target.value)} placeholder='Enter Residency name/city/country'
      className='bg-transparent border-none outline-none w-full'/>
      <FaLocationDot className='relative right-4 text-xl hover:text-lime-400 cursor-pointer'/>
    </div>
  )
}

export default Searchbar
