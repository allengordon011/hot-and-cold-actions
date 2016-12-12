require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';

store.dispatch(actions.numberGen());
console.log(store.getState());
