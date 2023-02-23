import Link from 'next/link'
import React from 'react'

const NavbarHome = () => {

  return (
    <header className='hidden grid-cols-2 md:grid items-center border-t-verde border-b-verde border-solid border-t-[1px] border-b-[1px] py-1 text-verde mx-1 text-xl sticky top-0 bg-transparent z-10  '>
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
                <Link href='/info'>
                    <button className='hover-underline-animation'>INFO</button>
                </Link>
            </div>
            <div className='flex items-center'>
                <Link href='/digital-garden'>
                    <h4 className='hover-underline-animation cursor-pointer'>DIGITAL GARDEN</h4>
                </Link>
            </div>
            <div className='self-center justify-end bg-transparent'>
                <Link href='/contact'>
                    <button className='p-2 border-solid border-verde border-[1px] hover:bg-[#0E0E0E]/30 hover:text-verde hover:bg-violeta transition-all duration-700'>CONTACT</button>
                </Link>
            </div>
        </div>
      </header>
  )
}

export default NavbarHome