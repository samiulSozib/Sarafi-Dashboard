import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import Badge from "../../../components/ui/badge/Badge";
import Pagination from "../../../components/pagination/pagination";
import { useTranslation } from "react-i18next";
import { checkRtl } from "../../../utils/utils";
import { BlueSignal, Delete, Edit, SearchIcon, View } from "../../../icons";
import Button from "../../../components/ui/button/Button";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router";
import DeleteAlert from "./sweetalert/DeleteAlert";

export const TransactionHistoryList = () => {
  const tableData = [
    {
      id: 1,
      status: "Failed",
      time: "12:30",
      date: "1404/08/07",
      transferType: "Send Currency",
      currencyUnit: "AFN",
      amount: "235.500.000",
      branchName: "Branch Name",
      recipient: "Recipient name",
      sender: "Sender name",
      row: "",
    },
    {
      id: 2,
      status: "Pending",
      time: "12:30",
      date: "1404/08/07",
      transferType: "Account-to-Account Transfer",
      currencyUnit: "Toman",
      amount: "2.569.000",
      branchName: "Branch Name",
      recipient: "Recipient name",
      sender: "Sender name",
      row: "",
    },
    {
      id: 3,
      status: "Successful",
      time: "12:30",
      date: "1404/08/07",
      transferType: "Cash Deposit to Bank Account",
      currencyUnit: "USD",
      amount: "3.99",
      branchName: "Branch Name",
      recipient: "Recipient name",
      sender: "Sender name",
      row: "",
    },
  ];
  const { t, i18n } = useTranslation();
  const isRTL = checkRtl(i18n.language);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [confirmationDelete, setConfirmationDelete] = useState(false);

  const handleDelete = () => {
    setConfirmationDelete(true);
  };

  return (
    <div className='overflow-hidden pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6"'>
      <div className="flex flex-row justify-end mb-3">
        <Button
          onClick={() => {
            navigate("/financial-services/currency-conversion-form", {
              state: {
                isEditing: false,
                isShowing: false,
              },
            });
          }}
          className="bg-[#00AB55] text-white"
        >
          {t("CUSTOMER_TRANSACTION_HISTORY.VIEW_ACCOUNT_INFORMATION")}
        </Button>
      </div>

      <div className="border rounded-lg">
        <div className="flex flex-row gap-2 items-center bg-[#F4F6F8] p-4 rounded-md py-4">
          <BlueSignal className="w-5 h-5" />
          <span className="font-semibold text-[18px] leading-8">
            {t("CURRENCY_CONVERSION.CURRENCY_CONVERSION_HISTORY")}
          </span>
        </div>

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <select
                dir={isRTL ? "rtl" : "ltr"}
                style={{
                  paddingLeft: isRTL ? "2.5rem" : "1rem",
                  paddingRight: isRTL ? "1rem" : "2.5rem",
                  textAlign: isRTL ? "right" : "left",
                }}
                className="w-full px-3 py-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="cancel">Canceled</option>
              </select>
              <div
                className={`absolute inset-y-0 ${
                  isRTL ? "left-0 pl-3" : "right-0 pr-3"
                } flex items-center pointer-events-none`}
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="relative">
              <input
                type="date"
                className="w-full px-3 py-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search By Customer name..."
                className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                dir={isRTL ? "rtl" : "ltr"}
                style={{
                  paddingLeft: isRTL ? "2.5rem" : "1rem",
                  paddingRight: isRTL ? "1rem" : "2.5rem",
                  textAlign: isRTL ? "right" : "left",
                }}
              />
              <div
                className={`absolute inset-y-0 ${
                  isRTL ? "left-0 pl-3" : "right-0 pr-3"
                } flex items-center pointer-events-none`}
              >
                <SearchIcon className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-full overflow-x-auto p-2">
          <Table>
            {/* Table Header - Reversed column order */}
            <TableHeader className="bg-[#F4F6F8] border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Sender
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Recipient
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Branch Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Amount
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Currency Unit
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Transfer Type
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Date
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Time
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body - Reversed column order */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.sender}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.recipient}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.branchName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.amount}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.currencyUnit}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.transferType}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.date}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.time}
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start text-theme-sm dark:text-white/90">
                    <Badge
                      size="sm"
                      color={
                        record.status === "Successful"
                          ? "success"
                          : record.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {record.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    <Menu>
                      <MenuHandler>
                        <IconButton variant="text" className="p-1">
                          <CiMenuKebab className="w-5 h-5 text-gray-500" />
                        </IconButton>
                      </MenuHandler>
                      <MenuList className="min-w-[120px] flex flex-col gap-3 text-[16px font-semibold]">
                        <MenuItem
                          onClick={() => {
                            navigate(
                              "/financial-services/transaction-history-form",
                              {
                                state: {
                                  isEditing: false,
                                  isShowing: true,
                                },
                              }
                            );
                          }}
                          className="flex items-center gap-4"
                        >
                          <View className="w-5 h-5" />
                          <span>{t("COMMON.VIEW")}</span>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigate("", {
                              state: {
                                isEditing: true,
                                isShowing: false,
                              },
                            });
                          }}
                          className="flex items-center gap-4"
                        >
                          <Edit className="w-5 h-5" />
                          <span>{t("COMMON.EDIT")}</span>
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleDelete()}
                          className="flex items-center gap-4 text-red-500"
                        >
                          <Delete className="w-5 h-5" />
                          <span>{t("COMMON.DELETE")}</span>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
        </div>
      </div>

      {confirmationDelete && (
        <DeleteAlert onClose={() => setConfirmationDelete(false)} />
      )}
    </div>
  );
};
