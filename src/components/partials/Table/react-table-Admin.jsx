import React from "react";
import AdminTable from "./AdminTable";

const AdminDetails = ({Current_user}) => {
  return (
    <div >
      <AdminTable Current_user ={Current_user}/>
    </div>
  );
};

export default AdminDetails;
