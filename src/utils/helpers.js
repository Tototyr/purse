export const breakNumberOnRanks = (value, sep = ',') => {
  return value.split(/(?=(?:\d{3})+(?!\d))/).join(sep);
};

export const roundingNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'b';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num;
};

export const getPercentageChange = (oldNumber, newNumber) => {
  const decreaseValue = oldNumber - newNumber;

  return (decreaseValue / oldNumber) * 100;
}