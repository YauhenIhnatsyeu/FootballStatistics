import React from "react";

import TabPanel from "./tab-panel";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="main__inner-container wrapper">
                    <div className="main__tab-panel-container">
                        <TabPanel leaguesIds={this.props.leaguesIds} />
                    </div>
                </div>
            </main>
        );
    }
}