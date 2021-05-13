import react from "react";
import BungalowData from "./BungalowData";
import Card from "./ServicesCard";

const Bungalow = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Bungalow</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                           {
                               BungalowData.map((val, ind) => {
                                   return <Card
                                   imgsrc={val.imgsrc}
                                   title={val.title}
                                   />
                               })
                           }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bungalow;