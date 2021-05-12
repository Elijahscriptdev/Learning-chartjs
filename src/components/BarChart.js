import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "level of thiccness",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <h1>BAR CHART</h1>
      <Bar
      data={chartData}
        // data={{
        //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //   datasets: [
        //     {
        //       label: "# of Votes",
        //       data: chartData,
        //       backgroundColor: [
        //         "rgba(255, 99, 132, 0.2)",
        //         "rgba(54, 162, 235, 0.2)",
        //         "rgba(255, 206, 86, 0.2)",
        //         "rgba(75, 192, 192, 0.2)",
        //         "rgba(153, 102, 255, 0.2)",
        //         "rgba(255, 159, 64, 0.2)",
        //       ],
        //       borderColor: [
        //         "rgba(255, 99, 132, 1)",
        //         "rgba(54, 162, 235, 1)",
        //         "rgba(255, 206, 86, 1)",
        //         "rgba(75, 192, 192, 1)",
        //         "rgba(153, 102, 255, 1)",
        //         "rgba(255, 159, 64, 1)",
        //       ],
        //       borderWidth: 1,
        //     },
        //   ],
        // }}
        weight={150}
        height={80}
        options={{
          maintainAspectRatio: true,
        }}
      />
      <h1>goat</h1>
    </div>
  );
};

export default BarChart;
