import { useState } from "react";
import Icon from "./Icon";

const Row4 = ({ data, className = "space-y-5" }) => {
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
                    <span>Medications & Allergies</span>
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
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Do you regularly take blond thinners ?</p>
                                <p style={{ width: '600px', marginRight: '10px' }}>: {rowData.blood_thinners}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Do you regularly take herbal medications ?</p>
                                <p style={{ width: '600px', marginRight: '10px' }}>: {rowData.herbal_medication}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Do you regularly take pain medications ?</p>
                                <p style={{ width: '600px', marginRight: '10px' }}>: {rowData.pain_medication}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Do you drink alcohol ?</p>
                                <p style={{ width: '200px', marginRight: '10px' }}>: {rowData.drink_alcohol}</p>
                                <p style={{ fontWeight: 'bold' }}>How many drinks per day ?</p><p>: {rowData.drinks_per_day}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>Do you have any allergies to drugs ?</p>
                                <p style={{ width: '600px', marginRight: '10px' }}>: {rowData.allergies_to_drugs}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>What allergic reaction to drugs you have ?</p>
                                <p style={{ width: '600px', marginRight: '10px' }}>: {rowData.allergic_reaction}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '300px', textAlign: 'left', marginRight: '10px', fontWeight: 'bold' }}>What else (apart from drugs) are you allergic to, e.g. latex, food, dust mites, cats, dogs ?</p>
                                <p style={{ width: '600px', marginRight: '10px' }}>: {rowData.what_else}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Row4;


