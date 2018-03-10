import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
import Main from "./components/main";
import MainTeams from "./components/main-teams";

import "../css/reset.css";

import "../css/wrapper.css";

//import "../css/fonts.css";
import "../css/font-size.css";

import "../css/header.css";
import "../css/main.css";
import "../css/logo.css";
import "../css/nav.css";
import "../css/tab-panel.css";
import "../css/table.css";
import "../css/page-header.css";

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Main />
  </React.Fragment>,
  document.getElementById("app")
);

