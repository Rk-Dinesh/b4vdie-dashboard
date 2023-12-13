import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

import SignInSide from "./pages/auth/login1";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import AdminForm from "./pages/Admin/AdminForm";
import UpdateForm from "./pages/Admin/UpdateForm";
import Login from "./pages/auth/login";
import Layout from "./layout/Layout";
import UserProfile from "./components/partials/header/Tools/UserProfile";
import Trip from "./pages/Trip";
import TripDeatils from "./pages/TripDetails/TripDeatils";
import AlertDetails from "./pages/TripDetails/alert";
import PitstopDetails from "./pages/TripDetails/pitstop";
import TransportDetails from "./pages/TripDetails/transport";
import TravellerDetails from "./pages/TripDetails/traveller";
import ProfileUser from "./pages/Users/ProfileUser";
import FollowUser from "./pages/Users/followers";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        {/* <Route path="" element={<Login setToken={setToken} />} /> */}
        <Route path="" element={<SignInSide setToken={setToken} />} />
        <Route path="/*" element={token ? <Layout token={token}/> : <Navigate to='/' />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<Users />} />
          <Route path="admin" element={<Admin />} />
          <Route path="trip" element={<Trip />} />
          <Route path="tripdetails" element={<TripDeatils />} />
          <Route path="alert" element={<AlertDetails />} />
          <Route path="pitstop" element={<PitstopDetails />} />
          <Route path="transport" element={<TransportDetails />} />
          <Route path="traveller" element={< TravellerDetails/>} />
          {/* <Route path="page" element={<SignInSide />} /> */}
          
          <Route path="form" element={<AdminForm />} />
          <Route path="updateform" element={<UpdateForm />} />
          <Route path="profile" element={<UserProfile token={token} />} />
          <Route path="userprofile" element={<ProfileUser/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
