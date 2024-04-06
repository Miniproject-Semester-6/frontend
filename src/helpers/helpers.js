// random color
// const generateRandomColor = (budgets) => {
//   const existingBudgetLength = fetchData("budgets")?.length ?? 0;

//   return `${existingBudgetLength * 34} 65% 50%`;
// };

// total spent by budget
export const calculateSpentByBudget = (budgetId, expenses) => {
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budgetId) return acc;
    return (acc += expense.amount);
  }, 0);

  return budgetSpent;
};

// formatting Date
export const formateDateToLocalestring = (epoch) => {
  return new Date(epoch).toLocaleDateString();
};

// formatting percentage
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

//format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "INR",
  });
};
