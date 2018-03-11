import React from "react";

import TabPanel from "./tab-panel";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="main__inner-container wrapper">
                    <div className="tab-panel-container">
                        {/* Passing leagueData and how many leagues it should be to the Main~.
                            That way we don't disturb other components */}
                        <TabPanel
                            leagueData={this.props.leagueData}
                            leaguesCount={this.props.leaguesCount}
                        />
                    </div>
                </div>
            </main>
        );
    }
}