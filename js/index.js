require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(actions.numberGen());
store.dispatch(actions.submitGuess(34));


unsubscribe();
