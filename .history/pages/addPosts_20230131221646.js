import { useState } from 'react'


export default function Home({posts}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
  
  const handleSubmit = async (e) => {
  e.preventDefault()
  console.log({title, content})
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