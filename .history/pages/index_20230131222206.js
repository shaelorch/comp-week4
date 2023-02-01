import { prisma } from '../server/db/client'

export default function PostPage({posts}){
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
      posts:JSON.parse(JSON.stringify(posts)),
    },
  }
}

export default function Home({posts}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState(props.posts)

// Add a use effect in case the posts change when routing to the home page
useEffect(() => {
setPosts(props.posts)
}, [props.posts])

const handleSubmit = async (e) => {
e.preventDefault()
const res = await axios.post('/api/posts', { title, content })
  console.log(res.data)
}

return <div>
<h1>Home</h1>

      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", maxWidth: "400px"}}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

  </div>
}

