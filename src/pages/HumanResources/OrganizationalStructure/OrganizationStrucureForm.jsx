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

export const OrganizationStructureForm = () => {
  const organizationalData = [
    { id: 1, employee: "Employee Name", manager: "Manager Name", row: "1" },
    { id: 2, employee: "Employee Name", manager: "", row: "1.1" },
    { id: 3, employee: "Employee Name", manager: "", row: "1.2" },
    { id: 4, employee: "Employee Name", manager: "Manager Name", row: "2" },
    { id: 5, employee: "Employee Name", manager: "", row: "2.1" },
    { id: 6, employee: "Employee Name", manager: "", row: "2.2" },
  ];

  const { t, i18n } = useTranslation();
  const isRTL = checkRtl(i18n.language);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [confirmationDelete, setConfirmationDelete] = useState(false);
  const [isAddEditCustomerDialogOpen, setIsAddEditCustomerDialogOpen] =
    useState(false);

  const handleDelete = () => {
    setConfirmationDelete(true);
  };

  return (
    <div className='overflow-hidden pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6"'>
      <div className="border rounded-lg">
        <div className="flex flex-row gap-2 items-center bg-[#F4F6F8] p-4 rounded-md py-4">
          <BlueSignal className="w-5 h-5" />
          <span className="font-semibold text-[18px] leading-8">
            {t("ORGANIZATIONAL_STRUCTURE.ORGANIZATIONAL_STRUCTURE")}
          </span>
        </div>

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
          <div className="col-span-12 md:col-span-4">
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
          <div className="col-span-12 md:col-span-4">
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
          <div className="col-span-12 md:col-span-4">
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

        <div className="col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
          <div className="col-span-12 md:col-span-6 relative">
            <Table>
              {/* Table Header */}
              <TableHeader className="bg-[#F4F6F8] border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Employee
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Senior Manager
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Row
                  </TableCell>
                </TableRow>
              </TableHeader>

              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {organizationalData.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start text-theme-sm dark:text-white/90">
                      {record.employee}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {record.manager}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      {record.row}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="col-span-12 md:col-span-6 relative">
            <div className="w-full h-full items-center flex justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-white">
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

                 

                  {/* Select file button */}
                  <div className="px-4 py-2 text-black border-2 font-semibold rounded-md transition-colors">
                    {t("COMMON.UPLOAD_PHOTO")}
                  </div>
                </label>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
