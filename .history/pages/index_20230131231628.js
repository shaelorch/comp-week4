import { prisma } from '../server/db/client'
import { useEffect } from 'react'

export default function Home({posts}){

  // Add a use effect in case the posts change when routing to the home page
  
    
  return (
    <div>
      <h1>Feed</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <div style={{display:'flex', backgroundColor:'white', color:'black', marginBottom:30, marginRight:10}}>
            <h2>{post.title}</h2>
          <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const posts = await prisma.post.findMany()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  }
}



