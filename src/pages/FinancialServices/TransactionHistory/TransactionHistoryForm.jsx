import React, { useState } from "react";
import { BlueSignal, SearchIcon } from "../../../icons";
import { useTranslation } from "react-i18next";
import { checkRtl } from "../../../utils/utils";
import FloatingInput from "../../../components/input/FloatingInput";
import FloatingDropdown from "../../../components/input/FloatingDropdown";
import Button from "../../../components/ui/button/Button";
import Radio from "../../../components/form/input/Radio";
import { useLocation, useNavigate } from "react-router";
import SuccessAlert from "./sweetalert/SuccessAlert";
import FloatingSelect from "../../../components/input/FloatingDropdown";
import DeleteAlert from "./sweetalert/DeleteAlert";

export const TransactionHistoryForm = () => {
  const location = useLocation();
  const { isShowing, isEditing } = location.state || {};
  const { t, i18n } = useTranslation();
  const isRTL = checkRtl(i18n.language);
  const [senderCustomerType, setSenderCustomerType] = useState("temporary");
  const [recipientCustomerType, setRecipientCustomerType] =
    useState("temporary");

  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  return (
    <div className='overflow-hidden border rounded-md p-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6"'>
      <div className="border rounded-lg">
        <div className="flex flex-row gap-2 items-center bg-[#F4F6F8] p-4 rounded-md py-2">
          <BlueSignal className="w-5 h-5" />
          <span className="font-semibold text-[18px] leading-8">
            {t("CUSTOMER_TRANSACTION_HISTORY.TRANSACTION_HISTORY_DETAILS")}
          </span>
        </div>
      </div>

      {/* sender information */}
      <div>
        <div className="mt-6 mb-6">
          <span className="font-semibold">
            {t("CUSTOMER_TRANSACTION_HISTORY.SENDER_INFORMATION")}
          </span>
        </div>

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
          <div className="flex flex-row gap-3 col-span-12 md:col-span-6 relative">
            {/* Temporary Customers */}
            <div
              className={`border p-3 rounded-md ${
                senderCustomerType === "temporary"
                  ? "bg-blue-50 border-green-300 dark:bg-blue-900/30 dark:border-blue-700"
                  : "bg-white dark:bg-gray-800"
              } w-full`}
            >
              <Radio
                id="sender-temporary-customers"
                name="sender-customer-type"
                value="temporary"
                checked={senderCustomerType === "temporary"}
                onChange={setSenderCustomerType}
                label={t("SIDEBAR.TEMPORARY_CUSTOMERS")}
              />
            </div>

            {/* Permanent Customers */}
            <div
              className={`border p-3 rounded-md ${
                senderCustomerType === "permanent"
                  ? "bg-blue-50 border-green-300 dark:bg-blue-900/30 dark:border-blue-700"
                  : "bg-white dark:bg-gray-800"
              } w-full`}
            >
              <Radio
                id="sender-permanent-customers"
                name="sender-customer-type"
                value="permanent"
                checked={senderCustomerType === "permanent"}
                onChange={setSenderCustomerType}
                label={t("SIDEBAR.PERMANENT_CUSTOMERS")}
              />
            </div>
          </div>
          {senderCustomerType == "permanent" && (
            <div className="col-span-12 md:col-span-6 relative">
              <FloatingDropdown
                label={t("CUSTOMER.CUSTOMERS")}
                isRTL={isRTL}
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "1", label: "Option 3" },
                  { value: "1", label: "Option 3" },
                ]}
              />
            </div>
          )}
        </div>

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
          {/* full name */}
          {senderCustomerType == "temporary" && (
            <>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput label={t("CUSTOMER.FULL_NAME")} isRTL={isRTL} />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput
                  label={t("CUSTOMER.FATHER_NAME")}
                  isRTL={isRTL}
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput
                  label={t("CUSTOMER.PHONE_NUMBER")}
                  isRTL={isRTL}
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingDropdown
                  label={t("CUSTOMER.IDENTITY_DOCUMENT_TYPE")}
                  isRTL={isRTL}
                  options={[
                    { value: "1", label: "Option 1" },
                    { value: "1", label: "Option 3" },
                    { value: "1", label: "Option 3" },
                  ]}
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput
                  label={t("CUSTOMER.IDENTITY_DOCUMENT_NUMBER")}
                  isRTL={isRTL}
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput label={t("CUSTOMER.ADDRESS")} isRTL={isRTL} />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mb-2">
        <hr />
      </div>

      {/* recipient information */}
      <div>
        <div className="mt-6 mb-6 flex flex-col md:flex-row justify-between">
            
          <span className="font-semibold">
            {t("CUSTOMER_TRANSACTION_HISTORY.RECIPIENT_INFORMATION")}
          </span>
          <FloatingDropdown className="w-full md:w-[300px] mt-5 md:mt-0" options={[{value:'1',label:'Type 1'}]} label={t('CUSTOMER_TRANSACTION_HISTORY.AGENCY_FOR_RECEIVING_FOREIGN_CURRENCY')} />
        </div>

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
          <div className="flex flex-row gap-3 col-span-12 md:col-span-6 relative">
            {/* Temporary Customers */}
            <div
              className={`border p-3 rounded-md ${
                recipientCustomerType === "temporary"
                  ? "bg-blue-50 border-green-300 dark:bg-blue-900/30 dark:border-blue-700"
                  : "bg-white dark:bg-gray-800"
              } w-full`}
            >
              <Radio
                id="recipient-temporary-customers"
                name="recipient-customer-type"
                value="temporary"
                checked={recipientCustomerType === "temporary"}
                onChange={setRecipientCustomerType}
                label={t("SIDEBAR.TEMPORARY_CUSTOMERS")}
              />
            </div>

            {/* Permanent Customers */}
            <div
              className={`border p-3 rounded-md ${
                recipientCustomerType === "permanent"
                  ? "bg-blue-50 border-green-300 dark:bg-blue-900/30 dark:border-blue-700"
                  : "bg-white dark:bg-gray-800"
              } w-full`}
            >
              <Radio
                id="recipient-permanent-customers"
                name="recipient-customer-type"
                value="permanent"
                checked={recipientCustomerType === "permanent"}
                onChange={setRecipientCustomerType}
                label={t("SIDEBAR.PERMANENT_CUSTOMERS")}
              />
            </div>
          </div>

          {recipientCustomerType == "permanent" && (
            <div className="col-span-12 md:col-span-6 relative">
              <FloatingDropdown
                label={t("CUSTOMER.CUSTOMERS")}
                isRTL={isRTL}
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "1", label: "Option 3" },
                  { value: "1", label: "Option 3" },
                ]}
              />
            </div>
          )}
        </div>

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
          {/* full name */}
          {recipientCustomerType == "temporary" && (
            <>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput label={t("CUSTOMER.FULL_NAME")} isRTL={isRTL} />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput
                  label={t("CUSTOMER.FATHER_NAME")}
                  isRTL={isRTL}
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput
                  label={t("CUSTOMER.PHONE_NUMBER")}
                  isRTL={isRTL}
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingDropdown
                  label={t("CUSTOMER.IDENTITY_DOCUMENT_TYPE")}
                  isRTL={isRTL}
                  options={[
                    { value: "1", label: "Option 1" },
                    { value: "1", label: "Option 3" },
                    { value: "1", label: "Option 3" },
                  ]}
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput
                  label={t("CUSTOMER.IDENTITY_DOCUMENT_NUMBER")}
                  isRTL={isRTL}
                />
              </div>
              <div className="col-span-12 md:col-span-4 relative">
                <FloatingInput label={t("CUSTOMER.ADDRESS")} isRTL={isRTL} />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mb-5">
        <hr />
      </div>

      {/* amount section */}
      <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-12 gap-3 md:gap-6">
            <div className="col-span-12 md:col-span-6 w-full">
              <FloatingSelect
                options={[{ value: "1", label: "Type 1" }]}
                label={t("CUSTOMER_TRANSACTION_HISTORY.CURRENCY_DEPOSIT")}
              />
            </div>
            <div className="col-span-12 md:col-span-6 w-full">
              <FloatingInput
                label={t("CUSTOMER_TRANSACTION_HISTORY.DEPOSIT_AMOUNT")}
                rightIcon={
                  <img
                    src="/images/country/country-01.svg"
                    className="h-5 w-5"
                  />
                }
              />
            </div>
            <div className="col-span-12 md:col-span-6 w-full">
              <FloatingSelect
                options={[{ value: "1", label: "Type 1" }]}
                label={t("CUSTOMER_TRANSACTION_HISTORY.CURRENCY_RECEIVE")}
              />
            </div>
            <div className="col-span-12 md:col-span-6 w-full">
              <FloatingInput
                label={t("CUSTOMER_TRANSACTION_HISTORY.AMOUNT_RECEIVE")}
                rightIcon={
                  <img
                    src="/images/country/country-01.svg"
                    className="h-5 w-5"
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col bg-[#F2FAFF] p-5 rounded-md">
          <div className="flex flex-row justify-between">
            <span className="text-[14px] font-semibold text-gray-400">
              {t("CUSTOMER_TRANSACTION_HISTORY.REAL_TIME_USD_RATE")}
            </span>
            <img
              src="/images/country/country-01.svg"
              alt=""
              className="w-5 h-5"
            />
          </div>
          <div className="mt-2">
            <span className="text-[14px] font-bold">71,47 AFN</span>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <hr />
      </div>

      {/* commission payment section */}
      <div>
        <div className="mt-6 mb-6">
          <span className="font-semibold">
            {t("CUSTOMER_TRANSACTION_HISTORY.COMMISSION_PAYMENT")}
          </span>
        </div>
        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
          <div className="flex flex-row gap-3 col-span-12 md:col-span-6 relative">
            <div
              className={`border p-3 rounded-md ${
                recipientCustomerType === "temporary"
                  ? "bg-blue-50 border-green-300 dark:bg-blue-900/30 dark:border-blue-700"
                  : "bg-white dark:bg-gray-800"
              } w-full`}
            >
              <Radio
                id="recipient-temporary-customers"
                name="recipient-customer-type"
                value="temporary"
                checked={recipientCustomerType === "temporary"}
                onChange={setRecipientCustomerType}
                label={t("CUSTOMER_TRANSACTION_HISTORY.ONE_WAY", { text: "(3%)" })}
              />
            </div>

            <div
              className={`border p-3 rounded-md ${
                recipientCustomerType === "permanent"
                  ? "bg-blue-50 border-green-300 dark:bg-blue-900/30 dark:border-blue-700"
                  : "bg-white dark:bg-gray-800"
              } w-full`}
            >
              <Radio
                id="recipient-permanent-customers"
                name="recipient-customer-type"
                value="permanent"
                checked={recipientCustomerType === "permanent"}
                onChange={setRecipientCustomerType}
                label={t("CUSTOMER_TRANSACTION_HISTORY.TWO_WAY", { text: "(10%)" })}
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 relative">
            <FloatingInput
              className="bg-[#F2FAFF]"
              label={t("CUSTOMER_TRANSACTION_HISTORY.COMMISSION_AMOUNT")}
              rightIcon={<img src="/images/country/country-01.svg" />}
            />
          </div>
        </div>
      </div>

      {/* total section */}

      <div className="mt-5 mb-5 flex flex-row justify-between p-3">
        <span className="text-[16px] font-semibold text-gray-600">{t('CUSTOMER_TRANSACTION_HISTORY.TOTAL_PAYMENT')}</span>
        <span className="text-[16px] font-bold text-blue-800">10.555 AFN</span>
      </div>

      <div className="flex justify-end gap-3 pt-4 bg-[#F2FAFF] rounded-lg p-3">
        <Button
          type="button"
          onClick={() => {navigate(-1)}}
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
            className="bg-[#1E00A3]  px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t("CUSTOMER_TRANSACTION_HISTORY.EDIT_INFORMATION")}
          </Button>
        )}
        {(isEditing || isShowing) && (
          <Button
            onClick={() => handleSubmit()}
            type="submit"
            className="bg-[#FF4842] px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t("CUSTOMER_TRANSACTION_HISTORY.CANCEL_TRANSACTION")}
          </Button>
        )}
      </div>
      {showSuccess && (
        <DeleteAlert
          onClose={() => {
            setShowSuccess(false);
            navigate("/financial-services/transaction-history");
          }}
        />
      )}
    </div>
  );
};
