import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import Badge from "../../components/ui/badge/Badge";
import Pagination from "../../components/pagination/pagination";
import Button from "../../components/ui/button/Button";
import { useEffect, useState } from "react";
import {
  BlueSignal,
  Delete,
  Edit,
  EyeIcon,
  SearchIcon,
  View,
} from "../../icons";
import { checkRtl } from "../../utils/utils";
import { AddEditPermanentCustomerDialog } from "./AddEditPermanentCustomerDialog";
import { AddEditTemporaryCustomerDialog } from "./AddEditTemporaryCustomer";
import { AddEditCorporateCustomerDialog } from "./AddEditCorporateCustomer";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { CiMenuKebab } from "react-icons/ci";
import DeleteAlert from "./sweetalert/DeleteAlert";
import { CustomerDepositInfoDialog } from "./CustomerDepositInfoDialog";
import { CustomerDepositInfo } from "./CustomerDepositInfo";

export const CustomerList = () => {
  const navigate = useNavigate();
  const { customerType } = useParams();
  const { t, i18n } = useTranslation();
  const isRTL = checkRtl(i18n.language);
  const [isAddEditCustomerDialogOpen, setIsAddEditCustomerDialogOpen] =
    useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [confirmationDelete, setConfirmationDelete] = useState(false);
  // State for deposit info flow
  const [showDepositDialog, setShowDepositDialog] = useState(false);
  const [depositVerified, setDepositVerified] = useState(false);

  // Check if this is a deposit info route
  const isDepositInfoRoute = customerType === "customer-deposit-account";

  useEffect(() => {
    if (isDepositInfoRoute && !depositVerified) {
      setShowDepositDialog(true);
    }
  }, [isDepositInfoRoute, depositVerified]);

  const tableData = [
    {
      id: 1,
      user: {
        image: "/images/user/user-17.jpg",
        name: "Lindsey Curtis",
        role: "Web Designer",
      },
      projectName: "Agency Website",
      team: {
        images: [
          "/images/user/user-22.jpg",
          "/images/user/user-23.jpg",
          "/images/user/user-24.jpg",
        ],
      },
      budget: "3.9K",
      status: "Active",
    },
    {
      id: 2,
      user: {
        image: "/images/user/user-18.jpg",
        name: "Kaiya George",
        role: "Project Manager",
      },
      projectName: "Technology",
      team: {
        images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
      },
      budget: "24.9K",
      status: "Pending",
    },
    {
      id: 3,
      user: {
        image: "/images/user/user-17.jpg",
        name: "Zain Geidt",
        role: "Content Writing",
      },
      projectName: "Blog Writing",
      team: {
        images: ["/images/user/user-27.jpg"],
      },
      budget: "12.7K",
      status: "Active",
    },
    {
      id: 4,
      user: {
        image: "/images/user/user-20.jpg",
        name: "Abram Schleifer",
        role: "Digital Marketer",
      },
      projectName: "Social Media",
      team: {
        images: [
          "/images/user/user-28.jpg",
          "/images/user/user-29.jpg",
          "/images/user/user-30.jpg",
        ],
      },
      budget: "2.8K",
      status: "Cancel",
    },
    {
      id: 5,
      user: {
        image: "/images/user/user-21.jpg",
        name: "Carla George",
        role: "Front-end Developer",
      },
      projectName: "Website",
      team: {
        images: [
          "/images/user/user-31.jpg",
          "/images/user/user-32.jpg",
          "/images/user/user-33.jpg",
        ],
      },
      budget: "4.5K",
      status: "Active",
    },
  ];

  const renderCustomerTitle = () => {
    switch (customerType) {
      case "permanent-customers":
        return t("SIDEBAR.PERMANENT_CUSTOMERS");
      case "temporary-customers":
        return t("SIDEBAR.TEMPORARY_CUSTOMERS");
      case "corporate-customers":
        return t("SIDEBAR.CORPORATE_CUSTOMERS");
      default:
        return customerType;
    }
  };

  const renderAddEditDialog = () => {
    switch (customerType) {
      case "permanent-customers":
        return (
          <AddEditPermanentCustomerDialog
            isOpen={isAddEditCustomerDialogOpen}
            onClose={() => {
              setIsAddEditCustomerDialogOpen(false),
                setIsEditing(false),
                setIsShowing(false);
            }}
            isEditing={isEditing}
            isShowing={isShowing}
          />
        );
      case "temporary-customers":
        return (
          <AddEditTemporaryCustomerDialog
            isOpen={isAddEditCustomerDialogOpen}
            onClose={() => {
              setIsAddEditCustomerDialogOpen(false),
                setIsEditing(false),
                setIsShowing(false);
            }}
            isEditing={isEditing}
            isShowing={isShowing}
          />
        );

      case "corporate-customers":
        return (
          <AddEditCorporateCustomerDialog
            isOpen={isAddEditCustomerDialogOpen}
            onClose={() => {
              setIsAddEditCustomerDialogOpen(false),
                setIsEditing(false),
                setIsShowing(false);
            }}
            isEditing={isEditing}
            isShowing={isShowing}
          />
        );

      default:
        return null;
    }
  };

  const handleDelete = () => {
    setConfirmationDelete(true);
  };

  const handleDepositVerify = () => {
    setDepositVerified(true);
    setShowDepositDialog(false);
    // You could also perform API verification here
  };

  const handleChangeAccount = () => {
    setDepositVerified(false);
    setShowDepositDialog(true);
  };

  if (isDepositInfoRoute) {
    return (
      <>
        {showDepositDialog && (
          <CustomerDepositInfoDialog
            onVerify={handleDepositVerify}
            onClose={() => navigate(-1)} // Go back
          />
        )}

        {depositVerified && (
          <CustomerDepositInfo onChangeAccount={handleChangeAccount} />
        )}
      </>
    );
  }

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
          {t("CUSTOMER.ADD_NEW_CUSTOMER")}
        </Button>
      </div>

      <div className="border rounded-lg">
        <div className="flex flex-row gap-2 items-center bg-[#F4F6F8] p-4 rounded-md py-4">
          <BlueSignal className="w-5 h-5" />
          <span className="font-semibold text-[18px] leading-8">{renderCustomerTitle()}</span>
        </div>

        <div className="bg-white col-span-12 grid grid-cols-12 gap-3 md:gap-6 p-2 mb-2">
          <div className="col-span-12 md:col-span-4">
            <div className="col-span-12 md:col-span-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search By name..."
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
          <div className="col-span-12 md:col-span-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search By ID Document Number..."
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
                placeholder="Search By ID Phone Number..."
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
                  User
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Project Name
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
                  Budget
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
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img
                          width={40}
                          height={40}
                          src={order.user.image}
                          alt={order.user.name}
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.user.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {order.user.role}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.projectName}
                  </TableCell>

                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        order.status === "Active"
                          ? "success"
                          : order.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.budget}
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
                            setIsShowing(true),
                              setIsAddEditCustomerDialogOpen(true);
                          }}
                          className="flex items-center gap-4"
                        >
                          <View className="w-5 h-5" />
                          <span>{t("COMMON.VIEW")}</span>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            setIsEditing(true),
                              setIsAddEditCustomerDialogOpen(true);
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

      {/* add edit customer dialog */}

      {renderAddEditDialog()}
      {confirmationDelete && (
        <DeleteAlert onClose={() => setConfirmationDelete(false)} />
      )}
    </div>
  );
};
