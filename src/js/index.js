import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
import Main from "./components/main";

import "../css/reset.css";

import "../css/wrapper.css";

//import "../css/fonts.css";
import "../css/font-size.css";

import "../css/header.css";
import "../css/logo.css";
import "../css/nav.css";

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Main />
  </React.Fragment>,
  document.getElementById("app")
);

