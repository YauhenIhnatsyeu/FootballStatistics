import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import App from "Components/App";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

import "../css/reset.css";
import "../css/wrapper.css";
import "../css/font.css";
import "../css/item.css";




// import Sequelize from "sequelize";
// // const Sequelize = require("sequelize");
// //import pg from "pg";




// const sequelize = new Sequelize(/*"football-statistics", "postgres", "password", {
//     host: "localhost",
//     dialect: "postgres",
//     protocol: "postgres",
//     port: "5432",
//     dialectOptions: {
//         ssl: true,
//     },
// }*/"postgres://postgres:password@localhost:5432/football-statistics");

// console.log(sequelize)
// sequelize
//     .authenticate()
//     // .then(() => {
//     //     console.log("Connection has been established successfully.");
//     // })
//     // .catch(err => {
//     //     console.error("Unable to connect to the database:", err);
//     // });




// const User = sequelize.define('user', {
//     firstName: {
//       type: Sequelize.STRING
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
//   });
  
//   // force: true will drop the table if it already exists
//   User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   });




const defaultState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    defaultState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app"),
);

