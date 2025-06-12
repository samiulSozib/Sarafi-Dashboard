import Button from "../../components/ui/button/Button";
import { useTranslation } from "react-i18next";
import { GreenSignal } from "../../icons";

export const CurrencyExchangeRateSection = () => {
  const { t } = useTranslation();
  return (
    <div className="col-span-12 bg-[#e9f3fa] mt-2 p-3 rounded-md">
      <div className="flex flex-row justify-between mb-3">
        <div className="flex flex-row items-center gap-x-2">
          <span>{t("HOME.CURRENCY_EXCHANGE_RATES")}</span>
          <GreenSignal className="w-9 h-9"/>
        </div>

        <Button
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
          {t("HOME.ADD_NEW_CURRENCY")}
        </Button>
      </div>
      <div className="mt-1 col-span-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-">
        <div className="bg-white rounded-xl shadow-md p-4 space-y-3 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-row justify-between">
            <span className="text-gray-400">EURO</span>
            <span className="pr-[30px]">EUR</span>
          </div>

          <div className="flex flex-row justify-end items-center gap-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.16" cx="12" cy="12" r="12" fill="#FF4842" />
              <path
                d="M6.55385 8.0096C6.78889 7.96929 7.02739 8.05766 7.17983 8.24105L10.1466 11.8006L12.9933 10.0604C13.272 9.89511 13.6293 9.95478 13.84 10.201L16.6671 13.534V12.0008C16.6671 11.6327 16.9651 11.334 17.3331 11.3338C17.7013 11.3338 18.0001 11.6326 18.0001 12.0008V15.3338C17.9963 15.3983 17.9802 15.4617 17.9533 15.5203C17.9475 15.5595 17.9364 15.5986 17.9201 15.6346C17.9025 15.667 17.8827 15.698 17.8605 15.7274C17.8351 15.7695 17.8032 15.8077 17.7667 15.8407C17.735 15.8631 17.7019 15.8837 17.6671 15.9012L17.5734 15.9539C17.4966 15.9828 17.4152 15.9988 17.3331 16.0008H14.0001C13.6319 16.0008 13.3331 15.702 13.3331 15.3338C13.3333 14.9658 13.6321 14.6678 14.0001 14.6678H15.8605L13.1935 11.5272L10.34 13.2411C10.0582 13.4085 9.6961 13.3465 9.48647 13.0946L6.15346 9.09457C6.00108 8.91124 5.95769 8.66001 6.04018 8.43636C6.12277 8.21269 6.31886 8.04995 6.55385 8.0096Z"
                fill="#FF4842"
              />
            </svg>

            <span className="text-red-500">-0.07%</span>
            <img
              className="h-[40px] w-[40px]"
              src="/images/country/country-07.svg"
              alt=""
            />
          </div>

          <div className="flex flex-row justify-between">
            <span>9.770 AFN</span>
            <span className="pr-[30px] text-gray-400">Amount</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 space-y-3 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-row justify-between">
            <span className="text-gray-400">EURO</span>
            <span className="pr-[30px]">EUR</span>
          </div>

          <div className="flex flex-row justify-end items-center gap-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.16" cx="12" cy="12" r="12" fill="#54D62C" />
              <path
                d="M17.3329 8C17.3848 8.02237 17.4329 8.05441 17.4735 8.09375H17.6063C17.6518 8.10923 17.6948 8.13146 17.7333 8.16016L17.8134 8.20703C17.8498 8.23996 17.8808 8.27825 17.9061 8.32031C17.9284 8.34982 17.9491 8.38055 17.9667 8.41309C17.983 8.44905 17.9941 8.48733 17.9999 8.52637C18.0062 8.57282 18.0062 8.62054 17.9999 8.66699V12C17.9999 12.3682 17.7011 12.667 17.3329 12.667C16.9649 12.6668 16.6669 12.3681 16.6669 12V10.4668L13.8397 13.7666C13.6291 14.0128 13.2718 14.0716 12.9931 13.9062L10.1464 12.2002L7.17958 15.7598C7.05274 15.912 6.86505 16.0002 6.66688 16C6.51118 16.0003 6.36004 15.946 6.24013 15.8467C6.10379 15.7336 6.0181 15.5709 6.00185 15.3945C5.98561 15.2182 6.03986 15.0423 6.15321 14.9062L9.48622 10.9062C9.69585 10.6543 10.058 10.5923 10.3397 10.7598L13.2196 12.4736L15.8866 9.33301H13.9999C13.6318 9.33301 13.3331 9.03503 13.3329 8.66699C13.3329 8.2988 13.6317 8 13.9999 8H17.3329Z"
                fill="#54D62C"
              />
            </svg>

            <span className="text-green-500">+2.07%</span>
            <img
              className="h-[40px] w-[40px]"
              src="/images/country/country-07.svg"
              alt=""
            />
          </div>

          <div className="flex flex-row justify-between">
            <span>9.770 AFN</span>
            <span className="pr-[30px] text-gray-400">Amount</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 space-y-3 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-row justify-between">
            <span className="text-gray-400">EURO</span>
            <span className="pr-[30px]">EUR</span>
          </div>

          <div className="flex flex-row justify-end items-center gap-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.16" cx="12" cy="12" r="12" fill="#FF4842" />
              <path
                d="M6.55385 8.0096C6.78889 7.96929 7.02739 8.05766 7.17983 8.24105L10.1466 11.8006L12.9933 10.0604C13.272 9.89511 13.6293 9.95478 13.84 10.201L16.6671 13.534V12.0008C16.6671 11.6327 16.9651 11.334 17.3331 11.3338C17.7013 11.3338 18.0001 11.6326 18.0001 12.0008V15.3338C17.9963 15.3983 17.9802 15.4617 17.9533 15.5203C17.9475 15.5595 17.9364 15.5986 17.9201 15.6346C17.9025 15.667 17.8827 15.698 17.8605 15.7274C17.8351 15.7695 17.8032 15.8077 17.7667 15.8407C17.735 15.8631 17.7019 15.8837 17.6671 15.9012L17.5734 15.9539C17.4966 15.9828 17.4152 15.9988 17.3331 16.0008H14.0001C13.6319 16.0008 13.3331 15.702 13.3331 15.3338C13.3333 14.9658 13.6321 14.6678 14.0001 14.6678H15.8605L13.1935 11.5272L10.34 13.2411C10.0582 13.4085 9.6961 13.3465 9.48647 13.0946L6.15346 9.09457C6.00108 8.91124 5.95769 8.66001 6.04018 8.43636C6.12277 8.21269 6.31886 8.04995 6.55385 8.0096Z"
                fill="#FF4842"
              />
            </svg>

            <span className="text-red-500">-0.07%</span>
            <img
              className="h-[40px] w-[40px]"
              src="/images/country/country-07.svg"
              alt=""
            />
          </div>

          <div className="flex flex-row justify-between">
            <span>9.770 AFN</span>
            <span className="pr-[30px] text-gray-400">Amount</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 space-y-3 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-row justify-between">
            <span className="text-gray-400">EURO</span>
            <span className="pr-[30px]">EUR</span>
          </div>

          <div className="flex flex-row justify-end items-center gap-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.16" cx="12" cy="12" r="12" fill="#FF4842" />
              <path
                d="M6.55385 8.0096C6.78889 7.96929 7.02739 8.05766 7.17983 8.24105L10.1466 11.8006L12.9933 10.0604C13.272 9.89511 13.6293 9.95478 13.84 10.201L16.6671 13.534V12.0008C16.6671 11.6327 16.9651 11.334 17.3331 11.3338C17.7013 11.3338 18.0001 11.6326 18.0001 12.0008V15.3338C17.9963 15.3983 17.9802 15.4617 17.9533 15.5203C17.9475 15.5595 17.9364 15.5986 17.9201 15.6346C17.9025 15.667 17.8827 15.698 17.8605 15.7274C17.8351 15.7695 17.8032 15.8077 17.7667 15.8407C17.735 15.8631 17.7019 15.8837 17.6671 15.9012L17.5734 15.9539C17.4966 15.9828 17.4152 15.9988 17.3331 16.0008H14.0001C13.6319 16.0008 13.3331 15.702 13.3331 15.3338C13.3333 14.9658 13.6321 14.6678 14.0001 14.6678H15.8605L13.1935 11.5272L10.34 13.2411C10.0582 13.4085 9.6961 13.3465 9.48647 13.0946L6.15346 9.09457C6.00108 8.91124 5.95769 8.66001 6.04018 8.43636C6.12277 8.21269 6.31886 8.04995 6.55385 8.0096Z"
                fill="#FF4842"
              />
            </svg>

            <span className="text-red-500">-0.07%</span>
            <img
              className="h-[40px] w-[40px]"
              src="/images/country/country-07.svg"
              alt=""
            />
          </div>

          <div className="flex flex-row justify-between">
            <span>9.770 AFN</span>
            <span className="pr-[30px] text-gray-400">Amount</span>
          </div>
        </div>
      </div>
    </div>
  );
};
