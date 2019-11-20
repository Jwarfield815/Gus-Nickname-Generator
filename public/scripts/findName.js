const nameSyns = [
  'name', 'nickname', 'alias', 'cognomen', 'moniker', 'psuedonym', 'autonym',
  'handle', 'epithet', 'label', 'designation', 'eponym',
];
const adverbs = [
  'lovingly', 'affectionately', 'humorously', 'effortlessly', 'quickly', 'vainly',
  'recklessly', 'deliberately', 'gracefully', 'elegantly', 'mysteriously', 'warmly',
  'vivaciously', 'unabashedly', 'carelessly', 'fervently', 'energetically',
];
const givenSyns = [
  'given to', 'awarded to', 'granted to', 'bestowed upon', 'bequethed to',
  'endowed upon', 'gifted to', 'layed upon', 'provided to', 'imparted to',
];
const gus = ['Gus', 'Burton', 'Burton Guster', 'Guster'];
const namedSyns = ['titled', 'entitled', 'christened', 'dubbed', 'specified as'];

function makeMadLib(words) {
  const randNum = Math.floor(Math.random() * (words.length - 0));
  return words[randNum];
}

// eslint-disable-next-line no-unused-vars
function findName(name, allNames) {
  let madLib = '';
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
