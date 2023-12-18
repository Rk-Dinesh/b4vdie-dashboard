import React from "react";
import TripTable from "./TripTable";

const TripDetails = ({Current_user}) => {
  return (
    <div >
      <TripTable Current_user ={Current_user}/>
    </div>
  );
};

export default TripDetails;
