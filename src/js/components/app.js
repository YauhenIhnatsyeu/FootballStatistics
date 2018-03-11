import React from "react";

import Header from "./header";

import MainTable from "./main-table";
import MainTeams from "./main-teams";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <MainTable />
            </React.Fragment>
        );
    }
}