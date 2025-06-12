import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import { GreenSignal } from "../../icons";

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
          <GreenSignal className="w-9 h-9"/>
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