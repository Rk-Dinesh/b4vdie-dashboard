import { useState } from "react";
import Icon from "./Icon";

const Row8 = ({ data, className = "space-y-5" }) => {
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
                    <span>Body Mass Index</span>
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
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '40px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Age</p>
                                <p style={{ width: '60px', marginRight: '10px' }}>: {rowData.age}</p>
                                <p style={{ width: '50px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Gender</p>
                                <p style={{ width: '60px', marginRight: '10px' }}>: {rowData.gender}</p>
                                <p style={{ width: '40px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Height</p>
                                <p style={{ width: '60px', marginRight: '10px' }}>: {rowData.height}</p>
                                <p style={{ width: '40px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Weight</p>
                                <p style={{ width: '60px', marginRight: '10px' }}>: {rowData.Weight}</p>
                                <p style={{ width: '40px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>BMI</p>
                                <p style={{ width: '150px', marginRight: '10px' }}>: {rowData.bmi}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Row8;


