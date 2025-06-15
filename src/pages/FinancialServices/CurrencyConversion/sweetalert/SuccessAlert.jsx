import React from "react";
import { useTranslation } from "react-i18next";

const SuccessAlert = ({ onClose }) => {
    const {t}=useTranslation()
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 w-[70%] max-w-[350px] text-center shadow-lg">
        {/* Success Message */}
        <div className="p-3">
          <h2 className="text-green-600 font-bold text-[14px] mb-2">
            {t('COMMON.INFORMATION_WAS_SUCCESSFULLY_RECORDED')}
          </h2>
          
        </div>

        {/* Avatar with checkmark */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/sarafi/success_stamp_icon.png"
            alt="Success"
            className="w-[250px] h-[250px]"
          />
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
        >
          {t('COMMON.VIEW_LIST')}
        </button>
      </div>
    </div>
  );
};

export default SuccessAlert;
