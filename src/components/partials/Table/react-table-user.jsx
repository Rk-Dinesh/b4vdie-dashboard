import React from "react";
import UserTable from "./UserTable";

const UserDetails = ({Current_user}) => {
  return (
    <div >
      <UserTable Current_user ={Current_user}/>
    </div>
  );
};

export default UserDetails;
