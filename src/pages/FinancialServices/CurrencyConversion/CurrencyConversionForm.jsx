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

export const CurrencyConversionForm = () => {
  const location = useLocation();
  const { isShowing, isEditing } = location.state || {};
  const { t, i18n } = useTranslation();
  const isRTL = checkRtl(i18n.language);
  const [customerType, setCustomerType] = useState("temporary");
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
            {isEditing
              ? t("CURRENCY_CONVERSION.EDIT_CURRENCY_CONVERSION")
              : isShowing
              ? t("CURRENCY_CONVERSION.VIEW_CURRENCY_CONVERSION")
              : t("CURRENCY_CONVERSION.ADD_CURRENCY_CONVERSION")}
          </span>
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-6 mb-6">
        {/* Temporary Customers */}
        <div
          className={`border p-3 rounded-md ${
            customerType === "temporary"
              ? "bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700"
              : "bg-white dark:bg-gray-800"
          }`}
        >
          <Radio
            id="temporary-customers"
            name="customer-type"
            value="temporary"
            checked={customerType === "temporary"}
            onChange={setCustomerType}
            label={t("SIDEBAR.TEMPORARY_CUSTOMERS")}
          />
        </div>

        {/* Permanent Customers */}
        <div
          className={`border p-3 rounded-md ${
            customerType === "permanent"
              ? "bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700"
              : "bg-white dark:bg-gray-800"
          }`}
        >
          <Radio
            id="permanent-customers"
            name="customer-type"
            value="permanent"
            checked={customerType === "permanent"}
            onChange={setCustomerType}
            label={t("SIDEBAR.PERMANENT_CUSTOMERS")}
          />
        </div>
      </div>

      <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-20 mt-3">
        {/* full name */}
        {customerType == "temporary" && (
          <>
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput label={t("CUSTOMER.FULL_NAME")} isRTL={isRTL} />
            </div>
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput label={t("CUSTOMER.FATHER_NAME")} isRTL={isRTL} />
            </div>
            <div className="col-span-12 md:col-span-4 relative">
              <FloatingInput label={t("CUSTOMER.PHONE_NUMBER")} isRTL={isRTL} />
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
        {customerType == "permanent" && (
          <div className="col-span-12 md:col-span-4 relative">
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
        {/* transaction type */}
        <div className="col-span-12 md:col-span-4 relative">
          <FloatingDropdown
            label={t("CURRENCY_CONVERSION.TRANSACTION_TYPE")}
            isRTL={isRTL}
            options={[
              { value: "1", label: "Option 1" },
              { value: "1", label: "Option 3" },
              { value: "1", label: "Option 3" },
            ]}
          />
        </div>
        {/* currency deposited */}
        <div className="col-span-12 md:col-span-4 relative">
          <FloatingDropdown
            label={t("CURRENCY_CONVERSION.CURRENCY_DEPOSITED")}
            isRTL={isRTL}
            options={[
              { value: "1", label: "Option 1" },
              { value: "1", label: "Option 3" },
              { value: "1", label: "Option 3" },
            ]}
          />
        </div>
        {/* currency withdrawn*/}
        <div className="col-span-12 md:col-span-4 relative">
          <FloatingDropdown
            label={t("CURRENCY_CONVERSION.CURRENCY_WITHDRAWN")}
            isRTL={isRTL}
            options={[
              { value: "1", label: "Option 1" },
              { value: "1", label: "Option 3" },
              { value: "1", label: "Option 3" },
            ]}
          />
        </div>
        {/* DEPOSITED AMOUNT */}
        <div className="col-span-12 md:col-span-4 relative">
          <FloatingInput
            label={t("CURRENCY_CONVERSION.DEPOSITED_AMOUNT")}
            rightIcon={<img src="/images/country/country-01.svg" />}
            isRTL={isRTL}
          />
        </div>
        {/* received amount */}
        <div className="col-span-12 md:col-span-4 relative">
          <FloatingInput
            label={t("CURRENCY_CONVERSION.RECEIVED_AMOUNT")}
            rightIcon={<img src="/images/country/country-01.svg" />}
            isRTL={isRTL}
          />
        </div>
        {/* Real Time Rate */}
        <div className="col-span-12 md:col-span-4 relative">
          <FloatingInput
            label={t("CURRENCY_CONVERSION.REAL_TIME_USD_RATE")}
            rightIcon={<img src="/images/country/country-01.svg" />}
            isRTL={isRTL}
          />
        </div>
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
      {showSuccess && (
        <SuccessAlert
          onClose={() => {
            setShowSuccess(false);
            navigate('/financial-services/currency-conversion')
          }}
        />
      )}
    </div>
  );
};
