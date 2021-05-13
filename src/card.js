import React from 'react';
import web from "../src/Images/S1.jpeg"
import {NavLink} from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                    <div class="card-body col-md-12 text-center">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">{props.body}</p>
                        <NavLink to={props.redirect} className="btn-get-started">See our work</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;