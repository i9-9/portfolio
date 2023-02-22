"use client"

import Footer from '@/components/Footer'
import NavbarHome from '@/components/NavbarHome'
import Work from '@/components/Work'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function Home() {
  return (
     <div className='mx-auto bg-hero-mesh2 bg-repeat'>
      <div className='flex flex-col mb-4 ml-4 md:mb-0 md:ml-0 py-10 md:py-2 mx-auto'>
        <h1 className='text-left text-5xl sm:text-7xl md:text-[5.7rem] lg:text-[8rem] xl:text-[12.125rem] xl:leading-[0.8] md:text-center font-black text-verde uppercase'>Ivan Nevares</h1>
        <h2 className='text-left text-5xl sm:text-7xl md:text-[5.8rem] lg:text-[8rem] xl:text-[11.5rem] xl:leading-[0.8] font-offBitBold md:text-center text-verde uppercase'>Digital Designer</h2>
      </div>
      <hr className='md:hidden border border-t-verde border-b-verde mx-4'/>
      <NavbarHome />
      <div className='grid md:grid-cols-2 mx-1 my-8 '>
        <div>
          <p className='text-left ml-4 md:ml-0 text-verde text-3xl md:text-5xl font-bold'>
            I'm Ivan Nevares, a web developer and UI designer interested in generating creative and performant digital experiences  
          </p>
          <div className='flex ml-4 md:ml-0 justify-start '>
          <p className='text-verde text-3xl mt-6 flex items-center font-light italic hover-underline-animation cursor-pointer doublearrow'>Explore my work
              <img src='/double-arrow.svg' className='ml-2 animate-bounce' style={{color: '#ADE252'}} size={30}/></p>
          </div>
        </div>
        <div className='hidden md:flex justify-between ml-4 md:ml-0 my-24 sm:my-0 items-center md:items-start'>
          <div className='flex flex-col'>
            <Link className='flex' href='https://www.behance.net/ivan_nevares'>
              <p className='text-verde text-2xl hover-underline-animation '>BEHANCE</p><img src='/system-uicons_external.svg' width={26} height={26} />
            </Link>
            <Link className='flex' href='https://github.com/i9-9'>
              <p className='text-verde text-2xl hover-underline-animation'>GITHUB</p><img src='/system-uicons_external.svg' width={26} height={26} />
            </Link>
            </div>
          </div>
        </div>
      <Work />
     </div>
  )
}
