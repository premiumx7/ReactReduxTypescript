import * as React from "react";
import { connect } from 'react-redux';

export interface HelloProps { compiler: string; framework: string; }
import {FirstReducerStore} from "../reducers/FirstReducerStore";
import {addTodoWithDispatch, addTodo} from "../actions/firstAction";

import {FirstReducerStoreInit} from '../reducers/FirstReducerStore';


export const Hello = ({todos} : any) => <h1>Hello from {todos}{console.log(todos)}!</h1>;


const mapStateToProps = (state: any): any => {
    console.log('state');
    console.log(state);

    return {
        todos: state.todos
    };

}

const mapDispatchToProps   = { addTodoWithDispatch};


export default connect(mapStateToProps, mapDispatchToProps)(Hello);