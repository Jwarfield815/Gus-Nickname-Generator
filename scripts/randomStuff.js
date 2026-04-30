function alertAndConsole() {
  window.alert('look at the console');
  console.log('There\'s something hidden on the About page, but it isn\'t accessible on mobile');
}

function instruct() {
  let ominousText = document.createElement("p");
  ominousText.textContent = "Press the Button";
  if (sessionStorage.personalInfo) { ominousText.textContent = `Hey there ${sessionStorage.personalInfo}, press the button` }
  document.body.appendChild(ominousText);
}
