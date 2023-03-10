"use client"

import NavbarHome from '@/components/NavbarHome'
import Work from '@/components/Work'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className='mx-auto bg-diamond'>
      <div>
        <h1 className='title italic text-6xl text-verde py-4 px-1 uppercase'>Ivan Nevares</h1>
      </div>
      <NavbarHome />
      <div className='grid md:grid-cols-2 mx-1 my-8 mt-80 '>
        <div>
          <p className='text-left ml-4 md:ml-0 text-verde text-3xl md:text-5xl '>
            I&apos;m a web developer and UI designer interested in generating creative and performant digital experiences  
          </p>
          <div className='flex ml-4 md:ml-0 justify-start '>
          <p className='text-verde text-3xl mt-6 flex items-center font-light italic hover-underline-animation cursor-pointer doublearrow'>Explore my work
              <img alt='arrow that points downwards' src='/double-arrow.svg' className='ml-2 animate-bounce' style={{color: '#ADE252'}} size={30}/></p>
          </div>
        </div>
        <div className='hidden md:flex justify-between ml-4 md:ml-0 my-24 sm:my-0 items-center md:items-start'>

          </div>
        </div>
      <Work />
    </div>
  )
}
