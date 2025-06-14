import React, { useState } from "react";
import { BlueSignal } from "../../icons";
import Input from "../../components/form/input/InputField";
import { useTranslation } from "react-i18next";
import Button from "../../components/ui/button/Button";

export const CustomerDepositInfoDialog = ({onVerify,onClose}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    accountNumber: '',
    verificationCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation if needed
    onVerify();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto flex flex-col">
        <div className="flex flex-row items-center gap-3 bg-[#F4F6F8] px-3 py-4 rounded-lg">
          <BlueSignal className="h-5 w-5" />
          <span className="font-semibold">{t('CUSTOMER.ACCOUNT_INFORMATION')}</span>
        </div>

        <div className="flex flex-col gap-8 mt-7">
          <div className="relative">
            <input
              type="text"
              class="rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3"
              placeholder="name"
            />
            <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px]">
              {t("CUSTOMER.CUSTOMER_NAME")}
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              class="rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3"
              placeholder="name"
            />
            <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px]">
              {t("CUSTOMER.ACCOUNT_NUMBER")}
            </label>
          </div>

          <div className="flex justify-between gap-3 mt-6 bg-[#F2FAFF] rounded-lg p-3">
                <Button
              type="button"
              onClick={onClose}
              className="bg-[#fff] text-[#000] w-[150px] py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t("COMMON.BACK")}
            </Button>
            <Button
                onClick={handleSubmit}
                type="submit"
                className="bg-[#00AB55] w-[150px] px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t("COMMON.CONFIRM_AND_VIEW")}
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
