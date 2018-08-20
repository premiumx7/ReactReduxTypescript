import  * as React from "react";
import { connect } from 'react-redux';

export interface HelloProps { compiler: string; framework: string; }
import { FirstReducerStore } from "../reducers/FirstReducerStore";
import { addTodo } from "../actions/firstAction";

import {FirstReducerStoreInit} from '../reducers/FirstReducerStore';

type Props = { todos: string, janusz: string };

export const Hello: React.SFC<Props> = ({ todos, janusz }) => <h1>Hello from {todos}{janusz}{console.log(todos)}!</h1>;

const mapStateToProps = (state: FirstReducerStore): Props => {
    console.log('state');
    console.log(state);

    return {
        todos: state.todos,
        janusz : state.janusz
    };

}

const mapDispatchToProps   = { addTodo };


export default connect(mapStateToProps, mapDispatchToProps)(Hello);