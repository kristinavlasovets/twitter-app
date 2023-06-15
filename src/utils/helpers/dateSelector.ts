export const getDays = () => {
  const days = new Array(31).fill(0).map((_, i) => `${i + 1}`);
  return days;
};

export const getYears = () => {
  const years = new Array(new Date().getFullYear() - 1923)
    .fill(0)
    .map((_, i) => `${new Date().getFullYear() - i}`);
  return years;
};
