import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from './Footer';
import Bungalow from "./Bungalow";
import IndustrialShed from "./IndustrialShed";
import Building from "./Building"
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch> {/*To get any first page that matches the search*/}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/Bungalow" component={Bungalow} />
                <Route exact path="/IndustrialShed" component={IndustrialShed}/>
                <Route exact path="/Building" component={Building}/>
                <Redirect to="/" /> {/*To redirect to home page if user gives invalid address*/}
            </Switch>
            <Footer />
        </>
    );
};

export default App;