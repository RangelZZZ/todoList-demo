import React, {component} from "react";
import AddTodo from "./container/AddTodo";
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer/index";

const store = createStore(reducer);

render(
    <Provider store={store}>
        <AddTodo/>
    </Provider>, document.getElementById("root"));

