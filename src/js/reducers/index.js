import {combineReducers} from "redux";

import app from "./app";
import tabs from "./tabs";
import tablePage from "./tablePage";

export default combineReducers({
    app,
    tabs,
    tablePage
});