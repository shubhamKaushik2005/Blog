import React from 'react';
import { Link } from 'react-router-dom';

function ProfileCard(props) {
    const { data, index } = props;
    const { src, heading, desc } = data;

    const img = {
        height: "200px",
        width: "100%",
        objectFit: "cover"
    };

    return (
        <div className="col-3">
            <div className="product" style={{ width: "18rem" }}>
                <Link to={`/about/${index}`}>
                    <img src={src} style={img} className="product-img" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="product-title">{heading.substr(0, 20)}...</h5>
                    <p className="product-description">
                        {desc ? <i>{desc.substr(0, 50)}...</i> : <b>Desc not found</b>}
                    </p>
                </div>
            </div>
            <br />
        </div>
    );
}

export default ProfileCard;
