import React from "react";
import Card from "../../components/ui/Card";
import HomeAdmin from "./HomeAdmin";
import AdminDetails from "../../components/partials/Table/react-table-Admin";

const Admin = () => {

  return (
    <div>
      <HomeAdmin title="Admin" />
      <div className="lg:col-span-12 col-span-12">
        <Card >
          <AdminDetails />
        </Card>
      </div>
    </div>
  );
};

export default Admin;



