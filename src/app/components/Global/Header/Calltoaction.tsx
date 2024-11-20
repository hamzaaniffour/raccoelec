import Link from 'next/link'
import React from 'react'
import { LuMenu } from 'react-icons/lu'
import { MdPhone } from 'react-icons/md'
import Drawer from './Mobile/Drawer'

const Calltoaction = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
        <div className='hidden lg:block'>
        <button className='py-2 px-4 rounded-full border-2 border-slate-300 font-medium text-slate-500'><MdPhone className='inline-block size-5 relative -top-[2px]' /> +212606060606</button>
        <Link href="#commencer-ma-demande">
        <button className='py-2 pb-2.5 px-4 rounded-full bg-[#1523dc] font-medium border-2 border-[#1523dc] text-white'>Commencer ma demande</button>
        </Link>
        </div>
        <div className='block lg:hidden'>
          <Drawer />
        </div>
    </div>
  )
}

export default Calltoaction