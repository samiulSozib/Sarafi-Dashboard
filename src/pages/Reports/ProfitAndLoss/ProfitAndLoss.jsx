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
  Delete,
  Edit,
  FolderIcon,
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
import FloatingInput from "../../../components/input/FloatingInput";

export const ProfitAndLoss = () => {
  const profitLossData = [
    { category: "Income", row: "1", isHeader: true },
    {
      currency: "AFN",
      amount: "5,250,000",
      category: "Income from Exchange Transactions",
      row: "1.1",
    },
    {
      currency: "AFN",
      amount: "1,800,000",
      category: "Commission",
      row: "1.2",
    },
    {
      currency: "AFN",
      amount: "7,050,000",
      category: "Total Income",
      row: "1.3",
      isTotal: true,
    },

    { category: "Expenses", row: "1", isHeader: true },
    {
      currency: "AFN",
      amount: "1,200,000",
      category: "Depreciation of Tangible Assets",
      row: "1.4",
    },
    { currency: "AFN", amount: "3,500,000", category: "Expenses", row: "1.5" },
    {
      currency: "AFN",
      amount: "4,700,000",
      category: "Total Expenses",
      row: "1.6",
      isTotal: true,
    },

    {
      currency: "AFN",
      amount: "2,350,000",
      category: "Net Profit",
      row: "1.7",
      isGrandTotal: true,
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
    <>
      <div className='overflow-hidden pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6"'>
        <div className="flex flex-row justify-end mb-3">
          <Button
            className="bg-[#00AB55] text-white"
            startIcon={<FolderIcon />}
          >
            {t("COMMON.DOWNLOAD_EXCEL_FILE")}
          </Button>
        </div>

        <div className="border rounded-lg">
          <div className="flex flex-row gap-2 items-center bg-[#F4F6F8] p-4 rounded-md py-4">
            <BlueSignal className="w-5 h-5" />
            <span className="font-semibold text-[18px] leading-8">
              {t("PROFIT_LOSS.PROFIT_AND_LOSS_REPORT")}
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
                    Row
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
                    Currency
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                  >
                    Amount
                  </TableCell>
                </TableRow>
              </TableHeader>

              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {profitLossData.map((item, index) => (
                  <TableRow
                    key={index}
                    className={`px-4 py-3 text-start text-theme-sm dark:text-gray-400 ${
                        item.isHeader
                          ? "font-bold bg-[#D1D1FF] rounded-lg"
                          : item.isTotal
                          ? "font-semibold"
                          : item.isGrandTotal
                          ? "font-bold bg-blue-50"
                          : ""
                      } ${item.isHeader ? "" : "pl-6"}`}
                  >
                    <TableCell className="px-5 py-4 sm:px-6 text-start text-theme-sm dark:text-white/90">
                      {item.row}
                    </TableCell>
                    <TableCell>
                      {item.category}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {item.currency}
                    </TableCell>
                    <TableCell
                      className={`px-4 py-3 text-start text-theme-sm ${
                        item.isGrandTotal ? "font-bold bg-blue-50" : ""
                      } ${
                        item.amount?.startsWith("-")
                          ? "text-red-500"
                          : "dark:text-gray-400"
                      }`}
                    >
                      {item.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination
              currentPage={1}
              totalPages={10}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};
