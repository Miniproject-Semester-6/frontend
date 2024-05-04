import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import restClient from "restClient";
import BudgetItem from "components/home/BudgetItem";
import { LineChart } from "components/charts/LineChart";
import {
  formatCurrency,
  formatDate,
  formateDateToLocalestring,
  getDatesInCurrentMonth,
  getMonthStartAndEndDate,
} from "helpers/helpers";

export default function BudgetAnalysis() {
  const { id: budgetid } = useParams();
  const orgid = localStorage.getItem("orgid");

  const [budget, setBudget] = useState({});
  const [expenses, setExpenses] = useState([]);
  const [forecastedExpenses, setForecastedExpenses] = useState([]);

  const { startDate, endDate } = getMonthStartAndEndDate();
  const dateArray = getDatesInCurrentMonth();
  const forecastY = dateArray.map((date) => {
    const forecast = forecastedExpenses.find(
      (item) =>
        formateDateToLocalestring(item.date) ===
        formateDateToLocalestring(date),
    );
    return forecast ? forecast.expenses : 0;
  });
  const expenseY = dateArray.map((date) => {
    const expense = expenses.find(
      (item) =>
        formateDateToLocalestring(item.createdAt) ===
        formateDateToLocalestring(date),
    );
    return expense ? expense.amount : 0;
  });

  console.log(forecastY, expenseY);
  console.log(dateArray);

  const getExpenses = async () => {
    try {
      const { data: response } = await restClient({
        method: "GET",
        url: `/expense?budgetid=${budgetid}&startDate=${startDate}&endDate=${endDate}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === "success") {
        setExpenses(
          response.data.expenses.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          ),
        );
        setBudget(response.data.budget);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getForecastedExpenses = async () => {
    try {
      const { data: response } = await restClient({
        method: "GET",
        url: `/models/forecast?budgetid=${budgetid}&orgid=${orgid}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === "success") setForecastedExpenses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExpenses();
    getForecastedExpenses();
  }, [budgetid]);

  return (
    <div
      className="grid-lg"
      style={{
        "--accent": budget.color,
      }}
    >
      <div className="flex-lg">
        <BudgetItem budget={budget} hideBtn={true} />
      </div>

      <div className="grid-lg">
        <h2>
          <span className="accent">Expense and Forecast</span>
        </h2>
        <div style={{ height: "400px" }}>
          <LineChart
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    callback: function (value) {
                      return formatCurrency(value);
                    },
                  },
                },
              },
            }}
            data={{
              labels: dateArray.map((date) => formatDate(date)),
              datasets: [
                {
                  label: "Forecast",
                  data: forecastY,
                  backgroundColor: "#20c997",
                  borderColor: "#63e6be",
                },
                {
                  label: "Expense",
                  data: expenseY,
                  backgroundColor: "#4dabf7",
                  borderColor: "#74c0fc",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
