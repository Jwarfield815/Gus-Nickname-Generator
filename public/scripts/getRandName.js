/* eslint-disable no-unused-vars */
let first = true;

function getRandName(allNames) {
  const index = Math.floor(Math.random() * (allNames.length - 0));
  const name = allNames[index].name || allNames[1].name;
  const displayName = document.getElementById('name');
  const anotherButton = document.getElementById('another');

  displayName.textContent = name;
  displayName.href = `/names/${name}`;
  displayName.addEventListener('mouseover', () => { displayName.style.color = '#333333'; });
  displayName.addEventListener('mouseleave', () => { displayName.style.color = '#000000'; });
  anotherButton.textContent = 'Get Another';

  if (first) {
    anotherButton.style.position = 'fixed';
    anotherButton.style.top = '70%';
  }

  first = false;
}
