import Chart from "react-apexcharts";

export default function FinancialGrowthChart2() {
  const options = {
    chart: {
      type: "donut",
      fontFamily: "Outfit, sans-serif",
    },
    labels: ["Customer Withdrawals", "Customer Deposits"],
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
              label: "Total",
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
      <h2 className="text-md font-semibold mb-4">Account Summary</h2>
      <Chart options={options} series={series} type="donut" width="100%" height={320}/>
      <div className=" text-sm">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block" />
          <span>Customer Withdrawals: 26%</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 bg-green-700 rounded-full inline-block" />
          <span>Customer Deposits: 74%</span>
        </div>
      </div>
    </div>
  );
}
