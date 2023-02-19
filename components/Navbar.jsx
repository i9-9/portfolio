import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  return (
    <div className='hidden grid-cols-2 md:grid items-center border-t-verde border-b-verde border-solid border-t-[1px] border-b-[1px] py-2 text-verde mx-1 text-xl sticky top-0 bg-transparent z-10  '>
        <div className=''>
            <Link href='/'>
                <h2 className='font-black text-4xl'>I 
                <span className='animate-pulse mx-2'>
                    /
                </span> 
            N</h2>       
            </Link>
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col items-start'>
                <Link href='/'>
                    <button className='hover-underline-animation'>INDEX</button>
                </Link>
                <button className='hover-underline-animation'>WORK</button>
                <button className='hover-underline-animation'>INFO</button>
            </div>
            <div className='flex items-center'>
                <h4 className='hover-underline-animation cursor-pointer'>DIGITAL GARDEN</h4>
            </div>
            <div className='self-center justify-end bg-transparent'>
                <Link href='/contact'>
                    <button className='p-2 border-solid border-verde border-[1px] hover:bg-[#0E0E0E]/30 active:border-[2px]'>CONTACT</button>
                </Link>
            </div>
        </div>
      </div>
  )
}

export default Navbar