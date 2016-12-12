import * as actions from '../actions/index';

const initialRepositoryState = [];

export const hotOrColdReducer = (state=initialRepositoryState, action) => {
  if (action.type === actions.NUMBER_GEN) {
    return [...state, {

    }];
  }
  else if ()
}
