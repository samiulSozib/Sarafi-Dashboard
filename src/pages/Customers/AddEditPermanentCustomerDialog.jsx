import { useTranslation } from "react-i18next";
import Button from "../../components/ui/button/Button";
import { BlueSignal } from "../../icons";
import SuccessAlert from "./sweetalert/SuccessAlert";
import { useState } from "react";

export const AddEditPermanentCustomerDialog = ({
  isOpen,
  onClose,
  isEditing,
  isShowing,
}) => {
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
      {showForm && (
        <div className="bg-white rounded-xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col">
          <div className="flex flex-row items-center gap-2 p-3 bg-[#F4F6F8] rounded-lg mb-3">
            <BlueSignal className="w-6 h-6" />
            <span className="font-semibold text-[18px] leading-8">{t("CUSTOMER.NEW_CUSTOMER_INFORMATION")}</span>
            
          </div>
          {/* Add your form fields here */}
          <div className="col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
            {/* full name */}
            <div className="col-span-12 md:col-span-4 relative">
              <input
                type="text"
                className="rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3"
                placeholder="name"
              />
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px]">
                {t("CUSTOMER.FULL_NAME")}
              </label>
            </div>
            {/* father name */}
            <div className="col-span-12 md:col-span-4 relative">
              <input
                type="text"
                className="rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3"
                placeholder="name"
              />
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px]">
                {t("CUSTOMER.FATHER_NAME")}
              </label>
            </div>
            {/* gender */}
            <div className="col-span-12 md:col-span-4 relative">
              <select
                className="rounded-md border-gray-400 peer w-full border-b py-3 appearance-none bg-white"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  {t("COMMON.SELECT")}
                </option>
                <option value="male">{t("CUSTOMER.MALE")}</option>
                <option value="female">{t("CUSTOMER.FEMALE")}</option>
                <option value="other">{t("CUSTOMER.OTHERS")}</option>
              </select>
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] text-gray-500 duration-100 ease-linear peer-[:not([value=''])]:-translate-y-3 peer-[:not([value=''])]:text-[12px] peer-focus:-translate-y-3 peer-focus:text-[12px]">
                {t("CUSTOMER.GENDER")}
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {/* date of birth */}
            <div className="col-span-12 md:col-span-4 relative">
              <input
                type="date"
                className="rounded-md border-gray-400 peer w-full border-b py-3 pr-10 appearance-none bg-white"
                placeholder=" "
                required
              />
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] text-gray-500 duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:text-[12px] pointer-events-none">
                {t("CUSTOMER.DATE_OF_BIRTH")}
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            {/* country of birth */}
            <div className="col-span-12 md:col-span-4 relative">
              <select
                className="rounded-md border-gray-400 peer w-full border-b py-3 appearance-none bg-white"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  {t("COMMON.SELECT")}
                </option>
                <option value="">Bangladesh</option>
                <option value="">Afghanistan</option>
              </select>
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] text-gray-500 duration-100 ease-linear peer-[:not([value=''])]:-translate-y-3 peer-[:not([value=''])]:text-[12px] peer-focus:-translate-y-3 peer-focus:text-[12px]">
                {t("CUSTOMER.COUNTRY_OF_BIRTH")}
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {/* country of residence */}
            <div className="col-span-12 md:col-span-4 relative">
              <select
                className="rounded-md border-gray-400 peer w-full border-b py-3 appearance-none bg-white"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  {t("COMMON.SELECT")}
                </option>
                <option value="">Bangladesh</option>
                <option value="">Afghanistan</option>
              </select>
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] text-gray-500 duration-100 ease-linear peer-[:not([value=''])]:-translate-y-3 peer-[:not([value=''])]:text-[12px] peer-focus:-translate-y-3 peer-focus:text-[12px]">
                {t("CUSTOMER.COUNTRY_OF_RESIDENCE")}
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {/* identity document type */}
            <div className="col-span-12 md:col-span-4 relative">
              <select
                className="rounded-md border-gray-400 peer w-full border-b py-3 appearance-none bg-white"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  {t("COMMON.SELECT")}
                </option>
                <option value="">Type 1</option>
                <option value="">Type 2</option>
              </select>
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] text-gray-500 duration-100 ease-linear peer-[:not([value=''])]:-translate-y-3 peer-[:not([value=''])]:text-[12px] peer-focus:-translate-y-3 peer-focus:text-[12px]">
                {t("CUSTOMER.IDENTITY_DOCUMENT_TYPE")}
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {/* identity document number */}
            <div className="col-span-12 md:col-span-4 relative">
              <input
                type="text"
                className="rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3"
                placeholder="name"
              />
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px]">
                {t("CUSTOMER.IDENTITY_DOCUMENT_NUMBER")}
              </label>
            </div>
            {/* phone number */}
            <div className="col-span-12 md:col-span-4 relative">
              <input
                type="text"
                className="rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3"
                placeholder="name"
              />
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px]">
                {t("CUSTOMER.PHONE_NUMBER")}
              </label>
            </div>
            {/* address  */}
            <div className="col-span-12 md:col-span-8 relative">
              <textarea
                type="text"
                className="rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3"
                placeholder="name"
              />
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px]">
                {t("CUSTOMER.ADDRESS")}
              </label>
            </div>
            {/* email */}
            <div className="col-span-12 md:col-span-4 relative">
              <input
                type="text"
                className="rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3"
                placeholder="name"
              />
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px]">
                {t("CUSTOMER.EMAIL")}
              </label>
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
          accountNumber="5454"
          onClose={() => {
            setShowSuccess(false);
            onClose();
          }}
        />
      )}
    </div>
  );
};
