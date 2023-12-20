import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate, useLocation} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../host";


function ResetPassword() {
  const location = useLocation();
  const email = location.state ? location.state.email : "";

  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onUpdate = async (e) => {
    e.preventDefault();

    if (newPassword === "" || confirmPassword === "") {
      toast.error("All fields are required");
    } else if (newPassword === confirmPassword) {
      try {
        const response = await axios.put(`${API}/updatepassword/${email}`, {
          password: newPassword,
        });
        if (response.status === 200) {
          toast.success("Password Updated successfully");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("New & confirm password must match");
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
                <h4 className="font-medium mb-4">Change Password</h4>
              </div>
              <form onSubmit={onUpdate} className="space-y-4 ">
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="newPassword">
                    New Password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="New Password"
                    name="newPassword"
                    className="form-control"
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    required
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confrim Password"
                    name="confirmPassword"
                    className="form-control"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                  />
                </div>

                <button
                  className="btn btn-dark block w-full text-center"
                  type="submit"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
