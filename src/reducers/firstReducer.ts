import {AddTodo, ADD_TODO} from '../types/firstType';
import {Actions} from "../actions/firstAction";
import {FirstReducerStore} from "./FirstReducerStore";


export const reducer = (state:FirstReducerStore , action: Actions): FirstReducerStore => {
    switch(action.type){
        case ADD_TODO:
        return {
            ...state, 
                todos: action.text.todos,
                janusz: action.text.janusz 
        };
        
        default:
        return state;
    }

}