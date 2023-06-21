const oneMonth = 1;

const startDay = 0;

export const getDays = (year: number, month: number) => {
  const totalDaysInMonth = new Date(year, month + oneMonth, startDay).getDate();

  const days = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);
  return days;
};

export const getYears = () => {
  const years = Array.from(
    { length: new Date().getFullYear() - 1923 },
    (_, i) => `${new Date().getFullYear() - i - 1}`
  );
  return years;
};
