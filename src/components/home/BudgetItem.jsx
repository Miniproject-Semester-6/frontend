import { Link } from "react-router-dom";
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/solid";

import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "helpers/helpers";
import { allExpenses } from "constants/constant";

export default function BudgetItem({ budget, showDelete = false }) {
  const { name, id, amount, color } = budget;

  const spent = calculateSpentByBudget(id, allExpenses);

  return (
    <div
      className="budget"
      style={{
        "--accent": color,
      }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <form>
            <button type="submit" className="btn">
              <span>Delete Budget</span>
              <TrashIcon width={20} />
            </button>
          </form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget-overview/${id}`} className="btn">
            <span>Edit Budget</span>
            <BanknotesIcon width={20} />
          </Link>
        </div>
      )}
    </div>
  );
}
