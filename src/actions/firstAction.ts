
import {AddTodo, ADD_TODO} from '../types/firstType';
import { Dispatch } from 'redux';
import { FirstReducerStore } from '../reducers/FirstReducerStore'


export function addTodo(text: FirstReducerStore) : AddTodo {
    return {
      type: ADD_TODO,
      text
    }
  }

  export type Actions = AddTodo;
