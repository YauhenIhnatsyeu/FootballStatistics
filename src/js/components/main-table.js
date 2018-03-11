import React from "react";

import TabPanel from "./tab-panel";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="main__inner-container wrapper">
                    <div className="main__tab-panel-container">
                        {/* Passing leaguesData to the Main~.
                            That way we don't disturb other components */}
                        <TabPanel leaguesData={this.props.leaguesData} />
                    </div>
                </div>
            </main>
        );
    }
}