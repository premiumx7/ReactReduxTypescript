export const ADD_TODO = 'ADD_TODO';
import {FirstReducerStore} from '../reducers/FirstReducerStore';

export type AddTodo = { type: typeof ADD_TODO, text: FirstReducerStore };