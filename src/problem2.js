function problem2(cryptogram) {
  let decipheredCryptogram = cryptogram;

  while (decipheredCryptogram.length > 0) {
    let previousCharacter = '';
    let duplicateCharacters = '';
    const duplicateCharactersList = [];
    for (let i = 0; i < decipheredCryptogram.length; i++) {
      const currentCharacter = decipheredCryptogram[i];

      if (previousCharacter === currentCharacter) {
        duplicateCharacters += currentCharacter;
        duplicateCharactersList.push(duplicateCharacters);
      } else {
        duplicateCharacters = currentCharacter;
      }
      previousCharacter = currentCharacter;
    }

    if (duplicateCharactersList.length === 0) {
      break;
    }

    duplicateCharactersList.sort((a, b) => b.length - a.length);
    duplicateCharactersList.forEach(
      (duplicateCharacters) =>
        (decipheredCryptogram = decipheredCryptogram.replace(
          duplicateCharacters,
          ''
        ))
    );
  }
  return decipheredCryptogram;
}

module.exports = problem2;
