import '../App.css';
import React from "react";
function Body(props){
    return(
            <div className="card">
                <div style={{width:500, margin:20}}>
                <img src={props.src} className="card-img-top" alt="Movie Poster"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Title: {props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Production: {props.production}</h6>
                    <p className="card-text">Plot: {props.plot}</p>
                    <p style={{color:"blue"}}>Rating: {props.rated}</p>
                    <p style={{color:"blue"}}>Release Date: {props.release}</p>
                </div>
            </div>
    );
}
export default Body;