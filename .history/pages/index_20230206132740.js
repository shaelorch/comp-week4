import { prisma } from '../server/db/client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home({posts}){

  // Add a use effect in case the posts change when routing to the home page
  
    
  return (
    <div >

      <div style={{display:'flex', justifyContent:'center', color:'pink'}}>
         <h1>YouHoo</h1>
      </div>
     

      <div style={{display:'flex',flexDirection:'column', marginLeft:30}}>
        <h1></h1>
      <h3>Tell me a sercet...</h3>

      <Link href='/addPosts'>
        <button style={{backgroundColor:'pink', borderRadius:10, height:40, width:200, marginBottom:50}}>Write a post</button>
      </Link>
      </div>
      
      
      {posts.map((post) => (
        <div key={post.id}>
          <div style={{ width:"80%", display:'flex', backgroundColor:'white', color:'black', marginBottom:30, marginRight:"20%", marginLeft:"10%", borderRadius:10, paddingLeft:20, flexDirection:"column"}}>
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



