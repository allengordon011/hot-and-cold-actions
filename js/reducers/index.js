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
    // console.log(action.type, action.guess);
    // console.log(state.secretNumber);

    let newMessage;

    if (action.guess !== state.secretNumber) {
        //if within 3 +/- of secretNumber, print 'hot'
        if ((state.secretNumber - action.guess) <= 3){
          newMessage = "No, but you're hot!";

        }
        if (state.secretNumber - action.guess >3 ) {
          newMessage = "No, but you're hot!";

        }

        //if within 5 of secretNumber, print 'warm'

        //if within 5-8 of secretNumber, print 'cool'

        //if outside 8 of secretNumber, print 'cold'


      }
      else if (action.guess === state.secretNumber) {
        newMessage = "Yes, that's it!";
      }

    return {...state,
      guess: [...state.guess ,action.guess],
      message: newMessage
    };

  }
  else if (action.type === actions.NEW_GAME) {
    state=initialHotOrColdState;
    //refresh page
  }

  return state;
 }
