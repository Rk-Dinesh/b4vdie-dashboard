import { useState } from "react";
import Icon from "./Icon";

const Row5 = ({ data, className = "space-y-5" }) => {
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
                    <span>MRI Saftey Questions</span>
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
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Do you suffer claustrophobia ? </p>
                                <p style={{ width: '200px', marginRight: '10px' }}>: {rowData.claustrophobia}</p>
                                <p style={{ width: '200px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Do you have a pacemaker ?</p>
                                <p >: {rowData.pacemaker}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '600px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Do you have any metal in the body, e.g., pins, plates, rods, screws, nails, clips ?</p>
                                <p style={{ width: '200px', marginRight: '10px' }}>: {rowData.any_metal_in_body}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '600px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Have you had any head, heart, eye, or ear surgery ?</p>
                                <p style={{ width: '200px', marginRight: '10px' }}>: {rowData.surgery}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Row5;


