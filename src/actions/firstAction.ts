
import {AddTodo, ADD_TODO} from '../types/firstType';


function addTodo(text: string) : AddTodo {
    return {
      type: ADD_TODO,
      text
    }
  }

  export type Actions = AddTodo;
