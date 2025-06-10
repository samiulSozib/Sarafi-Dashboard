import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

export default function AccountSummary() {
  const { t } = useTranslation();
  const options = {
    chart: {
      type: "donut",
      fontFamily: "Outfit, sans-serif",
    },
    labels: [t("HOME.CUSTOMER_WITHDRAWALS"), t("HOME.CUSTOMER_DEPOSIT")],
    colors: ["#FFD700", "#2E7D32"], // Yellow and Green
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    stroke: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: t('COMMON.TOTAL'),
              formatter: function () {
                return "23.944 AFN";
              },
            },
          },
        },
      },
    },
  };

  const series = [26, 74]; // Percentages (must total 100 for a pie/donut chart)

  return (
    <div className="bg-white rounded-lg p-4 shadow-md text-center">
      <div className="flex flex-row items-center gap-x-2">
        <span className="font-semibold">{t("HOME.ACCOUNT_SUMMARY")}</span>
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
            fill="#1890FF"
            fill-opacity="0.05"
          />
          <path
            d="M17.5 9.25C19.8206 9.25 22.0466 10.1716 23.6875 11.8125C25.3284 13.4534 26.25 15.6794 26.25 18C26.25 22.8325 22.3325 26.75 17.5 26.75C12.6675 26.75 8.75 22.8325 8.75 18C8.75 13.1675 12.6675 9.25 17.5 9.25ZM17.5 11C13.634 11 10.5 14.134 10.5 18C10.5 21.866 13.634 25 17.5 25C19.3565 25 21.1374 24.2629 22.4502 22.9502C23.7629 21.6374 24.5 19.8565 24.5 18C24.5 14.134 21.366 11 17.5 11ZM17.5 13.625C19.9162 13.625 21.875 15.5838 21.875 18C21.875 20.4162 19.9162 22.375 17.5 22.375C15.0838 22.375 13.125 20.4162 13.125 18C13.125 15.5838 15.0838 13.625 17.5 13.625Z"
            fill="#1890FF"
          />
        </svg>
      </div>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={320}
      />
      <div className=" text-sm flex flex-col justify-items-start">
        <div className="flex items-center  gap-2 mb-1">
          <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block" />
          <span>{t("HOME.CUSTOMER_WITHDRAWALS")}: 26%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-700 rounded-full inline-block" />
          <span>{t("HOME.CUSTOMER_DEPOSIT")}: 74%</span>
        </div>
      </div>
    </div>
  );
}
