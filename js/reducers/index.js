import * as actions from '../actions/index';

const initialHotOrColdState = {
  secretNumber: 0,
  guess: [],
  message: ''
};

export const hotOrColdReducer = (state=initialHotOrColdState, action) => {
  if (action.type === actions.NUMBER_GEN) {

    return {...state,
      secretNumber: action.number
    };
  }
  if (action.type === actions.SUBMIT_GUESS) {
    console.log(action.type, action.guess);
    console.log(state.secretNumber);
    // if (action.guess !== state.secretNumber) {
    //     ("WRONG! (hotOrCold)");
    //   }
    //   else if (action.guess === state.secretNumber) {
    //     console.log("RIGHT! (endGame)");
    //   }

    return {...state,
      guess: [...state.guess ,action.guess],
      message:'You guessed!!'
    };
  }


  // else throw console.error();

  return state;
 }
