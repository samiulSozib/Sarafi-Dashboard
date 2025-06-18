import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DeleteAlert = ({ onClose }) => {
  const { t } = useTranslation();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleDelete = () => {
    // Close the first dialog and show the success dialog
    setShowSuccessDialog(true);
  };

  const handleFinalConfirm = () => {
    
    // Close all dialogs
    setShowSuccessDialog(false);
    onClose();
  };

  return (
    <>
      {/* Main Delete Confirmation Dialog - only show if success dialog isn't showing */}
      {!showSuccessDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 w-[70%] max-w-[350px] text-center shadow-lg">
            {/* Warning Message */}
            <div className="p-3">
              <h2 className="text-red-600 font-bold text-[14px] mb-2">
                {t("COMMON.ARE_YOU_SURE_YOU_WANT_TO_DELETE")}
              </h2>
            </div>

            {/* Delete Icon */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/sarafi/delete_trash_box.png"
                alt="Delete"
                className="w-[250px] h-[250px]"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-row justify-between gap-3">
              <button
                onClick={onClose}
                className="w-full bg-[#fff] text-black px-6 py-2 rounded-lg shadow hover:bg-gray-600 hover:text-white transition border"
              >
                {t("COMMON.BACK")}
              </button>
              <button
                onClick={handleDelete}
                className="w-full bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition"
              >
                {t("COMMON.YES_DELETE")}
              </button>
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
                {t("COMMON.THE_DELETION_IS_SUCCESSFUL")}
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

export default DeleteAlert;