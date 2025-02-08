import React from "react";
import { render } from "react-dom";
import Reducers from "./components/reducers.js";
import PostValue from "./components/connect.js";
import { createStore } from "redux";
import { Provider } from "react-redux";


const store = createStore(Reducers)

console.log(store.getState())
render(<Provider store={store}>
        <PostValue />
</Provider>, document.getElementById("root"))