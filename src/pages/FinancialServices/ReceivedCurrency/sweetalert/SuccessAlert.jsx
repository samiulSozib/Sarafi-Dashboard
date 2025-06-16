import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/ui/button/Button";
import { useNavigate } from "react-router";

const SuccessAlert = () => {
  const { t } = useTranslation();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const navigate=useNavigate()
  const handleConfirm = () => {
    // Close the first dialog and show the success dialog
    setShowSuccessDialog(true);
  };

  const handleFinalConfirm = () => {
    // Close all dialogs
    setShowSuccessDialog(false);
    navigate(-1)
  };

  const onClose=()=>{
    navigate(-1)
  }

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
    { label: "Commission", value: "One-way" },
  ];

  return (
    <>
    {!showSuccessDialog &&(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-3 w-[90%] max-w-[380px] text-center shadow-lg">
        {/* Success Message */}
        {/* <div className="p-2 flex flex-row items-center justify-center">
          <h2 className="text-green-600 font-bold text-[14px] mb-2">
            {t("SEND_CURRENCY.INFORMATION_SUCCESSFULLY_REGISTERED")}
          </h2>
          <img
            src="/images/sarafi/success_stamp_icon.png"
            alt="Success"
            className="w-[50px] h-[50px]"
          />
        </div> */}

        {/* content */}
        <div className="p-3 space-y-2">
          {/* First 10 items with background */}
          <div className="bg-[#F2FAFF] p-2 rounded-lg mb-3">
            {transactionData.slice(0, 10).map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center pb-2"
              >
                <span className="text-gray-600">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Remaining items without background */}
          {transactionData.slice(10).map((item, index) => (
            <div
              key={index + 10}
              className="flex flex-row justify-between items-center"
            >
              <span className="text-gray-600">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        {/* button section */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <Button onClick={handleConfirm} className="bg-[#00AB55] text-white w-full m-2 font-semibold">
              {t("COMMON.CONFIRM_RECEIPT")}
            </Button>
            <Button className="text-white border bg-[#1E00A3] w-full m-2 font-semibold">
              {t("COMMON.PRINT_INFORMATION")}
            </Button>
          </div>
          <div className="m-2">
            <Button
              onClick={onClose}
              className="border border-gray-400 w-full text-black font-semibold"
            >
              {t("COMMON.VIEW_LIST")}
            </Button>
          </div>
        </div>
      </div>
    </div>
    )}

    {/* Success Confirmation Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 w-[70%] max-w-[350px] text-center shadow-lg">
            {/* Success Message */}
            <div className="p-3">
              <h2 className="text-green-600 font-bold text-[14px] mb-2">
                {t("RECEIVED_CURRENCY.REMITTANCE_RECEIPT_SUCCESSFULLY_CONFIRMED")}
              </h2>
            </div>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/sarafi/confirm_icon.png"
                alt="Success"
                className="w-[150px] h-[150px]"
              />
            </div>

            {/* OK Button */}
            <button
              onClick={handleFinalConfirm}
              className="w-full bg-[#fff] text-black border shadow-md px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
            >
              {t("COMMON.BACK")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessAlert;
