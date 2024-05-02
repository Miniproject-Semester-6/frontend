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
  amt = amt || 0;

  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "INR",
  });
};
