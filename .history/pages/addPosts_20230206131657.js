import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home({posts}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
  
  const handleSubmit = async (e) => {
  e.preventDefault()
  const res = await axios.post('/api/posts', { title, content })
    console.log(res.data) 
  }
  
  return <div style={{display:'flex', justifyContent:'center', flexDirection:'column' , alignItems:'center'}}>
  <h1 >Write A Post</h1>
  
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width:400}}>
          <input placeholder="Title..." style={{backgroundColor:'white', color:'black',marginTop:100, border:'transparent'}} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder='Write your post here...' style={{color:'black',backgroundColor:'white'}} value={content} onChange={(e) => setContent(e.target.value)} />
          
           <Link href="/">
            <button style={{backgroundColor:'orange', borderRadius:10, border:'transparent', height:30, marginTop:30}} type="submit">Submit</button>
          </Link> 
       </form>
        <Link href='/'>
            <button style={{display:'flex', marginTop:50, backgroundColor:'orange', border:'transparent', height:30, alignItems:'center', borderRadius:10, padding:15}}>Go To Feed</button>
        </Link>
        
  
    </div>
  }