import { useState } from "react";
import Icon from "./Icon";

const Row2 = ({ data, className = "space-y-5" }) => {
  const [active, setActive] = useState(false);

  const toggleAccordion = () => {
    setActive(!active);
  };

  const rowData = Array.isArray(data) && data.length > 0 ? data[0] : null;

  return (
    <div className={className}>
      <div className="accordion shadow-base dark:shadow-none rounded-md">
        <div
          className={`flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 ${active
            ? "bg-slate-50 dark:bg-slate-700 dark:bg-opacity-60 rounded-t-md "
            : "bg-white dark:bg-slate-700  rounded-md"
            }`}
          onClick={toggleAccordion}
        >
          <span>Insurance & Compensation Details</span>
          <span
            className={`text-slate-900 dark:text-white text-[22px] transition-all duration-300 h-5 ${active ? "rotate-180 transform" : ""
              }`}
          >
            <Icon icon="heroicons-outline:chevron-down" />
          </span>
        </div>

        {active && rowData && (
          <div
            className={`dark:border dark:border-slate-700 dark:border-t-0 text-sm text-slate-600 font-normal bg-white dark-bg-slate-900 dark:text-slate-300 rounded-b-md`}
          >
            <div className="px-8 py-4">
              <p style={{ fontWeight: 'bold', fontSize: '17px' }}>Worker's Compensation</p>

              <br />

              <div style={{ display: 'flex' }}>
                <p style={{ width: '250px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Claim Number</p>
                <p style={{ width: '200px', marginRight: '10px' }}>: {rowData.claimN}</p>
                <p style={{ fontWeight: 'bold' }}>Date of Injury</p><p>: {rowData.DOI}</p>
              </div>

              <div style={{ display: 'flex' }}>
                <p style={{ width: '250px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Your workplace/ company name</p>
                <p style={{ width: '650px', marginRight: '10px' }}>: {rowData.Yw_cn}</p>
              </div>

              <div style={{ display: 'flex' }}>
                <p style={{ width: '250px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Address of your workplace</p>
                <p style={{ width: '650px', marginRight: '10px' }}>: {rowData.Addwp}</p>
              </div>

              <div style={{ display: 'flex' }}>
                <p style={{ width: '250px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Contact person at your workplace</p>
                <p style={{ width: '200px', marginRight: '10px' }}>: {rowData.cpwp}</p>
                <p style={{ fontWeight: 'bold' }}>Surname</p>
                <p style={{ width: '200px', marginRight: '10px' }}>: {rowData.CPsur}</p>
                <p style={{ fontWeight: 'bold' }}>Phone</p>
                <p style={{ width: '100px', marginRight: '10px' }}>: {rowData.CPph}</p>
              </div>

              <br />

              <p style={{ fontWeight: 'bold', fontSize: '17px' }}>Workcover Insurance</p>

              <br />

              <div style={{ display: 'flex' }}>
                <p style={{ width: '250px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Insurance company name</p>
                <p style={{ width: '650px', marginRight: '10px' }}>: {rowData.InCP}</p>
              </div>

              <div style={{ display: 'flex' }}>
                <p style={{ width: '250px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Insurance company address</p>
                <p style={{ width: '650px', marginRight: '10px' }}>: {rowData.InCA}</p>
              </div>

              <div style={{ display: 'flex' }}>
                <p style={{ width: '250px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Insurance company Case manager</p>
                <p style={{ width: '200px', marginRight: '10px' }}>: {rowData.InCCM}</p>
                <p style={{ fontWeight: 'bold' }}>Surname</p>
                <p style={{ width: '200px', marginRight: '10px' }}>: {rowData.InCSur}</p>
                <p style={{ fontWeight: 'bold' }}>Phone</p>
                <p style={{ width: '100px', marginRight: '10px' }}>: {rowData.InCPh}</p>
              </div>

              <div style={{ display: 'flex' }}>
                <p style={{ width: '250px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Case manager's email address</p>
                <p style={{ width: '600px', marginRight: '10px' }}>: {rowData.CmEA}</p>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Row2;


