import * as actions from '../actions/index';

const initialHotOrColdState = [];

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
  if (action.type === actions.NUMBER_GEN) {
    let number = Math.floor((Math.random() * 100) + 1);
    return [...state, {
      secretNumber: number
    }];
  } //when do we generate new number ?
  console.log(state);
//   if (action.type === actions.SUBMIT_GUESS) {
//     //get input and compare to secretNumber
//     return [...state, {
//       guess: guess
//     }];
//     if (guess !== state[0].secretNumber) {
//
//     };
//
  }
 }
