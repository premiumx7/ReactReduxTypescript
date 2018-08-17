const ADD_TODO = 'ADD_TODO';

type AddTodo ={type: typeof ADD_TODO, text:string};

function addTodo(text: string) : AddTodo {
    return {
      type: ADD_TODO,
      text
    }
  }

  export type Actions = AddTodo;
