export const getRandomColor = (): [string, string] => {
  const hsl1 = `hsl(${Math.random() * 360}, 70%, 80%)`;
  const hsl2 = `hsl(${Math.random() * 360}, 70%, 80%)`;
  return [hsl1, hsl2];
};

export const getRandomJobTitle = (): string => {
  const titles = [
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Data Scientist",
    "Marketing Specialist",
    "Sales Representative",
  ];
  return titles[Math.floor(Math.random() * titles.length)];
};
