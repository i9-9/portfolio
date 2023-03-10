import Navbar from "@/components/Navbar";

export async function generateStaticParams() {
    const response = await fetch('http://localhost:3000/api/garden');
    const data = await response.json();

    const ids = data.posts.map((post) => ({
        id: post.id.toString()
    }));

    console.log(ids)
    return ids;
}


async function getPost(id) {
  try { 
    const response = await fetch(`http://localhost:3000/api/garden/${id}`);
    return response.json()
  }
  catch (error){
    console.log('Error parsing JSON:', error, response);
  }
}

export default async function Post({ params, searchParams }) {
    const { id } = params;
    const post = await getPost(id);


console.log(`Params: ${JSON.stringify(params)}`);

console.log(`Search Params: ${JSON.stringify(searchParams)}`)

console.log(`Fetch: ${JSON.stringify(post)}`)

return (
    <section className="h-auto pb-10 bg-repeat">
      <Navbar />
      <h1 className="text-6xl md:text-9xl md:leading-[7rem] text-verde font-bold my-6 mx-1 ">
        DIGITAL<br />GARDEN
      </h1>
      <hr className="border-verde border mx-1" />
      <h2 className="text-verde px-1 font-bold text-6xl py-3">{post.title}</h2>
      
      <h3 className="text-verde mx-1 font-light">{post.date}</h3>
      
      <p className="px-1 text-lg text-verde">{post.description}</p>
    </section>
    
);
}