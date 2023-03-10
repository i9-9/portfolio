import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-1 md:py-2 lg:py-2 px-1  bottom-0 bg-hero-mesh2 z-10'>
      <div className='mx-auto text-center flex items-center justify-between border-t-[1px] border-b-[1px] border-solid border-verde '>
        <h5 className='text-verde font-light text-sm'>COPYRIGHT 2023</h5>
        <h6 className='font-bold text-verde text-xl'>I / N</h6>
      </div>
    </footer>
  )
}

export default Footer