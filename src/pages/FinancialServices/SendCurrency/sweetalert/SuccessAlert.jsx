import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/ui/button/Button"

const SuccessAlert = ({ onClose }) => {
    const { t } = useTranslation();
    
    // Data array based on the image
    const transactionData = [
        { label: "Tracking Number", value: "4548452" },
        { label: "ID Type", value: "Passport" },
        { label: "ID Number", value: "091254562155" },
        { label: "Deposit Date", value: "1404/07/01" },
        { label: "Recipient Name", value: "رضا يخشى" },
        { label: "Recipient Phone Number", value: "+1%7٪٪٪٪٪٪٪" },
        { label: "Destination Branch", value: "زخار" },
        { label: "Commission Deduction", value: "yes (7%)" },
        { label: "Amount Sent", value: "$155" },
        { label: "Amount Received", value: "$144.15" },
        { label: "Sender Name", value: "احمد صراف" },
        { label: "Sender Phone Number", value: "+165895123" },
        { label: "Origin Branch", value: "Branch name" },
        { label: "Amount Deposited", value: "10.379 AFN" },
        { label: "Commission", value: "One-way" }
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl p-3 w-[90%] max-w-[380px] text-center shadow-lg">
                {/* Success Message */}
                <div className="p-2 flex flex-row items-center justify-center">
                    <h2 className="text-green-600 font-bold text-[14px] mb-2">
                        {t('SEND_CURRENCY.INFORMATION_SUCCESSFULLY_REGISTERED')}
                    </h2>
                    <img
                        src="/images/sarafi/success_stamp_icon.png"
                        alt="Success"
                        className="w-[50px] h-[50px]"
                    />
                </div>

                {/* content */}
                <div className="p-3 space-y-2">
                    {/* First 10 items with background */}
                    <div className="bg-[#F2FAFF] p-2 rounded-lg mb-3">
                        {transactionData.slice(0, 10).map((item, index) => (
                            <div key={index} className="flex flex-row justify-between items-center pb-2">
                                <span className="text-gray-600">{item.label}</span>
                                <span className="font-medium">{item.value}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Remaining items without background */}
                    {transactionData.slice(10).map((item, index) => (
                        <div key={index + 10} className="flex flex-row justify-between items-center">
                            <span className="text-gray-600">{item.label}</span>
                            <span className="font-medium">{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* button section */}
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center">
                    <Button className="bg-[#1E00A3] text-white w-full m-2 font-semibold">{t('COMMON.SAVE_AS_PDF')}</Button>
                    <Button className="text-black border border-[#1E00A3] w-full m-2 font-semibold">{t('COMMON.SAVE_AS_IMAGE')}</Button>
                  </div>
                  <div className="m-2">
                    <Button onClick={onClose} className="border border-gray-400 w-full text-black font-semibold">{t('COMMON.VIEW_LIST')}</Button>
                  </div>
                </div>
                
            </div>
        </div>
    );
};

export default SuccessAlert;