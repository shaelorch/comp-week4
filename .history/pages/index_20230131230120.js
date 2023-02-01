import { prisma } from '../server/db/client'
import { useEffect } from 'react'

export default function Home({posts}){
  const [posts, setPosts] = useState(props.posts)

  // Add a use effect in case the posts change when routing to the home page
  
    
  return (
    <div>
      <h1>Home</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
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



