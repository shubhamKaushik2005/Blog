import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProfileCard from '../components/ProfileCard';
import Nav from '../components/Nav';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then((res) => setProfiles(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (profiles.length > 0 && id !== undefined) {
      const index = parseInt(id, 10);
      const item = profiles.find((_, i) => i === index);
      setSelectedProfile(item);
    }
  }, [profiles, id]);

  if (!profiles || profiles.length === 0) return <p>Loading...</p>;
  if (id !== undefined && !selectedProfile) return <div>Loading...</div>;

  return (
    <>
      <div className="he">
        <Link to="/about">
          <img src="images/zomoto.webp" alt="Zomato Logo" />
        </Link>
      </div>
      <Nav />
      <div className="container">
        <div className="row my-4">
          {profiles.map((item, index) => (
            <ProfileCard key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
