function alertAndConsole() {
  window.alert('look at the console');
  console.log('There\'s something hidden on the About page, but it isn\'t accessible on mobile');
}
function instruct() {
  try {
    document.write(`<p>Hey there ${sessionStorage.personalInfo}, press the button</p>`);
  } catch (e) {
    console.log(e);
    document.write('<p>Press the Button</p>');
    return;
  } finally {
    console.log('completed successfully');
  }
}
