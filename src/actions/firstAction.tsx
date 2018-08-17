const ADD_TODO = 'ADD_TODO';

function addTodo(text: string) {
    return {
      type: ADD_TODO,
      text
    }
  }
