// eslint-disable-next-line no-unused-vars
function getRandName(allNames) {
  const index = Math.floor(Math.random() * (allNames.length - 0));
  const name = allNames[index].name || allNames[1].name;

  document.getElementById('name').textContent = name;
  document.getElementById('another').textContent = 'Get Another';
}
