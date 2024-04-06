import AddBudgetForm from "components/home/AddBudgetForm";
import BudgetItem from "components/home/BudgetItem";
import { budgets } from "constants/constant";
import { formatCurrency } from "helpers/helpers";

function Home() {
  return (
    <div className="dashboard">
      <h1>
        Welcome back, <span className="accent">User name here</span>
      </h1>
      <div className="grid-sm">
        {budgets && budgets.length > 0 ? (
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm />
              <div className="flex-col-lg">
                <div className="flex-col-sm">
                  <h2>Organization Budget</h2>
                  <h2 className="accent">{formatCurrency(20000000)}</h2>
                </div>
                <div className="flex-col-sm">
                  <h2>Budget Allocated</h2>
                  <h2 className="accent">{formatCurrency(2000000)}</h2>
                </div>
              </div>
            </div>
            <h2>Existing Budget</h2>
            <div className="budgets">
              {budgets.map((budget) => (
                <BudgetItem key={budget.id} budget={budget} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid-sm">
            <p>Personal budgeting is the secret to financial freedom.</p>
            <p>Create a budget to get started!</p>
            <AddBudgetForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
