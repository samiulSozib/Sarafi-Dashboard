import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDownIcon,
  HorizontaLDots,
  Dashboard,
  User_Group,
  UserIcon,
  Location,
  Direction,
  Station,
  Discount,
  Trip,
  Wallet,
  Bus,
  Settings,
  Ticket,
  SideNavDashboard,
  SideNavAsset,
  SideNavUserGroup,
  SideNavFinance,
  SideNavReport,
  SideNavUser,
  SideNavSpecialTransactions,
  SideNavLiabilities,
  SideNavSanctions,
  SideNavSettings,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";
import { useTranslation } from "react-i18next";
import SidebarBottom from "./SidebarBottom";

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isRtl, setIsRtl] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [subMenuHeight, setSubMenuHeight] = useState({});
  const subMenuRefs = useRef({});

  // Memoized navigation items configuration
const navItems = useMemo(() => [
  {
    icon: <SideNavDashboard />,
    name: "SIDEBAR.DASHBOARD",
    path: "/"
  },
  {
    icon: <SideNavUser />,
    name: "SIDEBAR.CUSTOMER",
    subItems: [
      { name: "SIDEBAR.PERMANENT_CUSTOMERS", path: "/customer/permanent-customers" },
      { name: "SIDEBAR.TEMPORARY_CUSTOMERS", path: "/customer/temporary-customers" },
      { name: "SIDEBAR.CORPORATE_CUSTOMERS", path: "/customer/corporate-customers" },
      { name: "SIDEBAR.CUSTOMER_DEPOSIT_ACCOUNT", path: "/customer/customer-deposit-account" }
    ]
  },
  {
    icon: <SideNavFinance />,
    name: "SIDEBAR.FINANCIAL_SERVICES",
    subItems: [
      { name: "SIDEBAR.CURRENCY_CONVERSION", path: "/financial-services/currency-conversion" },
      { name: "SIDEBAR.SEND_CURRENCY", path: "/financial-services/send-currency" },
      { name: "SIDEBAR.RECEIVE_CURRENCY", path: "/financial/receive-currency" },
      { name: "SIDEBAR.ACCOUNT_TO_ACCOUNT_TRANSFER", path: "/financial/account-transfer" },
      { name: "SIDEBAR.DEPOSIT_TO_SAVINGS", path: "/financial/deposit-savings" },
      { name: "SIDEBAR.CUSTOMER_TRANSACTION_HISTORY", path: "/financial/transaction-history" }
    ]
  },
  {
    icon: <SideNavReport />,
    name: "SIDEBAR.REPORTS",
    subItems: [
      { name: "SIDEBAR.EXCHANGE_FINANCIAL_STATUS", path: "/reports/exchange-financial-status" },
      { name: "SIDEBAR.BRANCH_INDICATOR_REPORT", path: "/reports/branch-indicator" },
      { name: "SIDEBAR.PROFIT_AND_LOSS", path: "/reports/profit-loss" },
      { name: "SIDEBAR.CURRENCY_EXCHANGE_REPORT", path: "/reports/currency-exchange" },
      { name: "SIDEBAR.CURRENCY_SENDING_REPORT", path: "/reports/currency-sending" },
      { name: "SIDEBAR.DELETED_TRANSACTIONS", path: "/reports/deleted-transactions" },
      { name: "SIDEBAR.TOTAL_TRANSFERS_REPORT", path: "/reports/total-transfers" }
    ]
  },
  {
    icon: <SideNavUserGroup />,
    name: "SIDEBAR.HUMAN_RESOURCES",
    subItems: [
      { name: "SIDEBAR.EMPLOYEES", path: "/hr/employees" },
      { name: "SIDEBAR.SHAREHOLDERS", path: "/hr/shareholders" },
      { name: "SIDEBAR.ORGANIZATIONAL_STRUCTURE", path: "/hr/organizational-structure" }
    ]
  },
  {
    icon: <SideNavAsset />,
    name: "SIDEBAR.ASSETS",
    subItems: [
      { name: "SIDEBAR.BRANCH_CAPITAL", path: "/assets/branch-capital" },
      { name: "SIDEBAR.BANK_CAPITAL", path: "/assets/bank-capital" },
      { name: "SIDEBAR.EXPENSES", path: "/assets/expenses" },
      { name: "SIDEBAR.OTHER_ITEMS", path: "/assets/other-items" }
    ]
  },
  {
    icon: <SideNavSpecialTransactions />,
    name: "SIDEBAR.SPECIAL_TRANSACTIONS",
    subItems: [
      {
        name: "SIDEBAR.LARGE_CASH_TRANSACTIONS",
        subItems: [
          { name: "SIDEBAR.INDIVIDUAL_LARGE_CASH", path: "/special/large-cash/individual" },
          { name: "SIDEBAR.REPEATED_LARGE_CASH", path: "/special/large-cash/repeated" }
        ]
      },
      {
        name: "SIDEBAR.SUSPICIOUS_TRANSACTIONS",
        subItems: [
          { name: "SIDEBAR.LARGE_SUSPICIOUS_CASH", path: "/special/suspicious/large-cash" },
          { name: "SIDEBAR.INDIVIDUAL_SUSPICIOUS", path: "/special/suspicious/individual" }
        ]
      },
      { name: "SIDEBAR.BORDER_PROVINCES", path: "/special/border-provinces" }
    ]
  },
  {
    icon: <SideNavLiabilities />,
    name: "SIDEBAR.LIABILITIES_AND_PAYMENTS",
    path: "/liabilities"
  },
  {
    icon: <SideNavSanctions />,
    name: "SIDEBAR.SANCTIONS_LIST_COMPLIANCE",
    path: "/sanctions"
  },
  {
    icon: <SideNavSettings />,
    name: "SIDEBAR.SETTINGS",
    subItems: [
      { name: "SIDEBAR.SYSTEM_ACCOUNT", path: "/settings/system-account" },
      { name: "SIDEBAR.BRANCH", path: "/settings/branch" },
      { name: "SIDEBAR.USER", path: "/settings/user" },
      { name: "SIDEBAR.SYSTEM_INFORMATION", path: "/settings/system-information" },
      { name: "SIDEBAR.BIOMETRIC", path: "/settings/biometric" },
      { name: "SIDEBAR.BACKUP_SYSTEM_DATA", path: "/settings/backup-data" },
      { name: "SIDEBAR.CURRENCY", path: "/settings/currency" }
    ]
  }
], []);


  const othersItems = useMemo(() => [
    // {
    //   icon: <UserIcon />,
    //   name: "PROFILE",
    //   path: "/profile",
    // }
  ], []);

  // RTL detection
  useEffect(() => {
    setIsRtl(i18n.dir() === "rtl");
  }, [i18n.language]);

  // Active route detection
  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  // Submenu auto-expand logic
  useEffect(() => {
    let submenuMatched = false;
    
    const checkSubItems = (items, menuType) => {
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({ type: menuType, index });
              submenuMatched = true;
            }
          });
        }
      });
    };

    checkSubItems(navItems, "main");
    checkSubItems(othersItems, "others");

    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [location.pathname, isActive]);

  // Calculate submenu height when opened
  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  // Toggle submenu
  const handleSubmenuToggle = (index, menuType) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (prevOpenSubmenu?.type === menuType && prevOpenSubmenu?.index === index) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  // Render menu items
  const renderMenuItems = useCallback((items, menuType) => (
    <ul className="flex flex-col gap-1">
      {items.map((nav, index) => (
        <li key={`${menuType}-${index}-${nav.name}`}>
          {nav.subItems && nav.subItems.length > 0 ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={`menu-item-icon-size ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{t(nav.name)}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="text-sm font-normal menu-item-text">
                    {t(nav.name)}
                  </span>
                )}
              </Link>
            )
          )}
          {nav.subItems && nav.subItems.length > 0 && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {t(subItem.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  ), [openSubmenu, isExpanded, isHovered, isMobileOpen, isActive, t, subMenuHeight]);

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-[calc(100vh-4rem)] sm:h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : isRtl ? "translate-x-full" : "-translate-x-full"}
        lg:translate-x-0
        ${isRtl ? "right-0 border-l border-r-0" : "left-0 border-r border-l-0"}
      `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Section */}
      <div
        className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEdmbtnM6XzTWvM6mwvLIlg-ludm_CuQ-UA&s"
                alt="Logo"
                width={60}
                height={40}
              />
              <img
                className="hidden dark:block rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEdmbtnM6XzTWvM6mwvLIlg-ludm_CuQ-UA&s"
                alt="Logo"
                width={60}
                height={40}
              />
            </>
          ) : (
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEdmbtnM6XzTWvM6mwvLIlg-ludm_CuQ-UA&s" alt="Logo" width={32} height={32} />
          )}
        </Link>
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? "" : <HorizontaLDots className="size-6" />}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>

            <div>
              <h2
                className={`mb-4 font-bold text-xs uppercase flex leading-[20px] text-black-400 ${
                  !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? t('GENERAL') : <HorizontaLDots />}
              </h2>
              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? <SidebarBottom /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;