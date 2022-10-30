function problem6(forms) {
  const nicknamePiecesCounts = {};

  forms.forEach((form) => {
    const nickname = form[1];
    const nicknamePieces = new Set();

    for (let i = 0; i < nickname.length - 1; i++) {
      const nicknamePiece = nickname.slice(i, i + 2);
      nicknamePieces.add(nicknamePiece);
    }

    nicknamePieces.forEach((nicknamePiece) => {
      if (!nicknamePiecesCounts.hasOwnProperty(nicknamePiece)) {
        nicknamePiecesCounts[nicknamePiece] = 1;
      } else {
        nicknamePiecesCounts[nicknamePiece] += 1;
      }
    });
  });
}

module.exports = problem6;
