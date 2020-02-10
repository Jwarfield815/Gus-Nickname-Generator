/* eslint-disable no-useless-escape */
function changeFont(font, size) {
  document.body.style.fontFamily = font;
  sessionStorage.selectedFont = font;
  document.body.style.fontSize = size;
  sessionStorage.size = size;
}

function convertSize(size) {
  switch (size) {
    case 100:
      return '0.6em';
    case 200:
      return '0.7em';
    case 300:
      return '0.8em';
    case 400:
      return '0.9em';
    case 500:
      return '1em';
    case 600:
      return '1.1em';
    case 700:
      return '1.2em';
    case 800:
      return '1.3em';
    case 900:
      return '1.4em';
    default:
      // eslint-disable-next-line no-console
      console.warn('default case reached, this probably means the incorrect var type was passed in');
      return '1em';
  }
}

function getTitle(className, val) {
  const select = document.getElementsByClassName(className).item(0);
  const result = select.find((child) => {
    console.log(child);
    return child.title === val;
  });
  console.log('result', result);
}

window.onload = () => {
  // grabs font stylesheet
  const fontsObj = document.styleSheets[0].cssRules;
  // converts stylesheet into array of rules
  const fontsArray = Object.keys(fontsObj).map((i) => fontsObj[i]);
  const parsedCssArray = [];

  let isMobile = false;
  let hasBeenChecked = false;
  let current = '';
  let list = '';
  let psychId = '';
  let nameNormalized = '';
  let trueName = '';
  let size = '';
  let mobileSelect = '<select class="mobileSelect" onchange="console.log(getTitle(this.class, this.value))';

  // checkes if the user is using a mobile device/browser
  ((a) => {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
      isMobile = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);

  for (let i = 0; i < fontsArray.length; i += 1) {
    let parsedCss = fontsArray[i].cssText.replace('@font-face {', '').split(';');
    parsedCss = parsedCss.slice(0, parsedCss.length - 1);

    for (let j = 0; j < parsedCss.length; j += 1) {
      if (parsedCss[j].includes('src') || parsedCss[j].includes('font-style') || parsedCss[j].includes('font-family')) {
        parsedCss[j] = parsedCss[j].replace(/["']/g, '\\"').replace(/:[\s]*(['"])?(.+)(['"])?/g, ':"$2"');
      }
      parsedCss[j] = parsedCss[j].trim()
        .replace('-', '')
        .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2":')
        .replace(';', '');
    }

    parsedCss = `{${parsedCss}}`;
    parsedCss = JSON.parse(parsedCss);
    parsedCssArray.push(parsedCss);
  }

  // sorts the fonts alphabetically
  parsedCssArray.sort((a, b) => {
    if (a.fontfamily.replace(/["']/g, '').replace(/_/g, ' ')
        < b.fontfamily.replace(/["']/g, '').replace(/_/g, ' ')) {
      return -1;
    }
    if (a.fontfamily.replace(/["']/g, '').replace(/_/g, ' ')
        > b.fontfamily.replace(/["']/g, '').replace(/_/g, ' ')) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < fontsArray.length; i += 1) {
    // normalize the name
    nameNormalized = parsedCssArray[i].fontfamily.trim().replace(/["']/g, '').replace(/_/g, ' ');
    // name that matches the stylesheet
    trueName = parsedCssArray[i].fontfamily.replace(/[^\w\s]/g, '');
    size = parsedCssArray[i].fontweight;
    size = convertSize(size);

    if (trueName === sessionStorage.selectedFont) {
      changeFont(trueName, size);
      hasBeenChecked = true;
    }

    if (nameNormalized === 'Psych') {
      psychId = i;
    }

    if (isMobile) {
      mobileSelect += `
      <option
        id="${trueName}"
        value="${trueName}"
        style="font-family: ${trueName}"
        title="${size}"
        ${trueName === sessionStorage.selectedFont ? 'selected' : ''}
      >
        ${nameNormalized}
      </option>`;
    } else {
      current += `
      <div class="select-box__value">
        <input
          class="select-box__input"
          type="radio"
          id="${i}"
          title="${size}"
          value="${trueName}"
          name="Ben"
          onChange="changeFont(this.value, this.title);"
          ${trueName === sessionStorage.selectedFont ? 'checked' : ''}
        >
        <p class="select-box__input-text">${nameNormalized}</p>
      </div>`;

      list += `<li><label class="select-box__option" style="font-family: ${trueName}"
        for="${i}" aria-hidden="aria-hidden">${nameNormalized}</label></li>`;
    }
  }

  if (isMobile) {
    mobileSelect += '</select>';
    document.getElementsByClassName('mobileSelectContainer').item(0).innerHTML = mobileSelect;
  } else {
    current += `</div><img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
    alt="Arrow Icon" aria-hidden="true" />`;

    document.getElementsByClassName('select-box__current').item(0).innerHTML = current;
    document.getElementsByClassName('select-box__list').item(0).innerHTML = list;
  }

  if (hasBeenChecked === false && isMobile) {
    const psych = document.getElementById('Psych');
    psych.selected = true;
    changeFont(psych.value, psych.title);
  } else if (hasBeenChecked === false) {
    const psych = document.getElementById(psychId);
    psych.checked = true;
    changeFont(psych.value, psych.title);
  }
};
