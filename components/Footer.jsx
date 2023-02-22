import React from 'react'

const Footer = () => {
  return (
    // <footer className='absolute bottom-0'>
    //     <div className='border-t-[1px] border-b-[1px] border-solid border-verde mx-1 flex  justify-between items-center mt-32 '>
    //         <h5 className='text-verde font-light text-2xl'>COPYRIGHT 2023</h5>
    //         <h6 className='font-bold text-verde text-4xl'>I / N</h6>
    //     </div>
    // </footer>

    <footer className='py-4 bg-transparent md:py-8 lg:py-2 mx-1 bottom-0'>
      <div className='mx-auto text-center flex items-center justify-between border-t-[1px] border-b-[1px] border-solid border-verde '>
        <h5 className='text-verde font-light text-2xl'>COPYRIGHT 2023</h5>
        <h6 className='font-bold text-verde text-4xl'>I / N</h6>
      </div>
    </footer>
  )
}

export default Footer