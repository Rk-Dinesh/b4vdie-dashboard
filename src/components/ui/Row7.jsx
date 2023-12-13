import { useState } from "react";
import Icon from "./Icon";

const Row7 = ({ data, className = "space-y-5" }) => {
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
                    <span>Medical History</span>
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
                                <p style={{ width: '180px', fontWeight: 'bold', fontSize: '16px' }}>Arthritis </p>
                                <p style={{ width: '15px', marginRight: '10px' }}>:</p>
                                <p style={{ width: '120px', fontWeight: 'bold' }}>Osteoarthritis </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Osteoarthritis}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Rheumatoid Arthritis</p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Rheumatoid_Arthritis}</p>
                            </div>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '185px', fontWeight: 'bold', fontSize: '16px' }}>Epilepsy</p>
                                <p style={{ width: '600px', marginRight: '10px' }}>: {rowData.Tmedi}</p>
                            </div>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '179px', fontWeight: 'bold', fontSize: '16px' }}>Thyroid Conditions </p>
                                <p style={{ width: '15px', marginRight: '10px' }}>:</p>
                                <p style={{ width: '120px', fontWeight: 'bold' }}>Hyper-active  </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Hyper_active}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Hypo-active</p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Hypo_active}</p>
                            </div>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '180px', fontWeight: 'bold', fontSize: '16px' }}>Cardiac Problems </p>
                                <p style={{ width: '15px', marginRight: '10px' }}>:</p>
                                <p style={{ width: '120px', fontWeight: 'bold' }}>Heart Attack  </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Heart_Attack}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>High Blood Pressure </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.HBP}</p>
                                
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '210px', fontWeight: 'bold', marginLeft: '205px'  }}>Low Blood Pressure </p>
                                <p style={{ width: '90px', marginRight: '10px' }}>: {rowData.LBP}</p>
                                <p style={{ width: '140px', fontWeight: 'bold'}}>Other </p>
                                <p style={{ width: '500px', marginRight: '10px' }}>: {rowData.other}</p>
                            </div>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '200px', fontWeight: 'bold', fontSize: '16px' }}>Liver Disease </p>
                                <p style={{ width: '15px', marginRight: '10px' }}>:</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Hepatitis B   </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Hepatitis_B}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Hepatitis c  </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Hepatitis_C}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Stroke(s)  </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Stroke}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '150px', fontWeight: 'bold', marginLeft: '225px' }}>PastBloodTransfusion </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Past_Blood}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>HIV/AIDS? </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.HIV}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Kidney Conditions </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Kidney}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '150px', fontWeight: 'bold', marginLeft: '225px' }}>Gastric Problems </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Gastric}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Indigestion/Reflux  </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Indigestion}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Stomach Ulcers  </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Ulcers}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '150px', fontWeight: 'bold', marginLeft: '225px' }}>Venous Conditions </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Venous}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>DVT (Thrombosis)   </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.DVT}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Varicose Veins  </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Varicose}</p>
                            </div>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '200px', fontWeight: 'bold', fontSize: '16px' }}>Other joint concerns</p>
                                <p style={{ width: '600px', marginRight: '10px' }}>: {rowData.joint}</p>
                            </div>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '200px', fontWeight: 'bold', fontSize: '16px' }}>Lung Conditions </p>
                                <p style={{ width: '15px', marginRight: '10px' }}>:</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Asthma   </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Asthma}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Emphysema   </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Emphysema}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Sleep Apnoea   </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Sleep_Apnoea}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '150px', fontWeight: 'bold', marginLeft: '225px' }}>Pulmonary Embolus  </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Pulmonary}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Are you a smoker </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.smoker}</p>
                            </div>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '200px', fontWeight: 'bold', fontSize: '16px' }}>Cancer </p>
                                <p style={{ width: '15px', marginRight: '10px' }}>:</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Breast    </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Breast}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Mastectomy    </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Mastectomy}</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Shoulder region   </p>
                                <p style={{ width: '50px', marginRight: '10px' }}>: {rowData.Shoulder}</p>
                            </div>

                            <br />

                            <div style={{ display: 'flex' }}>
                                <p style={{ width: '200px', fontWeight: 'bold', fontSize: '16px' }}>Diabetes </p>
                                <p style={{ width: '15px', marginRight: '10px' }}>:</p>
                                <p style={{ width: '150px', fontWeight: 'bold' }}>Management </p>
                                <p style={{ width: '60px', marginRight: '10px' }}>: {rowData.Management}</p>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Row7;


