import {AddTodo, ADD_TODO} from '../types/firstType';
import {Actions} from "../actions/firstAction";
import {FirstReducerStore} from "./FirstReducerStore";


const reducer = (state:FirstReducerStore , action: Actions): FirstReducerStore => {
    switch(action.type){
        case ADD_TODO:
        return state;
        
        default:
        return state;
    }

}