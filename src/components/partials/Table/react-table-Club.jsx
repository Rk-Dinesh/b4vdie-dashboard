import React from "react";
import ClubTable from "./ClubTable";


const ClubDetails = ({Current_user}) => {
  return (
    <div >
      <ClubTable Current_user ={Current_user}/>
    </div>
  );
};

export default ClubDetails;
