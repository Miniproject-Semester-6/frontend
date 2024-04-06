import AddExpenseForm from "components/budgetOverview/AddExpenseForm";
import ExpenseTable from "components/budgetOverview/ExpenseTable";
import BudgetItem from "components/home/BudgetItem";
import { budgets, allExpenses } from "constants/constant";

export default function BudgetOverview() {
  const budget = budgets[0];
  const expenses = allExpenses;

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
        <BudgetItem budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]} />
      </div>

      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name} Expenses</span>
          </h2>
          <ExpenseTable expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
}
