import { useTranslation } from "react-i18next";
import Button from "../../../components/ui/button/Button";
import { BlueSignal, CalenderIcon } from "../../../icons";
import SuccessAlert from "./sweetalert/SuccessAlert";
import { useState } from "react";
import FloatingInput from "../../../components/input/FloatingInput";
import FloatingDropdown from "../../../components/input/FloatingDropdown";

export const AddEditEmployee = ({ isOpen, onClose, isEditing, isShowing }) => {
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
              {t("EMPLOYEES.ADD_NEW_EMPLOYEE")}
            </span>
          </div>
          {/* Add your form fields here */}
          <div className="col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
            {/* full name */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput label={t("EMPLOYEES.FULL_NAME")} />
            </div>

            {/* FATHER NAME */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput label={t("EMPLOYEES.FATHERS_NAME")} />
            </div>

            {/* DATE OF EMPLOYMENT */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput
                label={t("EMPLOYEES.DATE_OF_EMPLOYMENT")}
                rightIcon={<CalenderIcon />}
              />
            </div>

            {/* identity document type */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EMPLOYEES.ID_TYPE")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>
            {/* identity document number */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput
                label={t("EMPLOYEES.ID_NUMBER")}
                rightIcon={<CalenderIcon />}
              />
            </div>
            {/* DATE OF BIRTH */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput
                label={t("EMPLOYEES.DATE_OF_BIRTH")}
                rightIcon={<CalenderIcon />}
              />
            </div>
            {/* SALARY */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EMPLOYEES.SALARY")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>
            {/* CURRENCY */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EMPLOYEES.CURRENCY")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>
            {/* BRANCH */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EMPLOYEES.BRANCH")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>
            {/* SENIOR MANAGER */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EMPLOYEES.SENIOR_MANAGER")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>
            {/* POSITION */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EMPLOYEES.POSITION")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>
            {/* EDUCATION */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("EMPLOYEES.EDUCATION")}
                options={[
                  { value: "1", label: "Type 1" },
                  { value: "1", label: "Type 1" },
                ]}
              />
            </div>
            {/* phone number */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput label={t("EMPLOYEES.PHONE_NUMBER")} />
            </div>
            {/* phone number */}
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput label={t("EMPLOYEES.EMAIL")} />
            </div>
            {/* address  */}
            <div className="col-span-12 md:col-span-4 relative">
              <textarea
                type="text"
                class="rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3"
                placeholder="name"
              />
              <label className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px]">
                {t("CUSTOMER.ADDRESS")}
              </label>
            </div>

            <div className="col-span-12 md:col-span-6 relative flex flex-row justify-start gap-4">
              <div className="flex flex-col items-center">
                {/* Circular upload area */}
                <div className="border-dashed border-2 w-50 h-50 rounded-[50%] p-2">
                  <div className="flex flex-col items-center justify-center w-40 h-40 bg-gray-100 rounded-[50%]">
                    {/* Hidden file input */}
                    <input
                      type="file"
                      id="profile-photo-upload"
                      accept="image/*"
                      className="hidden"
                    />

                    {/* Clickable upload area */}
                    <label
                      htmlFor="profile-photo-upload"
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
                    >
                      {/* Upload icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-gray-400 mb-2"
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

                      <p className="text-lg font-medium text-gray-700">
                        Upload photo
                      </p>
                    </label>
                  </div>
                </div>

                {/* This label is now outside the circle */}
                <p className="text-sm text-gray-500 mt-2 border-2 p-2 rounded-md font-semibold">
                  {t("EMPLOYEES.PROFILE_PHOTO")}
                </p>
              </div>
              <div className="flex flex-col items-center">
                {/* Circular upload area */}
                <div className="border-dashed border-2 w-50 h-50 rounded-[50%] p-2">
                  <div className="flex flex-col items-center justify-center w-40 h-40 bg-gray-100 rounded-[50%]">
                    {/* Hidden file input */}
                    <input
                      type="file"
                      id="profile-photo-upload"
                      accept="image/*"
                      className="hidden"
                    />

                    {/* Clickable upload area */}
                    <label
                      htmlFor="profile-photo-upload"
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
                    >
                      {/* Upload icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-gray-400 mb-2"
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

                      <p className="text-lg font-medium text-gray-700">
                        Upload photo
                      </p>
                    </label>
                  </div>
                </div>

                {/* This label is now outside the circle */}
                <p className="text-sm text-gray-500 mt-2 border-2 p-2 rounded-md font-semibold">
                  {t("EMPLOYEES.FINGERPRINT")}
                </p>
              </div>
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
          personalNumber="5454"
          onClose={() => {
            setShowSuccess(false);
            onClose();
          }}
        />
      )}
    </div>
  );
};
