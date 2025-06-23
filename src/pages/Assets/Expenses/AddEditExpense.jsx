import { useTranslation } from "react-i18next";
import Button from "../../../components/ui/button/Button";
import { BlueSignal, CalenderIcon } from "../../../icons";
import SuccessAlert from "./sweetalert/SuccessAlert";
import { useState } from "react";
import FloatingInput from "../../../components/input/FloatingInput";
import FloatingDropdown from "../../../components/input/FloatingDropdown";
import FloatingTextarea from "../../../components/input/FloatingTextarea";
import Checkbox from "../../../components/form/input/Checkbox";

export const AddEditExpense = ({ isOpen, onClose, isEditing, isShowing }) => {
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
        <div className="bg-white rounded-xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col">
          <div className="flex flex-row items-center gap-2 p-3 bg-[#F4F6F8] rounded-lg mb-3">
            <BlueSignal className="w-6 h-6" />
            <span className="font-semibold text-[18px] leading-8">
              {t("BRANCH_CAPITAL.ADD_BRANCH_CAPITAL")}
            </span>
          </div>
          {/* Add your form fields here */}
          <div className="col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
            {/* category */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EXPENSES.CATEGORY")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>

            {/* AMOUNT */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput label={t("EXPENSES.PURCHASE_AMOUNT")} />
            </div>

            {/* CURRENCY */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EXPENSES.CURRENCY")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>

            {/* paymentMethod */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EXPENSES.PAYMENT_METHOD")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>

            {/* ASSET_TYPE */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EXPENSES.ASSET_TYPE")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>

            {/* DATE */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput
                label={t("EXPENSES.DATE")}
                rightIcon={<CalenderIcon />}
              />
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col gap-3">
              <Checkbox label={t('EXPENSES.ASSET_DESCRIPTION')} checked={true} className="bg-green-300" onChange={()=>{}}/>
                <FloatingTextarea label={t('EXPENSES.DESCRIPTION')} />
            </div>

            <div className="col-span-12 md:col-span-6 relative flex flex-row justify-end gap-4">
              <div className="w-full max-w-md p-6 border-2 border-dashed border-gray-300 rounded-lg bg-white">
                {/* Hidden file input */}
                <input
                  type="file"
                  id="document-upload"
                  accept=".jpeg,.jpg,.png,.pdf,.mp4"
                  className="hidden"
                />

                {/* Clickable upload area */}
                <label
                  htmlFor="document-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  {/* Upload icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-400 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>

                  {/* Main title */}
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {t("COMMON.UPLOAD_DOCUMENTS")}
                  </h3>

                  {/* Format information */}
                  <p className="text-sm text-gray-500 mb-4 text-center">
                    {t("COMMON.UPLOAD_FORMAT_INFO")}
                  </p>

                  {/* Select file button */}
                  <div className="px-4 py-2 text-black border-2 font-semibold rounded-md transition-colors">
                    {t("COMMON.SELECT_FILE")}
                  </div>
                </label>
              </div>
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
