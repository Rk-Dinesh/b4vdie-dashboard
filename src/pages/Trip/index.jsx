import React from "react";
import Card from "../../components/ui/Card";
import HomeTrip from "./HomeTrip.";
import TripDetails from "../../components/partials/Table/react-table-Trip";

const Trip = ({Current_user}) => {

  return (
    <div>
      <HomeTrip title="Trip" />
      <div className="lg:col-span-12 col-span-12">
        <Card >
          <TripDetails Current_user ={Current_user}/>
        </Card>
      </div>
    </div>
  );
};

export default Trip;



