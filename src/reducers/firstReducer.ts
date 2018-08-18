import {AddTodo, ADD_TODO} from '../types/firstType';
import {Actions} from "../actions/firstAction";
import {FirstReducerStore} from "./FirstReducerStore";


export const reducer = (state:FirstReducerStore , action: Actions): FirstReducerStore => {
    switch(action.type){
        case ADD_TODO:
        return {
            todos:  state.todos.concat(action.text)
        };
        
        default:
        return state;
    }

}