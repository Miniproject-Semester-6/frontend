import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function AddExpenseForm({
  budget,
  expense,
  setExpense,
  createExpense,
}) {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Add New Expense</h2>
      <form
        className="grid-sm"
        onSubmit={(e) => {
          e.preventDefault();
          createExpense(expense);
        }}
      >
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense">Expense Name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g. Invoices"
              required
              value={expense.name}
              onChange={(e) => setExpense({ ...expense, name: e.target.value })}
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Amount</label>
            <input
              type="number"
              step="0.01"
              inputMode=" decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="e.g. ₹4,000"
              required
              min={0}
              value={expense.amount}
              onChange={(e) =>
                setExpense({ ...expense, amount: e.target.value })
              }
            />
          </div>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" className="btn btn--dark">
          <span>Add Expense</span>
          <PlusCircleIcon width={20} />
        </button>
      </form>
    </div>
  );
}
