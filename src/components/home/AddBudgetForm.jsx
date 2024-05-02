import { CurrencyRupeeIcon } from "@heroicons/react/24/solid";

export default function AddBudgetForm({ budget, setBudget, createBudget }) {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <form
        className="grid-sm"
        onSubmit={(e) => {
          e.preventDefault();
          createBudget(budget);
        }}
      >
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g. Finance"
            required
            value={budget.name}
            onChange={(e) => setBudget({ ...budget, name: e.target.value })}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g. ₹24,000"
            required
            inputMode="decimal"
            min={0}
            value={budget.amount}
            onChange={(e) => setBudget({ ...budget, amount: e.target.value })}
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark">
          <span>Create budget</span>
          <CurrencyRupeeIcon width={20} />
        </button>
      </form>
    </div>
  );
}
