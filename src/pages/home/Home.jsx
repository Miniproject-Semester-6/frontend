import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import restClient from "restClient";
import AddBudgetForm from "components/home/AddBudgetForm";
import BudgetItem from "components/home/BudgetItem";
import { formatCurrency } from "helpers/helpers";

function Home() {
  const orgid = localStorage.getItem("orgid");
  const username = localStorage.getItem("username");
  const userrole = localStorage.getItem("role");

  const [budgets, setBudgets] = useState([]);
  const [organization, setOrganization] = useState({});
  const [budget, setBudget] = useState({ name: "", amount: "" });

  const getBudgets = async () => {
    try {
      const { data: response } = await restClient({
        method: "GET",
        url: `/budget?orgid=${orgid}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === "success") {
        setBudgets(
          response.data.budgets.sort((a, b) =>
            a.createdAt < b.createdAt ? 1 : -1,
          ),
        );
        setOrganization(response.data.organization);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createBudget = async (budget) => {
    try {
      const { data: response } = await restClient({
        method: "POST",
        url: "/budget",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          ...budget,
          organization: orgid,
        },
      });

      if (response.status === "success") {
        getBudgets();
        setBudget({ name: "", amount: "" });
        toast.success("Budget created successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getBudgets();
  }, []);

  return (
    <div className="dashboard">
      <h1>
        Welcome back, <span className="accent">{username}</span>
      </h1>
      <p>
        You are <span className="accent">{userrole}</span> in this organization.
      </p>
      <div className="grid-sm">
        <div className="grid-lg">
          <div className="flex-lg">
            <AddBudgetForm
              {...{
                budget,
                setBudget,
                createBudget,
              }}
            />
            <div className="flex-col-lg">
              <div className="flex-col-sm">
                <h2>Organization Budget</h2>
                <h2 className="accent">
                  {formatCurrency(organization.budget)}
                </h2>
              </div>
              <div className="flex-col-sm">
                <h2>Budget Allocated</h2>
                <h2 className="accent">{formatCurrency(organization.spend)}</h2>
              </div>
            </div>
          </div>
          <h2>Existing Budgets</h2>
          <div className="budgets">
            {budgets.map((budget) => (
              <BudgetItem key={budget._id} budget={budget} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
