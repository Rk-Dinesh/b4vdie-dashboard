import React from "react";
import Card from "../../components/ui/Card";
import HomeTrip from "./HomeTrip.";
import TripDetails from "../../components/partials/Table/react-table-Trip";

const Trip = () => {

  return (
    <div>
      <HomeTrip title="Trip" />
      <div className="lg:col-span-12 col-span-12">
        <Card >
          <TripDetails />
        </Card>
      </div>
    </div>
  );
};

export default Trip;



