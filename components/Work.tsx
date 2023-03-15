import Image from 'next/image';
import Marquee from "react-fast-marquee";


const Work = () => {

  return (
    <div id='work' className='mx-1 h-auto'>
        <h2 className='text-center md:text-left text-verde text-7xl font-bold mt-12 py-2 '>WORK</h2>
        <div className='py-6'>
            <Marquee 
              speed={25}
             play={true} 
             pauseOnHover={false} 
             gradient={false} 
             className='flex justify-center'>
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
            <Marquee play={true} pauseOnHover={false} gradient={false} className='flex justify-center my-10'>
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
            
        </div>
    </div>
  )
}

export default Work