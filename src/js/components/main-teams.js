import React from "react";

import PageHeader from "./page-header";
import Selector from "./selector";

export default class MainTeams extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLeague: 0
        }
    }

    render() {
        return (
            <main>
                <div className="main__inner-container wrapper">
                    <PageHeader title="Testing..." />
                    <Selector
                        options={[
                            "test1",
                            "test2",
                            "test3"
                        ]}
                    />
                </div>
            </main>
        );
    }
}