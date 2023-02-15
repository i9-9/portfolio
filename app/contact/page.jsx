import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-hero-mesh overflow-hidden">
      <Navbar />
      <h1 className="text-6xl md:text-9xl text-verde font-bold my-8 mx-1">CONTACT</h1>
      <h3 className="text-xl md:text-2xl text-verde font-bold mx-1">
        We can either talk and discuss your project, or you can follow me up for
        future reference:{" "}
      </h3>
      <div className="grid md:grid-cols-3 text-center my-10 gap-6 mx-1">
        <div className="bg-verde h-fit py-20">
          <h4 className="text-3xl md:text-7xl font-bold">EMAIL</h4>
        </div>
        <div className="bg-verde h-fit py-20">
          <h4 className="text-3xl md:text-7xl font-bold">BEHANCE</h4>
        </div>
        <div className="bg-verde h-fit py-20">
          <h4 className="text-3xl md:text-7xl font-bold">GITHUB</h4>
        </div>
      </div>
      <div className="grid grid-cols-3 mx-1">
        <div className="grid-span-3 border-solid border border-verde">
          <form className="flex flex-col">
            <label htmlFor="name">
              <input
                className="bg-violeta"
                type="text"
                required
                placeholder="NAME"
              />
            </label>
            <label htmlFor="email-address">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-violeta"
                placeholder="EMAIL ADDRESS"
              />
            </label>
            <label htmlFor="inquiry" className="mb-2">
              Inquiry
            </label>
            <textarea
              className="mb-4 min-h-[100px]"
              id="inquiry"
              name="message"
              type="text"
              autoComplete="inquiry"
              placeholder="Your message..."
              required
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
