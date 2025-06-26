import { useTranslation } from "react-i18next";
import Button from "../../../components/ui/button/Button";
import { BlueSignal, CalenderIcon } from "../../../icons";
import SuccessAlert from "./sweetalert/SuccessAlert";
import { useState } from "react";
import FloatingInput from "../../../components/input/FloatingInput";
import FloatingDropdown from "../../../components/input/FloatingDropdown";
import FloatingTextarea from "../../../components/input/FloatingTextarea";

export const AddEditSystemAccount = ({ isOpen, onClose, isEditing, isShowing }) => {
  const { t } = useTranslation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = () => {
    setShowSuccess(true);
    setShowForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {setShowForm && (
        <div className="bg-white rounded-xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col">
          <div className="flex flex-row items-center gap-2 p-3 bg-[#F4F6F8] rounded-lg mb-3">
            <BlueSignal className="w-6 h-6" />
            <span className="font-semibold text-[18px] leading-8">
              {t("SYSTEM_ACCOUNT.ADD_NEW_ACCOUNT")}
            </span>
          </div>
          {/* Add your form fields here */}
          <div className="col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
            {/* branch */}
            <div className="col-span-12 md:col-span-6 relative">
              <FloatingDropdown
                label={t("SYSTEM_ACCOUNT.BRANCH")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>

            {/* ACCOUNT Type */}
            <div className="col-span-12 md:col-span-6 relative">
              <FloatingDropdown
                label={t("SYSTEM_ACCOUNT.ACCOUNT_TYPE")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>
            
          

            {/* CURRENCY */}
            <div className="col-span-12 md:col-span-6 relative">
              <FloatingDropdown
                label={t("SYSTEM_ACCOUNT.CURRENCY")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>


            {/* ACCOUNT NAME */}
            <div className="col-span-12 md:col-span-6 relative">
              <FloatingInput
                label={t("SYSTEM_ACCOUNT.ACCOUNT_NAME")}
                
              />
            </div>

        
            
           

           

            
          </div>

          <div className="flex justify-end gap-3 pt-4 bg-[#F2FAFF] rounded-lg p-3">
            <Button
              type="button"
              onClick={onClose}
              className="bg-[#fff] text-[#000] w-[150px] py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t("COMMON.BACK")}
            </Button>
            {!isShowing && (
              <Button
                onClick={() => handleSubmit()}
                type="submit"
                className="bg-[#00AB55] w-[150px] px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t("COMMON.CONFIRM_AND_SAVE")}
              </Button>
            )}
            {isShowing && (
              <Button
                onClick={() => handleSubmit()}
                type="submit"
                className="bg-[#1E00A3] w-[150px] px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t("CUSTOMER.EDIT_CUSTOMER")}
              </Button>
            )}
            {(isEditing || isShowing) && (
              <Button
                onClick={() => handleSubmit()}
                type="submit"
                className="bg-[#FF4842] w-[150px] px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t("CUSTOMER.DELETE_CUSTOMER")}
              </Button>
            )}
          </div>
        </div>
      )}
      {showSuccess && (
        <SuccessAlert
          onClose={() => {
            setShowSuccess(false);
            onClose();
          }}
        />
      )}
    </div>
  );
};
