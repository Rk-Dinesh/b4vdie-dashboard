import React, { useState } from "react";
import axios from "axios";
import Card from "../../components/ui/Card";
import { API } from "../../host";

function AdminForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    role: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/admin`, formData)
      .then((response) => {
       // console.log(response.data);
        history.back();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <Card title="Admin">
            <div className="bg-transparent">
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fname" className="capitalize form-label">
                    <b>FirstName </b>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    className=" form-control py-2 "
                    id="fname"
                    placeholder="First Name"
                    value={formData.fname}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="lname" className="capitalize form-label">
                    <b>LastName </b>
                  </label>
                  <input
                    type="text"
                    name="lname"
                    className=" form-control py-2 "
                    id="lname"
                    placeholder="Last Name"
                    value={formData.lname}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="capitalize form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    name="email"
                    className=" form-control py-2 "
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="capitalize form-label">
                    <b>Phone </b>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className=" form-control py-2"
                    id="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="role" className="capitalize form-label">
                    <b>Role</b>
                  </label>
                  <select
                    name="role"
                    className="form-select py-2"
                    id="role"

                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Role</option>
                    <option value="superadmin">Super Admin</option>
                    <option value="admin">Admin</option>
                   
                  </select>
                </div>

                <div>
                  <label htmlFor="password" className="capitalize form-label ">
                    <b>Password </b>
                  </label>
                  <input
                    type="text"
                    name="password"
                    className=" form-control py-2"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="ltr:text-right rtl:text-left">
                  <button className="btn btn-dark text-center" type="submit">
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AdminForm;
