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
import Checkbox from "../../../components/form/input/Checkbox";

export const BiometricForm = () => {
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
            {t("BIOMETRIC.SETTINGS_BIOMETRIC")}
          </span>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
          <div className="col-span-12 md:col-span-6 relative mt-3 p-3">
            <div className="flex flex-row justify-start gap-3">
              <Checkbox />
              <span>{t("BIOMETRIC.ACTIVE_BIOMETRIC_SYSTEM")}</span>
            </div>

            <div className="flex flex-row justify-between gap-3 mt-10">
              <span>{t("BIOMETRIC.DEVICE_STATUS")}</span>
              <span className="text-red-600 font-semibold">
                {t("BIOMETRIC.DEVICE_NOT_CONNECTED")}
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 relative">
            <div className="border rounded-md bg-white shadow-md m-5 h-[150px] flex items-center justify-center">
              <Button className="bg-blue-800 text-white font-semibold">
                {t("BIOMETRIC.CHECK_DEVICE")}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-4 bg-[#F2FAFF] rounded-lg p-3 m-3">
          <Button
            type="button"
            className="bg-[#fff] text-[#000] w-[150px] py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t("COMMON.BACK")}
          </Button>

          <Button
            type="submit"
            className="bg-[#00AB55] w-[150px] px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t("COMMON.CONFIRM_AND_SAVE")}
          </Button>
        </div>
      </div>
    </div>
  );
};
