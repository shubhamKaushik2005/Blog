import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AddBlog() {
    const [id,setId]=useState('');
    const [src,setSrc]=useState('');
    const [heading,setHeading]=useState('');
    const [desc,setDesc]=useState('');

    

    useEffect(()=>{
        axios.get('http://localhost:3000/')
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    },[])
    const save = () =>{
        axios.post('http://localhost:3000/',{id,src,heading,desc})
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
  return (
    <>
      <div>
        <input type="id" placeholder='id' onChange={(e)=>setId(e.target.value)} />
        <input type="src" placeholder='src' onChange={(e)=>setSrc(e.target.value)} />
        <input type="heading"  placeholder='heading'onChange={(e)=>setHeading(e.target.value)} />
        <input type="desc"  placeholder='desc' onChange={(e)=>setDesc(e.target.value)} />
        <button onClick={save}>save</button>
      </div>
    </>
  )
}

export default AddBlog
