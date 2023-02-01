import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home({posts}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
  
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
        <button>Go To Feed</button>
  
    </div>
  }