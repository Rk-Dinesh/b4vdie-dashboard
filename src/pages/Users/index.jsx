import React from "react";
import Card from "../../components/ui/Card";
import HomeUsers from "./HomeUsers";
import UserDetails from "../../components/partials/Table/react-table-user";

const Users = () => {

  return (
    <div>
      <HomeUsers title="Travellers" />
      <div className="lg:col-span-12 col-span-12">
        <Card >
          <UserDetails />
        </Card>
      </div>
    </div>
  );
};

export default Users;



