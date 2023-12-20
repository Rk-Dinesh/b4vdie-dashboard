import React from "react";
import Card from "../../components/ui/Card";
import HomeClub from "./HomeClub.";
import ClubDetails from "../../components/partials/Table/react-table-Club";

const Club = ({Current_user}) => {

  return (
    <div>
      <HomeClub title="Club" />
      <div className="lg:col-span-12 col-span-12">
        <Card >
          <ClubDetails Current_user ={Current_user}/>
        </Card>
      </div>
    </div>
  );
};

export default Club;



