import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

async function getPosts(){
  const response = await fetch('http://localhost:3000/api/garden');
  const data = await response.json();

  return data.posts;
}

export default async function Page() {
  const posts = await getPosts();
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
          <option defaultValue>ALL GROWTH STAGES</option>
          <option value="SE">SEEDLING</option>
          <option value="BU">BUDDING</option>
          <option value="EV">EVERGREEN</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-1 gap-10 my-10">
        {posts.map(({id, title, description}) => (
          <li className="border border-verde flex flex-col text-verde px-2 hover:bg-violeta transition-all duration-700" key={id}>
            <Link href={`/digital-garden/${id}`}>
              <div className="flex flex-row items-center justify-between py-3">
                <h2 className="font-bold text-2xl hover-underline-animation">
                {title}
                </h2>
              </div>
            <p className="pb-4">
              {description}
            </p>
            </Link>
          </li>
        ))}
      </div>
    </section>
  );
};


