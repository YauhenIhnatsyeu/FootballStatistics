import {combineReducers} from "redux";

import app from "./app";
import tabs from "./tabs";

export default combineReducers({
    app,
    tabs
});