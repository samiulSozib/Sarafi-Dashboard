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
import FloatingTextarea from "../../../components/input/FloatingTextarea";

export const AccountToAccountTransferForm = () => {
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
            {t("ACCOUNT_TO_ACCOUNT_TRANSFER.ACCOUNT_TO_ACCOUNT_TRANSFER")}
          </span>
        </div>
      </div>

      {/* sender information */}
      <div>
        <div className="mt-6 mb-6">
          <span className="font-semibold">
            {t("ACCOUNT_TO_ACCOUNT_TRANSFER.SENDER_INFORMATION")}
          </span>
        </div>

        {/* <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
          <div className="flex flex-row gap-3 col-span-12 md:col-span-6 relative">
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
        </div> */}

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
          {/* full name */}
          <>
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("ACCOUNT_TO_ACCOUNT_TRANSFER.CUSTOMER_NAME")}
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
                label={t("ACCOUNT_TO_ACCOUNT_TRANSFER.ACCOUNT_NUMBER")}
                isRTL={isRTL}
              />
            </div>
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("ACCOUNT_TO_ACCOUNT_TRANSFER.BRANCH")}
                isRTL={isRTL}
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "1", label: "Option 3" },
                  { value: "1", label: "Option 3" },
                ]}
              />
            </div>
          </>
        </div>
      </div>

      <div className="mb-2">
        <hr />
      </div>

      {/* recipient information */}
      <div>
        <div className="mt-6 mb-6 flex flex-col md:flex-row justify-between">
          <span className="font-semibold">
            {t("ACCOUNT_TO_ACCOUNT_TRANSFER.RECIPIENT_INFORMATION")}
          </span>
        </div>

        {/* <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
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
                label={t("SIDEBAR.TEMPORARY_CUSTOMERS")}
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
        </div> */}

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
          <>
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("ACCOUNT_TO_ACCOUNT_TRANSFER.CUSTOMER_NAME")}
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
                label={t("ACCOUNT_TO_ACCOUNT_TRANSFER.ACCOUNT_NUMBER")}
                isRTL={isRTL}
              />
            </div>
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingDropdown
                label={t("ACCOUNT_TO_ACCOUNT_TRANSFER.BRANCH")}
                isRTL={isRTL}
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "1", label: "Option 3" },
                  { value: "1", label: "Option 3" },
                ]}
              />
            </div>
          </>
        </div>
      </div>

      <div className="mb-2">
        <hr />
      </div>

      <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-3 mt-3">
        <>
          <div className="col-span-12 md:col-span-4 relative">
            <FloatingDropdown
              label={t("ACCOUNT_TO_ACCOUNT_TRANSFER.DEPOSIT_CURRENCY")}
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
              label={t("ACCOUNT_TO_ACCOUNT_TRANSFER.DEPOSIT_AMOUNT")}
              isRTL={isRTL}
              rightIcon={<img src="/images/country/country-01.svg"  className="h-5 w-5"/>}
            />
          </div>
          <div className="col-span-12 md:col-span-4 relative">
            <FloatingTextarea label={t('COMMON.DESCRIPTION_OPTIONAL')} />
          </div>
        </>
      </div>

      <div className="flex justify-end gap-3 pt-4 bg-[#F2FAFF] rounded-lg p-3">
        <Button
          type="button"
          onClick={() => {}}
          className="bg-[#fff] text-[#000] w-[150px] py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {t("COMMON.BACK")}
        </Button>
        {!isShowing && (
          <Button
            onClick={() => handleSubmit()}
            type="submit"
            className="bg-[#00AB55]  px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t("COMMON.CONFIRM_AND_TRANSFER")}
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
      {showSuccess && (
        <SuccessAlert
          onClose={() => {
            setShowSuccess(false);
            navigate("/financial-services/account-to-account-transfer");
          }}
        />
      )}
    </div>
  );
};
