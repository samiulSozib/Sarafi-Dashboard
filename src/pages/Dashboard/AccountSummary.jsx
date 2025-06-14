import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import { BlueSignal } from "../../icons";

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
        <BlueSignal className="w-6 h-6"/>
        <span className="font-semibold">{t("HOME.ACCOUNT_SUMMARY")}</span>
        
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
