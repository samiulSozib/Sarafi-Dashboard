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

export const TotalTransferReport = () => {
  const assetsData = [
    { category: "Current Assets", row: "1", isHeader: true },
    {
      currency: "AFN",
      amount: "5,000,000",
      category: "Cash in Treasury",
      row: "1.1",
    },
    {
      currency: "AFN",
      amount: "15,000,000",
      category: "Cash in Bank",
      row: "1.2",
    },
    {
      currency: "AFN",
      amount: "3,000,000",
      category: "Available from Branch",
      row: "1.3",
    },
    {
      currency: "AFN",
      amount: "2,500,000",
      category: "Afghanistan Bank Guarantee",
      row: "1.4",
    },
    {
      currency: "AFN",
      amount: "1,200,000",
      category: "Advance Bills",
      row: "1.5",
    },
    {
      currency: "AFN",
      amount: "4,300,000",
      category: "Pre-Purchase Contracts",
      row: "1.6",
    },
    {
      currency: "AFN",
      amount: "750,000",
      category: "Other Assets",
      row: "1.7",
    },
    {
      currency: "AFN",
      amount: "31,750,000",
      category: "Total Current Assets",
      row: "1.8",
      isTotal: true,
    },

    { category: "Fixed Assets", row: "2", isHeader: true },
    {
      currency: "AFN",
      amount: "12,000,000",
      category: "Tangible Assets",
      row: "2.1",
    },
    {
      currency: "AFN",
      amount: "-3,000,000",
      category: "Tangible Asset Depreciation",
      row: "2.2",
    },
    {
      currency: "AFN",
      amount: "9,000,000",
      category: "Total Tangible Assets",
      row: "2.3",
      isSubtotal: true,
    },
    {
      currency: "AFN",
      amount: "-1,500,000",
      category: "Intangible Asset Depreciation",
      row: "2.4",
    },
    {
      currency: "AFN",
      amount: "7,500,000",
      category: "Total Intangible Assets",
      row: "2.5",
      isSubtotal: true,
    },
    {
      currency: "AFN",
      amount: "16,500,000",
      category: "Total Fixed Assets",
      row: "2.6",
      isTotal: true,
    },
    {
      currency: "AFN",
      amount: "48,250,000",
      category: "Total Assets",
      row: "2.7",
      isGrandTotal: true,
    },
  ];

  const equityLiabilitiesData = [
    { category: "Current liabilities", row: "3", isHeader: true },
    {
      currency: "AFN",
      amount: "8,000,000",
      category: "Accounts payable",
      row: "3.1",
    },
    {
      currency: "AFN",
      amount: "5,000,000",
      category: "Agency payable",
      row: "3.2",
    },
    { currency: "AFN", amount: "3,500,000", category: "Taxes", row: "3.3" },
    {
      currency: "AFN",
      amount: "2,000,000",
      category: "Other liabilities",
      row: "3.4",
    },
    {
      currency: "AFN",
      amount: "6,000,000",
      category: "Customer escrow accounts",
      row: "3.5",
    },
    {
      currency: "AFN",
      amount: "4,500,000",
      category: "Forward sales contracts",
      row: "3.6",
    },
    {
      currency: "AFN",
      amount: "29,000,000",
      category: "Total liabilities",
      row: "3.7",
      isTotal: true,
    },

    { category: "Capital", row: "4", isHeader: true },
    {
      currency: "AFN",
      amount: "15,000,000",
      category: "Partners' Share Capital",
      row: "4.1",
    },
    {
      currency: "AFN",
      amount: "2,500,000",
      category: "Past Profit and Loss",
      row: "4.2",
    },
    {
      currency: "AFN",
      amount: "1,750,000",
      category: "Current Period Profit and Loss",
      row: "4.3",
    },
    {
      currency: "AFN",
      amount: "19,250,000",
      category: "Total Capital",
      row: "4.5",
      isTotal: true,
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
              {t("TOTAL_TRANSFERS_REPORT.TOTAL_TRANSFERS_REPORT")}
            </span>
          </div>

          <div className="max-w-full overflow-x-auto p-2">
            {/* Assets Table */}
            <div className="mb-8">
              <h2 className="text-md font-semibold mb-4 text-center bg-[#1E00A3] text-white p-2 rounded-md">
                Assets
              </h2>
              <Table>
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
                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                  {assetsData.map((item, index) => (
                    <TableRow
                      key={index}
                      className={`px-4 py-3 text-start text-theme-sm dark:text-gray-400 ${
                        item.isHeader
                          ? "font-bold"
                          : item.isTotal
                          ? "font-semibold bg-[#F2FAFF] rounded-md"
                          : item.isGrandTotal
                          ? "font-semibold bg-[#DEFF96] rounded-md"
                          : ""
                      } ${
                        item.isHeader ? "bg-[#D1D1FF] rounded-md p-2" : "pl-6"
                      }`}
                    >
                      <TableCell className="px-5 py-4 sm:px-6 text-start text-theme-sm dark:text-white/90">
                        {item.row}
                      </TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {item.currency}
                      </TableCell>
                      <TableCell
                        className={`px-4 py-3 text-start text-theme-sm ${
                          item.amount?.startsWith("-")
                            ? "text-red-500"
                            : "dark:text-gray-400"
                        } ${
                          item.isTotal || item.isGrandTotal
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        {item.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Equity & Liabilities Table */}
            <div>
              <h2 className="text-md font-semibold mb-4 text-center bg-[#1E00A3] text-white p-2 rounded-md">
                Equity and Liabilities
              </h2>
              <Table>
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
                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                  {equityLiabilitiesData.map((item, index) => (
                    <TableRow
                      key={index}
                      className={`px-4 py-3 text-start text-theme-sm dark:text-gray-400 ${
                        item.isHeader
                          ? "font-bold"
                          : item.isTotal
                          ? "font-semibold bg-[#F2FAFF] rounded-md"
                          : ""
                      } ${
                        item.isHeader ? "bg-[#D1D1FF] rounded-md p-2" : "pl-6"
                      }`}
                    >
                      <TableCell className="px-5 py-4 sm:px-6 text-start text-theme-sm dark:text-white/90">
                        {item.row}
                      </TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {item.currency}
                      </TableCell>
                      <TableCell
                        className={`px-4 py-3 text-start text-theme-sm dark:text-gray-400 ${
                          item.isTotal ? "font-semibold" : ""
                        }`}
                      >
                        {item.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
