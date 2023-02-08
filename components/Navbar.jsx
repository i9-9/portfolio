import React from 'react'

const Navbar = () => {
  return (
    <div className='grid-cols-2 grid items-center border-t-verde border-b-verde border-solid border-t-[1px] border-b-[1px] py-2 text-verde mx-1 text-xl sticky top-0 bg-violeta z-10'>
        <div className=''>
        <button>PORTFOLIO</button>
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col items-start'>
            <button>INDEX</button>
            <button>WORK</button>
            <button>INFO</button>
            </div>
            <div className='flex'>
            <button>DIGITAL GARDEN</button>
            </div>
            <div className='self-center justify-end bg-violeta'>
                <button className='p-2 border-solid border-verde border-[1px]'>CONTACT</button>
            </div>

        </div>
  </div>
  )
}

export default Navbar