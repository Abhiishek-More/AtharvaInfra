import React from 'react';
import web from "../src/Images/S1.jpeg"
import {NavLink} from "react-router-dom";

const ServicesCard = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card mb-4">
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                </div>
            </div>
        </>
    );
};

export default ServicesCard;