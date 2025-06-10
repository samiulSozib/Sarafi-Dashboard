import Button from "../../components/ui/button/Button";
import { useTranslation } from "react-i18next";

export const FinancialSummarySection = () => {
  const { t } = useTranslation();

  const financialSummaryData1 = [
    {
      label: t("HOME.EXCHANGE_BALANCE"),
      value: "",
    },
    {
      label: t("HOME.AFGHAN_DEPOSITED"),
      value: "3,800,000 AFN",
    },
    {
      label: t("HOME.TOMAN_DEPOSITED"),
      value: "5,000,000 IRR",
    },
    {
      label: t("HOME.DOLLAR_DEPOSITED"),
      value: "$50,000",
    },
    {
      label: t("HOME.POUND_DEPOSITED"),
      value: "£35,000",
    },
    {
      label: t("HOME.EURO_DEPOSITED"),
      value: "€40,000",
    },
  ];

  const financialSummaryData2 = [
    {
      label: t("HOME.TOTAL_EXCHANGE_BALANCE"),
      value: "255 AFN",
    },
    {
      label: t("HOME.CURRENT_MONTH_PROFIT"),
      value: "+2.6%",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.16" cx="12.7148" cy="12" r="12" fill="#54D62C" />
          <path
            d="M18.0477 8C18.0997 8.02237 18.1477 8.05441 18.1884 8.09375H18.3212C18.3666 8.10923 18.4096 8.13146 18.4481 8.16016L18.5282 8.20703C18.5646 8.23996 18.5957 8.27825 18.621 8.32031C18.6433 8.34982 18.6639 8.38055 18.6815 8.41309C18.6978 8.44905 18.7089 8.48733 18.7147 8.52637C18.721 8.57282 18.721 8.62054 18.7147 8.66699V12C18.7147 12.3682 18.4159 12.667 18.0477 12.667C17.6797 12.6668 17.3817 12.3681 17.3817 12V10.4668L14.5546 13.7666C14.3439 14.0128 13.9866 14.0716 13.7079 13.9062L10.8612 12.2002L7.89442 15.7598C7.76759 15.912 7.57989 16.0002 7.38173 16C7.22602 16.0003 7.07489 15.946 6.95497 15.8467C6.81863 15.7336 6.73295 15.5709 6.71669 15.3945C6.70046 15.2182 6.7547 15.0423 6.86806 14.9062L10.2011 10.9062C10.4107 10.6543 10.7728 10.5923 11.0546 10.7598L13.9345 12.4736L16.6015 9.33301H14.7147C14.3467 9.33301 14.0479 9.03503 14.0477 8.66699C14.0477 8.2988 14.3465 8 14.7147 8H18.0477Z"
            fill="#54D62C"
          />
        </svg>
      ),
      color: "text-green-500",
    },
    {
      label: t("HOME.CURRENT_MONTH_LOSS"),
      value: "-0.06%",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.16" cx="12.3574" cy="12" r="12" fill="#FF4842" />
          <path
            d="M6.91127 8.0096C7.14631 7.96929 7.38482 8.05766 7.53725 8.24105L10.504 11.8006L13.3507 10.0604C13.6295 9.89511 13.9867 9.95478 14.1974 10.201L17.0246 13.534V12.0008C17.0246 11.6327 17.3225 11.334 17.6906 11.3338C18.0588 11.3338 18.3576 11.6326 18.3576 12.0008V15.3338C18.3538 15.3983 18.3376 15.4617 18.3107 15.5203C18.3049 15.5595 18.2938 15.5986 18.2775 15.6346C18.26 15.667 18.2401 15.698 18.2179 15.7274C18.1926 15.7695 18.1607 15.8077 18.1242 15.8407C18.0924 15.8631 18.0593 15.8837 18.0246 15.9012L17.9308 15.9539C17.854 15.9828 17.7726 15.9988 17.6906 16.0008H14.3576C13.9894 16.0008 13.6906 15.702 13.6906 15.3338C13.6907 14.9658 13.9895 14.6678 14.3576 14.6678H16.2179L13.5509 11.5272L10.6974 13.2411C10.4157 13.4085 10.0535 13.3465 9.84389 13.0946L6.51088 9.09457C6.3585 8.91124 6.31511 8.66001 6.3976 8.43636C6.4802 8.21269 6.67628 8.04995 6.91127 8.0096Z"
            fill="#FF4842"
          />
        </svg>
      ),
      color: "text-red-500",
    },
    {
      label: t("HOME.REGULAR_CUSTOMERS"),
      value: "3 people",
    },
    {
      label: t("HOME.TEMPORARY_CUSTOMERS"),
      value: "3 people",
    },
    {
      label: t("HOME.TOTAL_AGENCIES"),
      value: "1",
    },
    {
      label: t("HOME.TOTAL_CONTRACTS"),
      value: "245",
    },
  ];

  return (
    <div className="col-span-12 bg-[#D1D1FF] mt-2 p-3 rounded-md">
      <div className="flex flex-row justify-between mb-3">
        <div className="flex flex-row items-center gap-x-2">
          <span>{t("HOME.FINANCIAL_SUMMARY")}</span>
          <svg
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.5"
              width="35"
              height="35"
              rx="17.5"
              fill="#00AB55"
              fillOpacity="0.08" // camelCase in JSX
            />
            <path
              d="M17.5 9.25C19.8206 9.25 22.0466 10.1716 23.6875 11.8125C25.3284 13.4534 26.25 15.6794 26.25 18C26.25 22.8325 22.3325 26.75 17.5 26.75C12.6675 26.75 8.75 22.8325 8.75 18C8.75 13.1675 12.6675 9.25 17.5 9.25ZM17.5 11C13.634 11 10.5 14.134 10.5 18C10.5 21.866 13.634 25 17.5 25C19.3565 25 21.1374 24.2629 22.4502 22.9502C23.7629 21.6374 24.5 19.8565 24.5 18C24.5 14.134 21.366 11 17.5 11ZM17.5 13.625C19.9162 13.625 21.875 15.5838 21.875 18C21.875 20.4162 19.9162 22.375 17.5 22.375C15.0838 22.375 13.125 20.4162 13.125 18C13.125 15.5838 15.0838 13.625 17.5 13.625Z"
              fill="#00AB55"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200 mt-1 col-span-12 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
        {financialSummaryData1.map((state, index) => {
          if (!state.value) {
            return (
              <div
                key={index}
                className="p-4 space-y-5 flex flex-col justify-center"
              >
                <div className="flex flex-row justify-center">
                  <span className="text-[#1E00A3] text-[16px] font-bold">
                    {state.label}
                  </span>
                </div>
              </div>
            );
          }
          return (
            <div
              key={index}
              className=" p-4 space-y-5  flex flex-col justify-between"
            >
              <div className="flex flex-row justify-center">
                <span className="text-gray-400 text-[12px]">{state.label}</span>
              </div>

              <div className="flex flex-row justify-center">
                {state.icon && state.icon}
                <span
                  className={`text-[16px] font-semibold ${
                    state.color ?? "text-[#000000]"
                  }`}
                >
                  {state.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 col-span-12 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-7 gap-2 sm:gap-3">
        {financialSummaryData2.map((state, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 space-y-5 border border-gray-100 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
            >
              <div className="flex flex-row justify-center">
                <span className="text-gray-400 text-[12px]">{state.label}</span>
              </div>

              <div className="flex flex-row justify-center">
                {state.icon && state.icon}
                <span
                  className={`text-[16px] font-semibold ${
                    state.color ?? "text-[#1E00A3]"
                  }`}
                >
                  {state.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
