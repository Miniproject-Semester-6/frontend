import AddBudgetForm from "components/home/AddBudgetForm";
import BudgetItem from "components/home/BudgetItem";
import { budgets } from "constants/constant";

function Home() {
  return (
    <div className="dashboard">
      <h1>
        Welcome back, <span className="accent">XYZ</span>
      </h1>
      <div className="grid-sm">
        {budgets && budgets.length > 0 ? (
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm />
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
