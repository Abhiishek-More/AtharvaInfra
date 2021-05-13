import React from "react";
import Background from "../src/Images/Background.jpg"
import web from "../src/Images/Home.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
        <div className="background"></div>
            <div className="mt-5 mb-5">
                <h1 className="text-center">
                    Welcome to AtharvaInfra
                </h1>
            </div>
            <Common name="Fulfill your dreams with" imgsrc={web} visit="/service" btname="Get started"/>
        </>
    );
};

export default Home;