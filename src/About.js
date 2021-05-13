import React from "react";
import web from "../src/Images/Founder.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
    return (
        <>
            <div className="mt-5 mb-5">
                <h1 className="text-center">
                    About Us
                </h1>
            </div>
            <h5 className="col-md-10 text-center mx-auto my-5"><strong>AtharvaInfra</strong> was established three years ago, with the main objective to carry on the business of <strong>Warehousing and Industrial Sheds since 2018</strong>.The Company has continuously made a progress in rendering services and today it has accomplished a reputation of providing the best infra structural facilities in this field. Our company is efficient, responsible service - competitively priced - personalized by a management team with over many years of experience in the Warehousing and Industrial Sheds business. Under the guidance of <strong>B K More (Proprietor)</strong>, who holds profound knowledge and experience in this domain, we have been able to aptly satisfy our clients. </h5>
            <Common name="To know more about" imgsrc={web} visit="/contact" btname="Click here"/>   
        </>
    );
};

export default About;