import React from 'react'
import { MdPhone } from 'react-icons/md'

const Calltoaction = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
        <button className='py-2 px-4 rounded-full border-2 border-slate-300 font-medium text-slate-500'><MdPhone className='inline-block size-5 relative -top-[2px]' /> +212606060606</button>
        <button className='py-2 pb-2.5 px-4 rounded-full bg-[#1523dc] font-medium border-2 border-[#1523dc] text-white'>Commencer ma demande</button>
        <button></button>
    </div>
  )
}

export default Calltoaction