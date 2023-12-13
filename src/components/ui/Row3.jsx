import { useState } from "react";
import Icon from "./Icon";

const Row3 = ({ data, className = "space-y-5" }) => {
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
                    <span>Patient Decalaration</span>
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
                                <p style={{ marginRight: '10px', fontWeight: 'bold' }}>{rowData.Info_accuracy} ;</p>
                                <p >The information I have provided is accurate and complete, to the best of my knowledge.</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ marginRight: '10px', fontWeight: 'bold' }}>{rowData.perRelease} ;</p>
                                <p >I give permission to release medical details to my doctor, solicitor, or insurance company.</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ marginRight: '10px', fontWeight: 'bold' }}>{rowData.perXray} ;</p>
                                <p >I give permission for x-rays and imaging may to be shared with our online community for educational purposes.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Row3;


