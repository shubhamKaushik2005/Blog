import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import ProfileCard from '../components/ProfileCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function About() {
  const [data, setData] = useState([]);
  const [dd, setDd] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (data.length > 0 && id !== undefined) {
      const index = parseInt(id);
      const item = data.find((_, i) => i === index);
      setDd(item);
    }
  }, [data, id]);

  if (!data || data.length === 0) return <p>Loading...</p>;
  if (id !== undefined && !dd) return <div>Loading...</div>;

  // Single post view
  if (id !== undefined && dd) {
    return (
      <div className="container my-4">
        <div className="text-center mb-4">
          <img src={dd.src} alt={dd.name} className="img-fluid" />
          <h1>{dd.heading}</h1>
          <h2>${dd.price}</h2>
        </div>
        <div>
          <h2>{dd.desc}</h2>
          <p>
            How two young dreamers built a crowd-favourite eatery in Ranchi.
            Brothers Nishant and Vikash Ranjan had a dream—to create a space
            where people could come together over warm vibes while enjoying
            unforgettable meals. But bringing this idea to life was no easy feat!
            It required grit, resourcefulness and a whole lot of faith in their passion for food.
          </p>
        </div>
      </div>
    );
  }

  // Default article view
  const mainItem = data[0];

  return (
    <div className="container my-4">
      <div className="mb-4">
        <img src={mainItem.src} alt="" className="img-fluid" />
        <span>Shuvra Saha | March 28, 2025 | 4 min read</span>
      </div>
      <h1 className="mb-3">{mainItem.heading}</h1>
      <p>
        {mainItem.desc}
        Brothers Nishant and Vikash Ranjan had a dream—to create a space where people could come together over warm vibes while enjoying unforgettable meals.
        <br /><br />
        It required grit, resourcefulness and a whole lot of faith in their passion for food.
      </p>

      <div className="mb-4">
        <img src="images/i1.jpg" alt="" className="img-fluid" />
        <span>Nishant Ranjan, Founder of Jashn The Restaurant</span>
        <p>
          After completing high school in Ranchi, Nishant and Vikash moved to Mumbai for further studies...
        </p>
      </div>

      <div className="mb-4">
        <img src="images/i2.jpg" alt="" className="img-fluid" />
        <span>Vikash Ranjan, Co-founder of Jashn The Restaurant</span>
        <p>
          They were drawn to the idea of opening a restaurant in their hometown...
        </p>
      </div>

      <div className="mb-4">
        <img src="images/i3.jpg" alt="" className="img-fluid" />
        <span>Chicken Dehati served at the outlet</span>
        <h2>{mainItem.heading} - Adapting and growing</h2>
        <p>
          By 2018, Nishant noticed a shift in dining habits...
        </p>
      </div>

      <div className="mb-4">
        <img src="images/i3.jpg" alt="" className="img-fluid" />
        <span>Outside a Jashn The Restaurant outlet</span>
        <p>
          With enormous demand from customers, the brothers decided it was time to expand...
        </p>
        <h2>{mainItem.heading} - Their next big move</h2>
        <p>The brothers wish to expand across Ranchi and beyond...</p>
      </div>

      <hr />
      <div className="d-flex gap-3">
        <FaFacebookSquare size={30} />
        <FaLinkedin size={30} />
      </div>
      <hr />

      <h2>More for you to read</h2>
      <div className="row my-4">
        {data.slice(0, 6).map((item, index) => (
          <div className="col-md-4" key={index}>
            <ProfileCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
