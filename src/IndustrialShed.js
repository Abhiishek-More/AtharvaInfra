import react from "react";
import IndustrialShedData from "./IndustrialShedData";
import Card from "./ServicesCard";

const IndustrialShed = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Industrial Shed</h1>
                <h2 className="text-center">Come back later!</h2>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                           {
                               IndustrialShedData.map((val, ind) => {
                                   return <Card
                                   imgsrc={val.imgsrc}
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

export default IndustrialShed;