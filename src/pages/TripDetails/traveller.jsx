import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/ui/Card';
import MobileLogo from "../../assets/aircraft.png";
import { API } from '../../host';

const TravellerDetails = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const tripid = params.get("tripid");

    const [traveller, setTraveller] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const travel = await axios.get(`${API}/gettraveller?tripid=${tripid}`);
            const travellerData = travel.data.token
            setTraveller(travellerData);

        } catch (error) {
            console.error("Error fetching  data:", error);

        }
    };
    return (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 h-max">

            {traveller.map((traveller, index) => (
                <Card key={index} bodyClass="p-4 rounded-md" className="group ">
                    <div className=" bg-white dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
                        <div className="h-[146px]">
                            <img
                                className="  h-full w-full  object-contain  transition-all duration-300 group-hover:scale-105"
                                src={MobileLogo}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center ">
                            <p className="	text-slate-900 dark:text-slate-300 ">
                                Co-Traveller
                            </p>
                        </div>
                        <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
                            Name : {traveller?.cotraveller_name || "N/A"}
                        </p>
                        <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
                            Join Location : {traveller?.join_location || "N/A"}
                        </p>

                    </div>
                </Card>
            ))}

        </div>
    )
}

export default TravellerDetails;