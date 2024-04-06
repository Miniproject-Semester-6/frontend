// library
import { useRef } from "react";
import { CurrencyRupeeIcon } from "@heroicons/react/24/solid";

export default function AddBudgetForm() {
  const formRef = useRef();
  const focusRef = useRef();

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <form className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget"> Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g. ₹359"
            required
            inputMode="decimal"
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
