const nameSyns = [
  'name', 'nickname', 'alias', 'cognomen', 'moniker', 'psuedonym', 'autonym',
  'handle', 'epithet', 'label', 'designation', 'eponym'
];
const adverbs = [
  'lovingly', 'affectionately', 'humorously', 'effortlessly', 'quickly', 'vainly',
  'recklessly', 'deliberately', 'gracefully', 'elegantly', 'mysteriously', 'warmly',
  'vivaciously', 'unabashedly', 'carelessly', 'fervently', 'energetically'
];
const givenSyns = [
  'given to', 'awarded to', 'granted to', 'bestowed upon', 'bequethed to',
  'endowed upon', 'gifted to', 'layed upon', 'provided to', 'imparted to'
];
const gus = ['Gus', 'Burton', 'Burton Guster', 'Guster'];
const namedSyns = ['titled', 'entitled', 'christened', 'dubbed', 'specified as'];

function findName(name, allNames) {
  let madLib = ''
  for (let i = 0; i < allNames.length; i += 1) {
    if (allNames[i].name === name) {
      madLib += `The ${makeMadLib(nameSyns)} "${allNames[i].name}" is
        ${makeMadLib(adverbs)} ${makeMadLib(givenSyns)} ${makeMadLib(gus)} in
        episode ${allNames[i].episodeNum} of season ${allNames[i].season}, which is
        ${makeMadLib(namedSyns)}: ${allNames[i].episode}`;
      console.log(madLib);
      document.getElementById('nameDetails').textContent = madLib;
    }
  }
}

function makeMadLib(words) {
  let randNum = Math.floor(Math.random() * (words.length - 0));
  return words[randNum];
}

// `The name "${allNames[i].name}" is lovingly bestowed upon Burton
//           in episode ${allNames[i].episodeNum} of season ${allNames[i].season}
//           entitled: ${allNames[i].episode}`

