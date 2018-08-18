
import {AddTodo, ADD_TODO} from '../types/firstType';
import { Dispatch } from 'redux';


export function addTodo(text: string) : AddTodo {
    return {
      type: ADD_TODO,
      text
    }
  }


  export function addTodoWithDispatch(text: string)  {
    console.log('iii');
    return (dispatch : Dispatch) =>{
      dispatch(addTodo('frst'));
    }
  }

  export type Actions = AddTodo;
