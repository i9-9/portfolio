import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
     <div className='mx-auto'>
      <div className='flex flex-col'>
        <h1 className='text-6xl leading-1 lg:text-[12.3rem] leading-[0.85] text-center font-black text-verde uppercase'>Ivan Nevares</h1>
        <h2 className='text-6xl leading-1 lg:text-[11.7rem] leading-[0.7] font-offBitBold text-verde text-center uppercase'>Digital Designer</h2>
      </div>
      <Navbar />
      <div className='grid grid-cols-4 mx-1 my-4'>
        <p className='uppercase text-verde text-4xl font-bold col-span-2'>I’m Ivan Nevares, a Front End Developer and UI Designer.
            I like assembling screens that look good and perform fast.</p>
        <div>
          <p className='text-verde text-2xl underline '>BEHANCE</p>
          <p className='text-verde text-2xl underline'>GITHUB</p>
        </div>
        <div className=''>
          <Image src='/star.png' width={50} height={50}/>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <p className='text-verde text-2xl'>
        I am at my best when learning, building and contributing to a community!

        I like assembling UI's that look good and perform fast. My background is one of a more creative approach, but recently I've been combining my skills in design with functional thinking to build high-end digital products.

        My favorite front-end tools are JavaScript, Tailwind CSS, React.js, Next.js, and Figma; though I am always trying to learn new technologies and broaden my knowledge with what's best for my working process.
        </p>
        <div>
        </div>
      </div>
     </div>
  )
}
