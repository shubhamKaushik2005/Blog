import React from 'react'


function ProfileCard(props) {
    const {data}=props
    const {src, heading, desc, id}=data;

    const img={
        height:"200px",
        width:"100%",
        objectFit:"cover"
    }
    
    return (
        <>
            <div className="col">
                <div className="card my-4" style={{width: "18rem"}}>
                   <img src={src} style={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{heading.substr(0,20)}...</h5>
                            <p className="card-text">{desc?<i>{desc.substr(0,50)}...</i>:<b>Desc not found</b>}</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard
