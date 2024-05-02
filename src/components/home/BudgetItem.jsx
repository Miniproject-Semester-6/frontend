import { Link } from "react-router-dom";
import { BanknotesIcon } from "@heroicons/react/24/solid";

import { formatCurrency, formatPercentage } from "helpers/helpers";

export default function BudgetItem({ budget, hideBtn }) {
  const { name, _id, color, amount, spend } = budget;

  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spend}>
        {formatPercentage(spend / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spend)} spent</small>
        <small>{formatCurrency(amount - spend)} remaining</small>
      </div>

      {!hideBtn && (
        <div className="flex-sm">
          <Link to={`/budget-overview/${_id}`} className="btn">
            <span>Edit Budget</span>
            <BanknotesIcon width={20} />
          </Link>
        </div>
      )}
    </div>
  );
}
