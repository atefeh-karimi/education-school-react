function getRandomColor() {
  let colorValues = ["#f75842", "#00bf8e", "#6c63ff", "#f7c94b"];
  return colorValues[Math.floor(Math.random() * colorValues.length)];
}
export default getRandomColor;
