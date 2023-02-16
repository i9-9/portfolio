"use client"

import { useEffect, useState } from "react"


export default function Project ({params}) {
  const {id} = params
  const [projects, setProject] = useState([]);

  useEffect(() => {
    fetch('/pages/api/data.json')
    .then(res => res.json())
    .then(data => {
      setProjects(data)
    })
  })

  return (
    <section>
      {projects.map(project => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </article>
      ))}
    </section>
  )
}

