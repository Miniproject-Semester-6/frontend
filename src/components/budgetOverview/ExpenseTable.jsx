import ExpenseItem from "components/budgetOverview/ExpenseItem";

export default function ExpenseTable({ expenses, showBudget = true }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (i, index) => (
                <th key={index}>{i}</th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id}>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
