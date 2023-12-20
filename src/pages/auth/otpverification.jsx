import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { API } from "../../host";

function OtpVerify() {
  const location = useLocation();
  const email = location.state ? location.state.email : "";

  const [formData, setFormData] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });

  const navigate = useNavigate();

  const handleChange = (value, event) => {
    setFormData({ ...formData, [value]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const otpValue = Object.values(formData).join("");

      const otpVerification = {
        email: email,
        otp: otpValue,
      };

      const response = await axios.post(`${API}/verifyotp`, otpVerification);
      console.log(response)
      navigate("/resetpassword" , { state: { email: email } });
    } catch (error) {
      console.error(error.response.data.message);
      toast.error("Invalid credentials");
    }
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 4) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  return (
    <div className="loginwrapper">
      <div className="lg-inner-column">
        <div className="right-column relative">
        <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800 " style={{ backgroundImage: "url(https://source.unsplash.com/random?travel)", backgroundSize: 'cover', backgroundPosition: 'center'  ,backgroundRepeat: "no-repeat",}}>
            <div className="auth-box2 flex flex-col justify-center h-full">
              <div className="mobile-logo text-center mb-6 lg:hidden block"></div>
              <div className="text-center 2xl:mb-2 mb-1">
                <h4 className="font-medium mb-4">Email OTP Verification</h4>
                <div className="text-danger-400 dark:text-danger-400 text-base">
                  OTP valid only for 5 mins.
                </div>
              </div>
              <div className="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2 bg-slate-100 dark:bg-slate-600 rounded py-3 mb-4 mt-10">
                Enter the OTP received to your email!
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex justify-center gap-3 mb-6">
                  <input
                    name="otp1"
                    type="text"
                    autoComplete="off"
                    className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    value={formData.otp1}
                    onChange={(e) => handleChange("otp1", e)}
                    tabIndex="1"
                    maxLength="1"
                    onKeyUp={(e) => inputfocus(e)}
                  />
                  <input
                    name="otp2"
                    type="text"
                    autoComplete="off"
                    className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    value={formData.otp2}
                    onChange={(e) => handleChange("otp2", e)}
                    tabIndex="2"
                    maxLength="1"
                    onKeyUp={(e) => inputfocus(e)}
                  />
                  <input
                    name="otp3"
                    type="text"
                    autoComplete="off"
                    className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    value={formData.otp3}
                    onChange={(e) => handleChange("otp3", e)}
                    tabIndex="3"
                    maxLength="1"
                    onKeyUp={(e) => inputfocus(e)}
                  />
                  <input
                    name="otp4"
                    type="text"
                    autoComplete="off"
                    className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    value={formData.otp4}
                    onChange={(e) => handleChange("otp4", e)}
                    tabIndex="4"
                    maxLength="1"
                    onKeyUp={(e) => inputfocus(e)}
                  />
                </div>
                <button
                  className="btn btn-dark block w-full text-center"
                  type="submit"
                >
                  Verify OTP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerify;
