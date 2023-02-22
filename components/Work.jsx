"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import Marquee from "react-fast-marquee";


const Work = () => {

  const [isShown, setIsShown] = useState(false);


  return (
    <div className='mx-1 h-screen mb-20'>
        <h2 className='text-center md:text-left text-verde text-7xl font-bold mt-12 py-10 '>WORK</h2>
        <div className='py-6'>
            <Marquee 
             play={true} 
             pauseOnHover={false} 
             gradient={false} 
             className='flex justify-center myDIV'>
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' width={450} height={354} />
            </Marquee>
            {isShown && (
              <div>
                I'll appear when you hover over the button.
              </div>
             )}

            <Marquee play={true} pauseOnHover={false} gradient={false} className='flex justify-center my-10'>
                <Image className='mx-2' src='/projects-c7/c7-1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-4.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-4.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-4.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-4.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-1.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-2.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-3.png' width={450} height={354} />
                <Image className='mx-2' src='/projects-c7/c7-4.png' width={450} height={354} />

            </Marquee>
            
        </div>
    </div>
  )
}

export default Work