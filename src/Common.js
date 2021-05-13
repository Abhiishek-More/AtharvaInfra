import React from "react";
import web from "../src/Images/Home.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section className="d-flex aling-items-center">
            <div className="container-fluid mb-1">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>  
                                {props.name}
                                <strong className="brand-name"> AtharvaInfra</strong></h1>
                            <h2 className="my-3">
                                
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started  ">{props.btname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img container-fluid mt-0">
                            <img src={props.imgsrc} className="img-fluid animated" alt="home img"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Common;