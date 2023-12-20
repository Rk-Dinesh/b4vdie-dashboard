import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";

import { API } from "../../host";

function FogotPassword({ setToken }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
}
  

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${API}/checkuser`, formData);
        if (response.data.exists) {
            await axios.post(`${API}/otp`, formData);
            navigate('/otpverify', { state: { email: formData.email } }); 
          } else {
            toast.error('User not found'); 
          }
    } catch (error) {
        console.error(error.response.data.message);
        toast.error('Invalid credentials');
    }
}
  return (
    <div className="loginwrapper">
      <div className="lg-inner-column">
        <div className="right-column relative">
        <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800 " style={{ backgroundImage: "url(https://source.unsplash.com/random?travel)", backgroundSize: 'cover', backgroundPosition: 'center'  ,backgroundRepeat: "no-repeat",}}>
            <div className="auth-box2 flex flex-col justify-center h-full">
              <div className="mobile-logo text-center mb-6 lg:hidden block"></div>
              <div className="text-center 2xl:mb-2 mb-1">
                <h4 className="font-medium mb-4">Forgot Your Password?</h4>
                <div className="text-slate-500 dark:text-slate-400 text-base">
                  Reset Password with One Time Password.
                </div>
              </div>
              <div className="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2 bg-slate-100 dark:bg-slate-600 rounded py-3 mb-4 mt-10">
                Enter your Email and instructions will be sent to you!
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 ">
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="email">
                    Registered Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>

                <button className="btn btn-dark block w-full text-center" type="submit">
                  Send OTP
                </button>
              </form>

              <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm">
                Forget It,
                <Link
                  to= "/"
                  className="text-slate-900 dark:text-white font-medium hover:underline"
                >
                  Send me Back
                </Link>
                to The Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FogotPassword;
