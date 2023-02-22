import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="h-auto pb-10 bg-repeat">
      <Navbar />
      <h1 className="text-6xl md:text-9xl md:leading-[7rem] text-verde font-bold my-6 mx-1 ">
        DIGITAL<br />GARDEN
      </h1>
      <h3 className="text-xl md:text-4xl text-verde font-medium mx-1 uppercase">
        Filter by growth stage:
      </h3>
      <div className="relative bg-transparent grid grid-cols-4 my-2 mx-1">
        <select
          id="Growth"
          className="bg-transparent border border-verde text-verde text-lg focus:ring-verde block w-full p-2.5 "
        >
          <option selected>ALL GROWTH STAGES</option>
          <option value="SE">SEEDLING</option>
          <option value="BU">BUDDING</option>
          <option value="EV">EVERGREEN</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-1 gap-10 my-10">
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
        <div className="border border-verde flex flex-col text-verde px-2">
          <div className="flex flex-row items-center justify-between py-3">
            <h2 className="font-bold text-2xl">NEURODIVERSITY</h2>
            <Image width={20} height={20} src='/digital-garden/seeding.png' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos omnis aut, expedita unde earum laudantium porro asperiores ab ut rerum a. Modi sapiente nam ex deserunt reprehenderit quidem consequatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
