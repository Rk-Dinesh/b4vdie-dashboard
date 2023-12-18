import React from "react";
import Card from "../../components/ui/Card";
import HomeAdmin from "./HomeAdmin";
import AdminDetails from "../../components/partials/Table/react-table-Admin";

const Admin = ({Current_user}) => {

  return (
    <div>
      <HomeAdmin title="Admin" Current_user ={Current_user}/>
      <div className="lg:col-span-12 col-span-12">
        <Card >
          <AdminDetails Current_user ={Current_user}/>
        </Card>
      </div>
    </div>
  );
};

export default Admin;



