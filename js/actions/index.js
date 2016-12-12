//action randomly selects a number between 1 and 100
//action submits player guesses
//action provides feedback "hot" or "cold"
//action tells player they've won and option to start a new game

export const NUMBER_GEN = 'NUMBER_GEN';
export const numberGen = () => ({

  type: NUMBER_GEN,
  number:  Math.floor((Math.random() * 100) + 1)
});

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
  type: SUBMIT_GUESS,
  guess
});

export const HOT_OR_COLD = 'HOT_OR_COLD';
export const hotOrCold = temp => ({
  type: HOT_OR_COLD,
  temp
});

export const END_GAME = 'END_GAME';
export const endGame = end => ({
  type: END_GAME,
  end
});
