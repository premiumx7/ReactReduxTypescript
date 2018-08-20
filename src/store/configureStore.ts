import { createStore, Store, AnyAction } from 'redux';

import { reducer } from '../reducers/firstReducer';
import { FirstReducerStore, FirstReducerStoreInit } from '../reducers/FirstReducerStore'
import { addTodo } from '../actions/firstAction'
import { AddTodo } from '../types/firstType';
export const store: Store<FirstReducerStore, AnyAction> = createStore<FirstReducerStore,AddTodo,{},{}>(reducer, FirstReducerStoreInit, (window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

store.dispatch(addTodo({todos:'7', janusz:'mroczek 2'}));
console.log(store.getState());

store.dispatch(addTodo({todos:'8', janusz:'mroczek 7'}));
console.log(store.getState());