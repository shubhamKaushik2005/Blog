import React, { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom"; 
import axios from "axios";
import './UpdateBlog.css';

function UpdateBlog() {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [formData, setFormData] = useState({
    id: "",
    src: "",
    heading: "",
    desc: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/data/${id}`) 
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/data/${id}`, formData) 
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      navigate('/updateblog')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Source (src):</label>
        <input
          type="text"
          name="src"
          value={formData.src}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Heading:</label>
        <input
          type="text"
          name="heading"
          value={formData.heading}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateBlog;
