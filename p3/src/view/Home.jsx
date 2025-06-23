// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from '../components/ProfileCard';
import Nav from '../components/Nav';

function Home() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const { id } = useParams();

  const cardsPerPage = 8;
  const [page, setPage] = useState(1);

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

  // Slice profiles based on current page
  const displayedCards = profiles.slice(0, page * cardsPerPage);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="he">
          <img src="images/zomoto.webp" alt="Zomato Logo" />
      </div>
      <Nav />
      <div className="container">
        <div className="row my-4">
          {displayedCards.map((item, index) => (
            <ProfileCard key={index} data={item} index={index+1} />
          ))}
        </div>
        {displayedCards.length < profiles.length && (
          <div className="text-center mb-4">
            <button className="btn btn-primary" onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
