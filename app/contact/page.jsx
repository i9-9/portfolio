import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from 'next/link'

const page = () => {
  return (
    <div className="bg-hero-mesh h-auto bg-repeat pb-28">
      <Navbar />
      <h1 className="text-6xl md:text-9xl text-verde font-bold my-8 mx-1">CONTACT</h1>
      <h3 className="text-xl md:text-2xl text-verde font-bold mx-1">
        We can either talk and discuss your project, or you can follow me up for
        future reference:
      </h3>
      <div className="grid md:grid-cols-3 text-center my-10 gap-6 mx-1">
        <div className="bg-verde h-fit py-20 hover:bg-[#5226AA] hover:text-[#ADE252] transition-all">
          <Link href='mailto:ivannevares9@gmail.com'>
            <h4 className="text-3xl md:text-7xl font-bold">EMAIL</h4>
          </Link>
        </div>
        <div className="bg-verde h-fit py-20 hover:bg-[#5226AA] hover:text-[#ADE252] transition-all">
          <Link href='https://www.behance.net/ivan_nevares'>
            <h4 className="text-3xl md:text-7xl font-bold">BEHANCE</h4>
          </Link>
        </div>
        <div className="bg-verde h-fit py-20 hover:bg-[#5226AA] hover:text-[#ADE252] transition-all">
        <Link href='https://github.com/i9-9'>
          <h4 className="text-3xl md:text-7xl font-bold">GITHUB</h4>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
