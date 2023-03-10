import Navbar from "../../components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pb-28">
      <Navbar />
      <h1 className="text-6xl md:text-9xl text-verde font-bold py-2 mx-1">
        INFO
      </h1>
      <div className="grid md:grid-cols-2">
        <div className="">
          <h3 className="mx-1 text-5xl font-bold text-verde ">Ivan Nevares</h3>
          <h4 className=" mx-1 text-4xl text-verde font-offBitBold">
            DIGITAL DESIGN
          </h4>
          <ul className="text-verde mx-1 text-lg italic my-3">
            <li>
              <span className="">
                -&gt; 
              </span>
              Front-End Development</li>
            <li>
              <span className="">
                -&gt; 
              </span>
              UX/UI</li>
          </ul>
          <h3 className="mx-1 text-xl font-bold text-verde ">
            From Buenos Aires, Arg
          </h3>
          <br /> 
          <p className="text-verde text-base mx-1">
            <span className="text-lg font-bold">
            EN 
            </span>
            <br /> 
            At my best when learning, building and contributing to a
            community! I like assembling UIs that look good and perform fast.
            My background is one of a more creative approach, but recently I have
            been combining my skills in design with functional thinking to build
            high-end digital products.
            <br /> <br /> 
             My favorite front-end tools are
            JavaScript, Tailwind CSS, React.js, Next.js, and Figma; though I am
            always trying to learn new technologies and broaden my knowledge
            with what&apos;s best for my working process. -<br /><br />
            <span className="font-bold text-lg">
             ES 
            </span>
            <br />
            Estoy en mi mejor
            momento cuando estoy aprendiendo, construyendo y contribuyendo a una
            comunidad! Me gusta montar aplicaciones UI que se ven bien y se
            ejecutan lo m??s r??pido y ??ptimo posible.
            <br /> <br />  Mis herramientas de
            front-end favoritas son JavaScript, Tailwind CSS, React.js, Next.js,
            y Figma; aunque siempre trato de aprender nuevas tecnolog??as y
            ampliar mi conocimiento para poder mejorar mi proceso de trabajo.
          </p>
        </div>
        <div>
          <Image className="mx-1 p-10 my-2 fotito rounded-3xl" src='/sangre.jpg' alt="picture of programmer into the unknown" height={1000} width={1000} />
        </div>
      </div>
    </div>
  );
};

export default page;
