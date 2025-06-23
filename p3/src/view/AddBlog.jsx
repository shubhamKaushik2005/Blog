import React, { useState } from 'react'
import axios from 'axios';
import './AddBlog.css';


function AddBlog() {
  const [formData, setFormData] = useState({
    id: "",
    src: "",
    heading: "",
    desc:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
    ...prevData, 
    [name]: value,
    }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(formData);
      axios.post('http://localhost:3000/',formData)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
      };

  return (
    <>
      <div className="form-container">
        <h2>Updata Blog</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">id</label>
          <input type="text" name="id" id="id" placeholder="Enter id" value={formData.id} onChange={handleChange}/>
          <label htmlFor="src">Source (src)</label>
          <input type="text" name="src" id="src" placeholder="Enter source URL or Path" value={formData.src} onChange={handleChange}/>
          <label htmlFor="heading">heading</label>
          <input type="text" name="heading" id="heading" placeholder="Enter heading" value={formData.heading} onChange={handleChange}/>
          <label htmlFor="desc">desc</label>
          <input type="text" name="desc" id="desc" placeholder="Enter desc" value={formData.desc} onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddBlog
