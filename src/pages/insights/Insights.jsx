import { useEffect, useState } from "react";

import restClient from "restClient";
import BudgetItemAnalysis from "components/home/BudgetItemAnalysis";
import { formatCurrency } from "helpers/helpers";

function Insights() {
  const orgid = localStorage.getItem("orgid");

  const [budgets, setBudgets] = useState([]);
  const [organization, setOrganization] = useState({});

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
          response.data.budgets.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          ),
        );
        setOrganization(response.data.organization);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBudgets();
  }, []);

  return (
    <div className="dashboard">
      <div className="grid-lg">
        <div className="flex-lg">
          <div className="flex-col-sm">
            <h2>Organization Budget</h2>
            <h2 className="accent">{formatCurrency(organization.budget)}</h2>
          </div>
          <div className="flex-col-sm">
            <h2>Budget Allocated</h2>
            <h2 className="accent">{formatCurrency(organization.spend)}</h2>
          </div>
        </div>

        <h2>Existing Budgets</h2>
        <div className="budgets">
          {budgets.map((budget) => (
            <BudgetItemAnalysis key={budget._id} budget={budget} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Insights;
