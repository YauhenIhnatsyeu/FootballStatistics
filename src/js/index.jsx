import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import {Provider} from "react-redux";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

import App from "Components/App";

import "../css/reset.css";
import "../css/wrapper.css";
import "../css/font-size.css";
import "../css/item.css";

const defaultState = {}

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
	window.devToolsExtension
		? window.devToolsExtension()
		: f => f
);

const store = createStore(
	rootReducer, 
	defaultState,
	//enhancers,
	applyMiddleware(
		sagaMiddleware
		//enhancers
	),
	
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);

