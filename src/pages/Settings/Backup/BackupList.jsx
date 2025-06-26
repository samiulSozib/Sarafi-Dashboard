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
  Search,
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

export const BackupList = () => {
  const backupData = [
    {
      date: "2025-06-20",
      backupSystemInformation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      lastChange:'23-06-2025',
      row: 1,
    },
    {
      date: "2025-06-20",
      backupSystemInformation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      lastChange:'23-06-2025',
      row: 2,
    },
    {
      date: "2025-06-20",
      backupSystemInformation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      lastChange:'23-06-2025',
      row: 3,
    },
    
  ];

  const { t, i18n } = useTranslation();
  const isRTL = checkRtl(i18n.language);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [confirmationDelete, setConfirmationDelete] = useState(false);
  const [
    isAddEditBranchCapitalDialogOpen,
    setIsAddEditBranchCapitalDialogOpen,
  ] = useState(false);

  const handleDelete = () => {
    setConfirmationDelete(true);
  };

  return (
    <div className='overflow-hidden pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6"'>
      <div className="flex flex-row justify-end mb-3 gap-3">
        <Button
          onClick={() => setIsAddEditBranchCapitalDialogOpen(true)}
          className="bg-[#00AB55] text-white"
          
        >
          {t("BACKUP.DATA_BACKUP")}
        </Button>

        <Button
          onClick={() => setIsAddEditBranchCapitalDialogOpen(true)}
          className="bg-[#1E00A3] text-white"
          
        >
          {t("BACKUP.DATABASE_BACKUP")}
        </Button>
      </div>

      <div className="border rounded-lg">
        <div className="flex flex-row gap-2 items-center bg-[#F4F6F8] p-4 rounded-md py-4">
          <BlueSignal className="w-5 h-5" />
          <span className="font-semibold text-[18px] leading-8">
            {t("BACKUP.SETTINGS_BACKUP_SYSTEM_DATA")}
          </span>
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
                  Backup system information
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Last Change
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
              {backupData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start text-theme-sm dark:text-white/90">
                    {record.backupSystemInformation}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {record.lastChange}
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

      

     
    </div>
  );
};
