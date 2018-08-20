import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import {store} from './store/configureStore'
import { Hello } from "./components/Hello";

ReactDOM.render(
    <Provider store={store}>
    <Hello/>
    </Provider>,
    document.getElementById("example")
);