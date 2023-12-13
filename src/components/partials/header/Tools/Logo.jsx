import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {

  return (
    <div>
      <Link to="/dashboard">
        {<img src="https://hackwittechnologies.com/assets/img/favicon.png" alt="" />
        }
      </Link>
    </div>
  );
};

export default Logo;
