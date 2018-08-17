import {createStore} from 'redux';

import {reducer} from '../reducers/firstReducer';
import {FirstReducerStoreInit} from '../reducers/FirstReducerStore'

export const store = createStore(reducer, FirstReducerStoreInit, (window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__());