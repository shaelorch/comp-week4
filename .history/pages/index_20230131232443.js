import { prisma } from '../server/db/client'
import { useEffect } from 'react'

export default function Home({posts}){

  // Add a use effect in case the posts change when routing to the home page
  
    
  return (
    <div >

      <div style={{display:'flex', flexDirection:'column', marginLeft:50}}>
        <h1>Feed</h1>
      <h3>What are you up to?</h3>

      <a href='/addPosts'>
        <button style={{backgroundColor:'pink', borderRadius:10, height:40, width:200, marginBottom:50}}>Write a post</button>
      </a>
      </div>
      
      
      {posts.map((post) => (
        <div key={post.id}>
          <div style={{display:'flex', backgroundColor:'white', color:'black', marginBottom:30, marginRight:200, marginLeft:30, borderRadius:10, paddingLeft:20}}>
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



