/* eslint-disable no-unused-vars */
function changeFont(font) {
  document.body.style.fontFamily = font;
  sessionStorage.selectedFont = font;
}

window.onload = () => {
  // grabs the 2 boxes for changing fonts then the font css rules
  const newSelect = document.getElementsByClassName('select-box__current').item(0);
  const label = document.getElementsByClassName('select-box__list').item(0);
  const fontsObj = document.styleSheets[0].cssRules;

  // converts the stylesheet object into an array of font definitions
  const fontsArray = Object.keys(fontsObj).map((i) => fontsObj[i]);

  let current = '';
  let list = '';
  let psychId = '';
  let hasBeenChecked = false;
  let fontName = '';
  let checked = '';
  let nameNormalized;
  let trueName;

  // sorts the fonts alphabetically
  fontsArray.sort((a, b) => {
    if (a.style.fontFamily.replace(/["']/g, '').replace(/_/g, ' ')
        < b.style.fontFamily.replace(/["']/g, '').replace(/_/g, ' ')) {
      return -1;
    }
    if (a.style.fontFamily.replace(/["']/g, '').replace(/_/g, ' ')
        > b.style.fontFamily.replace(/["']/g, '').replace(/_/g, ' ')) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < fontsArray.length; i += 1) {
    checked = '';
    // normalize the name
    nameNormalized = fontsArray[i].style.fontFamily.replace(/["']/g, '').replace(/_/g, ' ');
    // name that matches the stylesheet
    trueName = fontsArray[i].style.fontFamily.replace(/[^\w\s]/g, '');

    if (trueName === sessionStorage.selectedFont) {
      changeFont(trueName);
      checked = ' checked';
      hasBeenChecked = true;
      fontName = nameNormalized;
    }

    if (nameNormalized === 'Psych') {
      psychId = i.toString();
    }

    current += `<div class="select-box__value"><input class="select-box__input"
      type="radio" id="${i}" value="${trueName}" name="Ben"
      onChange="changeFont(this.value)" ${trueName === sessionStorage.selectedFont ? checked : ''}>
      <p class="select-box__input-text">${nameNormalized}</p>
    </div>`;

    list += `<li><label class="select-box__option" style="font-family: ${trueName}"
      for="${i}" aria-hidden="aria-hidden">${nameNormalized}</label></li>`;
  }

  current += `</div><img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
    alt="Arrow Icon" aria-hidden="true" />`;

  newSelect.innerHTML = current;
  label.innerHTML = list;

  if (hasBeenChecked === false) {
    const psych = document.getElementById(psychId);
    psych.checked = true;
    changeFont(psych.value);
  }
};
