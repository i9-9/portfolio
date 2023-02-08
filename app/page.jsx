import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Work from '@/components/Work'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
     <div className='mx-auto'>
      <div className='flex flex-col'>
        <h1 className='text-6xl leading-1 lg:text-[12.3rem] leading-[0.85] text-center font-black text-verde uppercase'>Ivan Nevares</h1>
        <h2 className='text-6xl leading-1 lg:text-[11.7rem] leading-[0.7] font-offBitBold text-verde text-center uppercase'>Digital Designer</h2>
      </div>
      <Navbar />
      <div className='grid grid-cols-2 mx-1 my-6 '>
        <div>
          <p className='uppercase text-verde text-4xl font-bold'>I’m Ivan Nevares, a Front End Developer and UI Designer.
              I like assembling screens that look good and perform fast.
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <Link className='flex' href='/'>
              <p className='text-verde text-2xl underline '>BEHANCE</p><img src='/system-uicons_external.svg' width={26} height={26} />
            </Link>
            <Link className='flex' href='/'>
              <p className='text-verde text-2xl underline'>GITHUB</p><img src='/system-uicons_external.svg' width={26} height={26} />
            </Link>
          </div>
          <div className=''>
            <Image className='animate-spin-slow' src='/star.png' width={50} height={50}/>
          </div>
        </div>
        </div>
      <div className='grid grid-cols-2 mx-1'>
        <p className='text-verde text-2xl'>
        I am at my best when learning, building and contributing to a community!<br /><br />
        I like assembling UI's that look good and perform fast. My background is one of a more creative approach, but recently I've been combining my skills in design with functional thinking to build high-end digital products.
        <br /><br />
        My favorite front-end tools are JavaScript, Tailwind CSS, React.js, Next.js, and Figma; though I am always trying to learn new technologies and broaden my knowledge with what's best for my working process.
        </p>
      </div>
      <Work />
      <Footer />
     </div>
  )
}
