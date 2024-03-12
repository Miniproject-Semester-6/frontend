import { Link } from "react-router-dom";
import { formatCurrency, formateDateToLocalestring } from "helpers/helpers";

// library
import { TrashIcon } from "@heroicons/react/24/solid";
import { budgets } from "constants/constant";

export default function ExpenseItem({ expense, showBudget }) {
  const budget = budgets[0];

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formateDateToLocalestring(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link
            to={`/budget/${budget.id}`}
            style={{
              "--accent": budget.color,
            }}
          >
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            type="submit"
            className="btn btn--warning"
            aria-label={`Delete ${expense.name} expense`}
          >
            <TrashIcon width={20} />
          </button>
        </form>
      </td>
    </>
  );
}
