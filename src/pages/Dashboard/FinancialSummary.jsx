import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

export default function FinancialSummary() {
    const {t}=useTranslation()
  const options = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ["#FF4560", "#00E396", "#FEB019"], // Red, Green, Yellow
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 0, // Removed rounded corners
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false, // Removed borders
    },
    xaxis: {
      categories: [
        t('HOME.JANUARY'), t('HOME.FEBRUARY'), t('HOME.MARCH'), t('HOME.APRIL'), t('HOME.MAY'),
         t('HOME.JUNE'), t('HOME.JULY'), t('HOME.AUGUST'), t('HOME.SEPTEMBER'), t('HOME.OCTOBER'), t('HOME.NOVEMBER'), t('HOME.DECEMBER')
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: t('COMMON.AMOUNT'),
      },
      labels: {
        formatter: function (val) {
          return "$" + val;
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      markers: {
        radius: 0, // Square legend markers
      },
      itemMargin: {
        horizontal: 10,
      },
    },
    grid: {
      borderColor: "#f1f1f1",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val;
        },
      },
    },
  };

const series = [
  {
    name: t('HOME.LOSS(RED)'),
    data: [85, 25, 10, 75, 15, 20, 60, 30, 10, 5, 40, 35],
  },
  {
    name: t('HOME.PROFIT(GREEN)'),
    data: [10, 90, 95, 20, 85, 10, 15, 100, 25, 80, 30, 45],
  },
  {
    name: t('HOME.INCOME(YELLOW)'),
    data: [20, 35, 40, 50, 60, 100, 30, 25, 90, 45, 55, 70],
  }
];


  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex flex-row items-center gap-x-2">
          <span className="font-semibold">{t("HOME.FINANCIAL_SUMMARY")}</span>
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
      <div id="financial-chart">
        <Chart 
          options={options} 
          series={series} 
          type="bar" 
          height={350} 
        />
      </div>
    </div>
  );
}