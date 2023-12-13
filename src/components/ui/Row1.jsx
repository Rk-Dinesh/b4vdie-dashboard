import React, { useState } from "react";
import Icon from "./Icon";

const Row1 = ({ data, className = "space-y-5" }) => {
    const [active, setActive] = useState(false);

    const toggleAccordion = () => {
        setActive(!active);
    };

    // Check if data is an array and get the first item (assuming there's only one item in the array)
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
                    <span>Doctor Details</span>
                    <span
                        className={`text-slate-900 dark:text-white text-[22px] transition-all duration-300 h-5 ${active ? "rotate-180 transform" : ""
                            }`}
                    >
                        <Icon icon="heroicons-outline:chevron-down" />
                    </span>
                </div>

                {active && rowData && ( // Check if rowData is defined
                    <div
                        className={`dark:border dark:border-slate-700 dark-border-t-0 text-sm text-slate-600 font-normal bg-white dark-bg-slate-900 dark:text-slate-300 rounded-b-md`}
                    >
                        <div className="px-8 py-4">

                            <p style={{ fontWeight: 'bold', fontSize: '17px' }}>Referred Doctor's</p>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Referring doctor's name</p>
                                <p style={{ width: '300px', marginRight: '10px' }}>: {rowData.ReferDN}</p>
                                <p style={{ fontWeight: 'bold' }}>Phone</p><p>: {rowData.RDnphone}</p>
                            </div>

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Referring doctor's clinic/address</p>
                                <p>: {rowData.ReferDC}</p>
                            </div>

                            <br />

                            <p style={{ fontWeight: 'bold', fontSize: '17px' }}>General Doctor's</p>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Regular GP's name</p>
                                <p style={{ width: '300px', marginRight: '10px' }}>: {rowData.RGPn}</p>
                                <p style={{ fontWeight: 'bold' }}>Phone</p><p>: {rowData.RGPnphone}</p>
                            </div>

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Regular GP's clinic/address</p>
                                <p>: {rowData.RGPc}</p>
                            </div>

                            <br />

                            <p style={{ fontWeight: 'bold', fontSize: '17px' }}>Physiotherapist's</p>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Physiotherapist's name</p>
                                <p style={{ width: '300px', marginRight: '10px' }}>: {rowData.physioN}</p>
                                <p style={{ fontWeight: 'bold' }}>Phone</p><p>: {rowData.physioP}</p>
                            </div>

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Physiotherapist's clinic/address</p>
                                <p>: {rowData.physioC}</p>
                            </div>

                            <br />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Row1;


