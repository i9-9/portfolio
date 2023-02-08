"use client"

import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";


const Work = () => {
  return (
    <div className='mx-1 my-4'>
        <h2 className='text-verde text-7xl font-bold '>WORK</h2>
        <div className='py-6'>
            <Marquee play={true} pauseOnHover={true} gradient={false} className='flex justify-center'>
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
            </Marquee>
            <Marquee play={true} pauseOnHover={true} gradient={false} className='flex justify-center my-4'>
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
            </Marquee>
        </div>
    </div>
  )
}

export default Work