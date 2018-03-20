import React from "react";
import ReactDOM from "react-dom";

import {createStore, compose} from "redux";
import {Provider} from "react-redux";

import rootReducer from "./reducers";

import App from "Components/App";

import "../css/reset.css";
import "../css/wrapper.css";
import "../css/font-size.css";
import "../css/item.css";

const defaultState = {}

const enhancers = compose(
	window.devToolsExtension
		? window.devToolsExtension()
		: f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);

