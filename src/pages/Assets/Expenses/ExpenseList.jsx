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
import {
  BlueSignal,
  CalenderIcon,
  Delete,
  Edit,
  SearchIcon,
  View,
} from "../../../icons";
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
import FloatingDropdown from "../../../components/input/FloatingDropdown";
import FloatingInput from "../../../components/input/FloatingInput";
import { AddEditExpense } from "./AddEditExpense";

export const ExpenseListList = () => {
  const expenseData = [
    {
      status: "Pending",
      date: "2024-06-25",
      paymentMethod: "Card",
      description: "Office supplies purchase",
      currency: "USD",
      amount: "150.00",
      assetType: "Physical",
      category: "Administrative",
      row: "1",
    },
    {
      status: "Received",
      date: "2024-06-26",
      paymentMethod: "Cash",
      description: "Internet bill payment",
      currency: "EUR",
      amount: "45.50",
      assetType: "Non-Physical",
      category: "Communication",
      row: "2",
    },
    {
      status: "Not agreed",
      date: "2024-06-27",
      paymentMethod: "Check",
      description: "Annual insurance premium",
      currency: "GBP",
      amount: "1200.00",
      assetType: "Physical",
      category: "Insurance",
      row: "3",
    },
  ];

  const { t, i18n } = useTranslation();
  const isRTL = checkRtl(i18n.language);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [confirmationDelete, setConfirmationDelete] = useState(false);
  const [isAddEditExpenseDialogOpen, setIsAddEditExpenseDialogOpen] =
    useState(false);

  const handleDelete = () => {
    setConfirmationDelete(true);
  };

  return (
    <div className='overflow-hidden pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6"'>
      <div className="flex flex-row justify-end mb-3">
        <Button
          onClick={() => setIsAddEditExpenseDialogOpen(true)}
          className="bg-[#00AB55] text-white"
          startIcon={
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.49999 3.1875C9.81065 3.1875 10.0625 3.43934 10.0625 3.75V8.43749H14.75C15.0607 8.43749 15.3125 8.68933 15.3125 8.99999C15.3125 9.31065 15.0607 9.56249 14.75 9.56249H10.0625V14.25C10.0625 14.5607 9.81065 14.8125 9.49999 14.8125C9.18933 14.8125 8.93749 14.5607 8.93749 14.25V9.56249H4.25C3.93934 9.56249 3.6875 9.31065 3.6875 8.99999C3.6875 8.68933 3.93934 8.43749 4.25 8.43749H8.93749V3.75C8.93749 3.43934 9.18933 3.1875 9.49999 3.1875Z"
                fill="white"
              />
            </svg>
          }
        >
          {t("EXPENSES.ADD_NEW_CONSUMPTION")}
        </Button>
      </div>

      <div className="border rounded-lg">
        <div className="flex flex-row gap-2 items-center bg-[#F4F6F8] p-4 rounded-md py-4">
          <BlueSignal className="w-5 h-5" />
          <span className="font-semibold text-[18px] leading-8">
            {t("EXPENSES.EXPENSE")}
          </span>
        </div>

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <FloatingDropdown
                label={t("EXPENSES.CATEGORY")}
                options={[{ value: "1", label: "Type 1" }]}
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <FloatingDropdown
                label={t("EXPENSES.ASSET_TYPE")}
                options={[{ value: "1", label: "Type 1" }]}
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <FloatingDropdown
                label={t("EXPENSES.PAYMENT_METHOD")}
                options={[{ value: "1", label: "Type 1" }]}
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="relative">
              <FloatingInput
                label={t("EXPENSES.DATE")}
                rightIcon={<CalenderIcon />}
              />
            </div>
          </div>
        </div>

        <div className="max-w-full overflow-x-auto p-2">
          <Table>
            {/* Table Header - Columns Reversed */}
            <TableHeader className="bg-[#F4F6F8] border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Actions
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
                  Category
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Asset Type
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
                  Currency
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Description
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Payment Method
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

            {/* Table Body - Data with Reversed Columns */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {expenseData.map((record) => (
                <TableRow key={record.row}>
                  <TableCell className="px-4 py-3 text-start">
                    <Menu>
                      <MenuHandler>
                        <IconButton variant="text" className="p-1">
                          <CiMenuKebab className="w-5 h-5 text-gray-500" />
                        </IconButton>
                      </MenuHandler>
                      <MenuList className="min-w-[120px] flex flex-col gap-3 text-[16px font-semibold]">
                        <MenuItem className="flex items-center gap-4">
                          <View className="w-5 h-5" />
                          <span>View</span>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-4">
                          <Edit className="w-5 h-5" />
                          <span>Edit</span>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-4 text-red-500">
                          <Delete className="w-5 h-5" />
                          <span>Delete</span>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {record.date}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {record.category}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.assetType}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.amount}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.currency}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.description}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.paymentMethod}
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start text-theme-sm dark:text-white/90">
                    {record.status}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    <Menu>
                      <MenuHandler>
                        <IconButton variant="text" className="p-1">
                          <CiMenuKebab className="w-5 h-5 text-gray-500" />
                        </IconButton>
                      </MenuHandler>
                      <MenuList className="min-w-[120px] flex flex-col gap-3 text-[16px font-semibold]">
                        <MenuItem className="flex items-center gap-4">
                          <View className="w-5 h-5" />
                          <span>{t("COMMON.VIEW")}</span>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-4">
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

      {isAddEditExpenseDialogOpen && (
        <AddEditExpense
          isOpen={isAddEditExpenseDialogOpen}
          onClose={() => {
            setIsAddEditExpenseDialogOpen(false),
              setIsEditing(false),
              setIsShowing(false);
          }}
        />
      )}

      {confirmationDelete && (
        <DeleteAlert onClose={() => setConfirmationDelete(false)} />
      )}
    </div>
  );
};
