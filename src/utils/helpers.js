export const breakNumberOnRanks = (value, sep = ',') => {
  return value.split(/(?=(?:\d{3})+(?!\d))/).join(sep);
};

export const roundingNumber = (value) => {
  return value;
};