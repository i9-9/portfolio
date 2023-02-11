"use client"

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Work from '@/components/Work'
import Image from 'next/image'
import Link from 'next/link'
import { TbArrowBigDownLines } from 'react-icons/tb'
import {GiBoomerangSun} from 'react-icons/Gi'
import { motion } from "framer-motion"

export default function Home() {
  return (
     <div className='mx-auto'>
      <div className='flex flex-col my-4'>
        <h1 className='text-6xl leading-1 lg:text-[12.3rem] leading-[0.85] text-center font-black text-verde uppercase'>Ivan Nevares</h1>
        <h2 className='text-6xl leading-1 lg:text-[11.7rem] leading-[0.7] font-offBitBold text-verde text-center uppercase'>Digital Designer</h2>
      </div>
      <Navbar className='mt-8' />
      <div className='grid grid-cols-2 mx-1 my-16 '>
        <div>
          <p className=' text-verde text-5xl font-bold'>
            I’m Ivan Nevares, a web developer and UI designer interested in generating creative and performant digital experiences  
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <Link className='flex' href='https://www.behance.net/ivan_nevares'>
              <p className='text-verde text-2xl underline '>BEHANCE</p><img src='/system-uicons_external.svg' width={26} height={26} />
            </Link>
            <Link className='flex' href='https://github.com/i9-9'>
              <p className='text-verde text-2xl underline'>GITHUB</p><img src='/system-uicons_external.svg' width={26} height={26} />
            </Link>
          </div>
          <div className=''>
            <GiBoomerangSun style={{color: '#ADE252'}} className='animate-spin-slow' size={100} />
            <motion.div
              animate={{ y: ["2rem", "4rem"]  }}
              transition={{ repeat: Infinity, reverse: Infinity, duration: 1, ease: "easeOut"  }}>
              <TbArrowBigDownLines style={{color: '#ADE252'}} size={ 100}/>
            </motion.div>
          </div>
        </div>
        </div>
      <Work />
      <Footer />
     </div>
  )
}
