import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './About.css';

function About() {
  const { id } = useParams();
  const [dd, setdata] = useState({});
  
  useEffect(() => {
    axios.get(`http://localhost:3000/data/${id}`)
      .then((res) => setdata(res.data)) 
      .catch((err) => console.log(err)); 
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="product-container">
          <div className="product-image" align="center">
            <img src={dd.src} alt={dd.name} />
          </div>
          <div className="product-content">
            <h1 align="center">{dd.heading}</h1>
            <h1 align="center">{dd.price}</h1>
            <h2>{dd.desc}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
