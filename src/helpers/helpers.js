// formatting Date
export const formateDateToLocalestring = (epoch) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Date(epoch).toLocaleDateString("en-GB", options);
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

// get starting and end date of current month
export const getMonthStartAndEndDate = () => {
  const date = new Date();

  const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return {
    startDate,
    endDate,
  };
};

export function getDatesInCurrentMonth() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const datesArray = [];

  for (let day = 1; day <= numDaysInMonth; day++) {
    datesArray.push(new Date(currentYear, currentMonth, day));
  }

  return datesArray;
}

export function formatDate(dateISO) {
  const dateString = formateDateToLocalestring(dateISO);

  const [day, month, year] = dateString.split("/");
  const date = new Date(`${year}-${month}-${day}`);

  const formattedDate = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
  }).format(date);
  return formattedDate;
}
