import { formatCurrency, formateDateToLocalestring } from "helpers/helpers";

// import { TrashIcon } from "@heroicons/react/24/solid";

export default function ExpenseItem({ expense, showBudget }) {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formateDateToLocalestring(expense.createdAt)}</td>
      <td>
        {/* <button
          type="submit"
          className="btn btn--warning"
          aria-label={`Delete ${expense.name} expense`}
        >
          <TrashIcon width={20} />
        </button> */}
      </td>
    </>
  );
}
