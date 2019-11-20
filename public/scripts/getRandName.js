// eslint-disable-next-line no-unused-vars
function getRandName(allNames) {
  const index = Math.floor(Math.random() * (allNames.length - 0));
  const name = allNames[index].name || allNames[1].name;
  const displayName = document.getElementById('name');

  displayName.textContent = name;
  displayName.href = `/names/${name}`;
  displayName.addEventListener('mouseover', () => { displayName.style.color = '#333333'; });
  displayName.addEventListener('mouseleave', () => { displayName.style.color = '#000000'; });
  document.getElementById('another').textContent = 'Get Another';
}
