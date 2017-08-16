import React, {component} from "react";
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer/index";
import App from "./container/App";

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root"));

