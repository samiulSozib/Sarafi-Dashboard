import Chart from "react-apexcharts";

export default function FinancialGrowthChart() {
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
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
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
        text: "Amount",
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
    name: "Loss",
    data: [85, 25, 10, 75, 15, 20, 60, 30, 10, 5, 40, 35],
  },
  {
    name: "Profit",
    data: [10, 90, 95, 20, 85, 10, 15, 100, 25, 80, 30, 45],
  },
  {
    name: "Income",
    data: [20, 35, 40, 50, 60, 100, 30, 25, 90, 45, 55, 70],
  }
];


  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Financial Growth</h2>
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