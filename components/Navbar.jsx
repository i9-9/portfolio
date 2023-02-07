import React from 'react'

const Navbar = () => {
  return (
    <div className='grid-cols-5 grid items-center border-t-verde border-b-verde border-solid border-t-[1px] border-b-[1px] py-2 text-verde mx-1 text-xl'>
    <div className='col-span-2'>
      <button>PORTFOLIO</button>
    </div>
    <div className='flex flex-col'>
      <button>INDEX</button>
      <button>WORK</button>
      <button>INFO</button>
    </div>
    <div className='flex'>
      <button>DIGITAL GARDEN</button>
    </div>
    <div className='flex justify-end'>
      <button className='border-solid border-verde border-[1px] p-2'>CONTACT</button>
    </div>
  </div>
  )
}

export default Navbar