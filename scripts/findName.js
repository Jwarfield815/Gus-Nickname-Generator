var nameSyns = [
  'name', 'nickname', 'alias', 'cognomen', 'moniker', 'psuedonym', 'autonym',
  'handle', 'epithet', 'label', 'designation', 'eponym',
];

var adverbs = [
  'lovingly', 'affectionately', 'humorously', 'effortlessly', 'quickly', 'vainly',
  'recklessly', 'deliberately', 'gracefully', 'elegantly', 'mysteriously', 'warmly',
  'vivaciously', 'unabashedly', 'carelessly', 'fervently', 'energetically',
];

var givenSyns = [
  'given to', 'awarded to', 'granted to', 'bestowed upon', 'bequethed to',
  'endowed upon', 'gifted to', 'layed upon', 'provided to', 'imparted to',
];
const gus = ['Gus', 'Burton', 'Burton Guster', 'Guster'];
const namedSyns = ['titled', 'entitled', 'christened', 'dubbed', 'specified as'];

function makeMadLib(words) {
  const randNum = Math.floor(Math.random() * (words.length - 0));
  return words[randNum];
}

function findName(name, allNames) {
  let madLib = '';
  sessionStorage.personalInfo = name;

  for (let i = 0; i < allNames.length; i += 1) {
    if (allNames[i].name === name) {
      madLib += `
        The ${makeMadLib(nameSyns)}
        "${allNames[i].name}"
        is ${makeMadLib(adverbs)}
        ${makeMadLib(givenSyns)}
        ${makeMadLib(gus)}
        in episode ${allNames[i].episodeNum
          || '...oh, I don\'t know which episode, but I do know that it\'s '}
        from season ${allNames[i].season || '...oh, I don\'t know which season'},
        which is ${makeMadLib(namedSyns)}:
        ${allNames[i].episode || '...oh, I don\'t know what the episode is named'}`;

      document.getElementById('nameDetails').textContent = madLib;
    }
  }
}

function setBackButton() {
  let currName = window.location.search.replace("?","");
  let backButton = document.createElement("button");
  let returnLocation = "/";

  if (sessionStorage.scrollpos != -1) { returnLocation = `/viewNames.html?${sessionStorage.scrollpos}` }
  findName(decodeURIComponent(currName), allNames);

  backButton.id = "back";
  backButton.onclick = function goBackFromNameDetails() { window.location.href = returnLocation; };
  backButton.textContent = "Back";
  document.getElementById('backButtonContainer').appendChild(backButton);
}

function getAllNames() {
  const container = document.getElementById('names');
  allNames.forEach((name) => {
      let nameLink = document.createElement("a");
      nameLink.classList.add("nameLink");
      nameLink.onmouseover = function() { sessionStorage.scrollpos = window.scrollY; }
      nameLink.href = `/nameDetails.html?${encodeURIComponent(name.name)}`;
      nameLink.textContent = name.name;

      container.appendChild(nameLink);
  });
  
  let scrollPos = parseInt(window.location.search.replace('?', ''));
  window.scrollTo(0, scrollPos || 0);
}
