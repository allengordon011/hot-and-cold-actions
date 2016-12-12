import * as actions from '../actions/index';

const initialHotOrColdState = [];

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
  if (action.type === actions.NUMBER_GEN) {
    let number = Math.floor((Math.random() * 100) + 1);
    return [...state, {
      secretNumber: number
    }];
  }
  if (action.type === actions.SUBMIT_GUESS) {
    //get input and compare to secretNumber
    return [...state, {
      guess: action.guess
    }];
    if (guess !== state[0].secretNumber) {
      console.log("WRONG! (hotOrCold)");
    };
    else if (guess === state[0].secretNumber {
      console.log("RIGHT! (endGame)");
    })
  }
  else throw console.error();
  
  return state;
 }
