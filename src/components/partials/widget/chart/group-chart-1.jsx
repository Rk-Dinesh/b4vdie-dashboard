import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const GroupChart1 = () => {

  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  // const fetchData = async () => {
  //   try {
  //     const doctorsResponse = await axios.get("http://localhost:3001/doctors");
  //     if (doctorsResponse.status === 200) {
  //       setDoctorCount(doctorsResponse.data.length);
  //     }

  //     const patientsResponse = await axios.get("http://localhost:3001/patients");
  //     if (patientsResponse.status === 200) {
  //       setPatientCount(patientsResponse.data.length);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className={`py-[18px] px-4 rounded-[6px] bg-[#FEE4DA] dark:bg-slate-900 `}>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="flex-1">
            <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">
              Total Admins
            </div>
            <div className="text-slate-900 dark:text-white text-lg font-medium">
              {/* {doctorCount} */} 0
            </div>
          </div>
        </div>
      </div>
      <div className={`py-[18px] px-4 rounded-[6px] bg-[#E7FDF1] dark:bg-slate-900 `}>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="flex-1">
            <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium">
              Total Users
            </div>
            <div className="text-slate-900 dark:text-white text-lg font-medium">
              {/* {patientCount} */} 0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupChart1;