import {createStore, Store} from 'redux';

import {reducer} from '../reducers/firstReducer';
import {FirstReducerStore, FirstReducerStoreInit} from '../reducers/FirstReducerStore'
import {addTodo, addTodoWithDispatch} from '../actions/firstAction'
export const store = createStore(reducer, FirstReducerStoreInit, (window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

store.dispatch(addTodo("mucka"));
console.log(store.getState());

store.dispatch(addTodo("nowy"));
console.log(store.getState());