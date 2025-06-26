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
import Checkbox from "../../../components/form/input/Checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

export const UserPermissionForm = () => {
  const location = useLocation();
  const { isShowing, isEditing } = location.state || {};
  const { t, i18n } = useTranslation();
  const isRTL = checkRtl(i18n.language);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const services = [
    { service: "Customer", permissions: ["Delete", "Edit", "Create", "View"] },
    {
      service: "Currency Exchange",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    {
      service: "Currency Deposit",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    {
      service: "ACCOUNT_TO_ACCOUNT_TRANSFER",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    { service: "Expenses", permissions: ["Delete", "Edit", "Create", "View"] },
    { service: "Deposits", permissions: ["Delete", "Edit", "Create", "View"] },
    {
      service: "Settlement",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    { service: "Debt", permissions: ["Delete", "Edit", "Create", "View"] },
    { service: "Currency", permissions: ["Delete", "Edit", "Create", "View"] },
    {
      service: "Current Assets",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    {
      service: "Fixed Assets",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    {
      service: "Business Day",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    {
      service: "System Account",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    {
      service: "System Info",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    { service: "Branches", permissions: ["Delete", "Edit", "Create", "View"] },
    { service: "User", permissions: ["Delete", "Edit", "Create", "View"] },
    {
      service: "Backup System Data",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    {
      service: "User Permissions",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
    {
      service: "Human Resources",
      permissions: ["Delete", "Edit", "Create", "View"],
    },
  ];

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  return (
    <div className='overflow-hidden border rounded-md p-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6"'>
      <div className="border rounded-lg">
        <div className="flex flex-row gap-2 items-center bg-[#F4F6F8] p-4 rounded-md py-2">
          <BlueSignal className="w-5 h-5" />
          <span className="font-semibold text-[18px] leading-8">
            {t("USER.USER_PERMISSIONS")}
          </span>
        </div>
      </div>

      <div className="my-6">
        <span className="font-semibold">{t("USER.USER_INFORMATION")}</span>
      </div>

      <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-20 mt-3">
        {/* USERNAME */}
        <div className="col-span-12 md:col-span-4 relative">
          <FloatingDropdown
            label={t("USER.USER_NAME")}
            isRTL={isRTL}
            options={[
              { value: "1", label: "Option 1" },
              { value: "1", label: "Option 3" },
              { value: "1", label: "Option 3" },
            ]}
          />
        </div>
        {/* permitted transaction amount */}
        <div className="col-span-12 md:col-span-4 relative">
          <FloatingInput label={t("USER.PERMITTED_TRANSACTION_AMOUNT")} />
        </div>

        {/* currency */}
        <div className="col-span-12 md:col-span-4 relative">
          <FloatingDropdown
            label={t("USER.CURRENCY")}
            isRTL={isRTL}
            options={[
              { value: "1", label: "Option 1" },
              { value: "1", label: "Option 3" },
              { value: "1", label: "Option 3" },
            ]}
          />
        </div>

        <div className="col-span-6 md:col-span-3 relative flex items-center">
          <Checkbox label={t("USER.TREASURY")} />
        </div>

        <div className="col-span-6 md:col-span-3 relative flex items-center">
          <Checkbox label={t("USER.FULL_EXCHANGE_REPORT")} />
        </div>

        <div className="col-span-6 md:col-span-3 relative flex items-center">
          <Checkbox label={t("USER.REPORT")} />
        </div>

        <div className="col-span-6 md:col-span-3 relative flex items-center">
          <Checkbox label={t("USER.BIOMETRIC")} />
        </div>

        <div className="col-span-6 md:col-span-3 relative flex items-center">
          <Checkbox label={t("USER.PROFIT_LOSS")} />
        </div>

        <div className="col-span-6 md:col-span-3 relative flex items-center">
          <Checkbox label={t("USER.APPROVER")} />
        </div>

        <div className="col-span-6 md:col-span-3 relative flex items-center">
          <Checkbox label={t("USER.ACCOUNT_STATEMENT")} />
        </div>

        <div className="col-span-6 md:col-span-3 relative flex items-center">
          <Checkbox label={t("USER.STATISTICS")} />
        </div>
      </div>

      <hr className="mb-3 border-[2px]" />

      <div className="max-w-full overflow-x-auto p-2">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-[#F4F6F8] border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                {t("USER.SERVICES")}
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                {t("USER.PERMISSIONS")}
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {services.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="px-5 py-5 sm:px-6 text-start text-theme-sm dark:text-white/90 font-semibold">
                  {t(`USER.${item.service.toUpperCase().replace(/ /g, "_")}`)}
                </TableCell>
                <TableCell className="px-5 py-5 sm:px-6 text-start text-theme-sm dark:text-white/90">
                  <div className="grid grid-cols-2 md:flex md:flex-wrap md:gap-10 gap-x-6 gap-y-2">
                    {item.permissions.map((permission, idx) => (
                      <label key={idx} className="flex items-center gap-2">
                        <Checkbox name={`${item.service}-${permission}`} />
                        <span className="font-semibold">
                          {t(`USER.${permission.toUpperCase()}`)}
                        </span>
                      </label>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
            navigate("/settings/user");
          }}
        />
      )}
    </div>
  );
};
