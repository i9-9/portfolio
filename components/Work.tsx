import Image from 'next/image';
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import { useState } from 'react';

const Work = () => {

  return (
    <div id='work' className='mx-1 h-auto pt-1'>

      <div className='py-6'>
        <Link href="/work/kostume">
          <Marquee
            speed={25}
            play={true}
            pauseOnHover={false}
            gradient={false}
            className='flex justify-center border border-t-verde border-b-verde py-1'>
            <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume1.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume2.png' alt='kostume project' width={450} height={354} />
            <Image className='mx-2' src='/projects-landing/kostume/kostume3.png' alt='kostume project' width={450} height={354} />
          </Marquee>
        </Link>
        <Link href="/work/c7">
          <Marquee play={true} pauseOnHover={false} gradient={false} className='flex justify-center my-6 border border-t-verde border-b-verde py-1'>
            <Image className='mx-2' src='/projects-c7/c7-1.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-2.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-3.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-4.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-1.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-2.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-3.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-4.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-1.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-2.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-3.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-4.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-1.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-2.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-3.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-4.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-1.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-2.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-3.png' alt='c7 studio project' width={450} height={354} />
            <Image className='mx-2' src='/projects-c7/c7-4.png' alt='c7 studio project' width={450} height={354} />
          </Marquee>
        </Link>
        <h3 className='text-verde font-bold'>See more projects:<br /></h3>
        <div className='text-verde font-bold grid grid-cols-1 md:grid-cols-2'>
          <button className='border border-verde px-1 py-2 hover:bg-verde hover:text-violeta transition-all duration-700 text-xl'>
            <Link href="https://github.com/i9-9" >
              Github
            </Link>
          </button>
          <button className='border border-verde px-1 py-2  hover:bg-verde hover:text-violeta transition-all duration-700 text-xl'>
            <Link href="https://www.behance.net/ivan_nevares" >
              Behance
            </Link>
          </button>
          <br />
        </div>


      </div>
    </div>
  )
}

export default Work