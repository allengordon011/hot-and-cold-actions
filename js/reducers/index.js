import * as actions from '../actions/index';

const initialHotOrColdState = [];

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
  if (action.type === actions.NUMBER_GEN) {
    let number = Math.floor((Math.random() * 100) + 1);
    return [...state, {
      secretNumber: action.number
    }];
  } //when do we generate new number ?
  else if (action.type === actions.SUBMIT_GUESS) {

  }
}
