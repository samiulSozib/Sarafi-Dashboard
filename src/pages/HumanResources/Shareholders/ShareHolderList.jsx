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
import { AddEditShareHolder } from "./AddEditShareHolder";


export const ShareHolderList = () => {

      


const shareholderData = [
  {
    membership_number: "SH001",
    shareholder_name: "Ahmad Rahimi",
    id_number: "123456789",
    rate: "Investor",
    phone_number: "+93 70 123 4567",
    email: "ahmad.rahimi@example.com",
    row: "1"
  },
  {
    membership_number: "SH002",
    shareholder_name: "Fatima Nazari",
    id_number: "987654321",
    rate: "Senior Partner",
    phone_number: "+93 78 987 6543",
    email: "fatima.nazari@example.com",
    row: "2"
  },
  {
    membership_number: "SH003",
    shareholder_name: "Mohammad Siddiq",
    id_number: "456123789",
    rate: "Board Member",
    phone_number: "+93 79 456 1230",
    email: "m.siddiq@example.com",
    row: "3"
  },
  {
    membership_number: "SH004",
    shareholder_name: "Zahra Habibi",
    id_number: "321654987",
    rate: "Associate",
    phone_number: "+93 77 321 6549",
    email: "zahra.habibi@example.com",
    row: "4"
  }
];


  const { t, i18n } = useTranslation();
  const isRTL = checkRtl(i18n.language);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
    const [confirmationDelete, setConfirmationDelete] = useState(false);
    const [isAddEditCustomerDialogOpen, setIsAddEditCustomerDialogOpen] = useState(false)

      const handleDelete = () => {
    setConfirmationDelete(true);
  };


  return (
    <div className='overflow-hidden pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6"'>
      <div className="flex flex-row justify-end mb-3">
        <Button
          onClick={() => setIsAddEditCustomerDialogOpen(true)}
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
          {t("SHAREHOLDERS.ADD_SHAREHOLDER")}
        </Button>
      </div>

      <div className="border rounded-lg">
        <div className="flex flex-row gap-2 items-center bg-[#F4F6F8] p-4 rounded-md py-4">
          <BlueSignal className="w-5 h-5" />
          <span className="font-semibold text-[18px] leading-8">
            {t("SHAREHOLDERS.SHAREHOLDERS")}
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

        <div className="max-w-full overflow-x-auto p-2">
          <Table>
            {/* Table Header */}
            <TableHeader className="bg-[#F4F6F8] border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Membership Number
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Shareholder Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  ID Number
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Rate
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Phone Number
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Email
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {shareholderData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start text-theme-sm dark:text-white/90">
                    {record.membership_number}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.shareholder_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.id_number}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.rate}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {record.phone_number}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {record.email}
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
                          
                          className="flex items-center gap-4"
                        >
                          <View className="w-5 h-5" />
                          <span>{t("COMMON.VIEW")}</span>
                        </MenuItem>
                        <MenuItem
                          
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


      {isAddEditCustomerDialogOpen &&(
        <AddEditShareHolder 
        isOpen={isAddEditCustomerDialogOpen}
            onClose={() => {
              setIsAddEditCustomerDialogOpen(false),
                setIsEditing(false),
                setIsShowing(false);
            }} />
      )}
      
      {confirmationDelete && (
        <DeleteAlert onClose={() => setConfirmationDelete(false)} />
      )}
    </div>
  );
};
