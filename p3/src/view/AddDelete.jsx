import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from '../components/ProfileCard';
import { Link } from 'react-router-dom';

function AddDelete() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(res => setProfiles(res.data))
            .catch((err) => console.log (err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/data/${id}`)
            .then(() => setProfiles(prev => prev.filter(p => p.id !== id)))
            .catch(() => alert('Failed to delete profile.'));
    };

    return (
        <div className="container">
            <div className="row my-4">
                {profiles.map(profile => (
                    <div key={profile.id} className="col-md-4 mb-3">
                        <ProfileCard data={profile} />
                        <button className="btn btn-danger mt-2" onClick={() => handleDelete(profile.id)}>
                            Delete
                        </button>
                        <Link className="btn btn-success mt-2" to={`/edit/${profile.id}`}>Edit</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddDelete;
