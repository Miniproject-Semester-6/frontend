import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import restClient from "restClient";
import BudgetItem from "components/home/BudgetItem";
import AddExpenseForm from "components/budgetOverview/AddExpenseForm";
import ExpenseTable from "components/budgetOverview/ExpenseTable";

export default function BudgetOverview() {
  const { id: budgetid } = useParams();
  const orgid = localStorage.getItem("orgid");

  const [budget, setBudget] = useState({});
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({ name: "", amount: "" });

  const getExpenses = async () => {
    try {
      const { data: response } = await restClient({
        method: "GET",
        url: `/expense?budgetid=${budgetid}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === "success") {
        setExpenses(
          response.data.expenses.sort((a, b) =>
            a.createdAt < b.createdAt ? 1 : -1,
          ),
        );
        setBudget(response.data.budget);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createExpense = async (expense) => {
    try {
      const { data: response } = await restClient({
        method: "POST",
        url: "/expense",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          ...expense,
          budget: budgetid,
          organization: orgid,
        },
      });

      if (response.status === "success") {
        getExpenses();
        setExpense({ name: "", amount: "" });
        toast.success("Expense created successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getExpenses();
  }, [budgetid]);

  return (
    <div
      className="grid-lg"
      style={{
        "--accent": budget.color,
      }}
    >
      <h1 className="h2">
        <span className="accent">{budget.name} </span>
        Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} hideBtn={true} />
        <AddExpenseForm
          {...{
            budget,
            expense,
            setExpense,
            createExpense,
          }}
        />
      </div>

      <div className="grid-md">
        <h2>
          <span className="accent">{budget.name} Expenses</span>
        </h2>
        {expenses.length !== 0 && (
          <ExpenseTable expenses={expenses} showBudget={false} />
        )}
      </div>
    </div>
  );
}
