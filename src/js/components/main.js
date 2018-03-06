import React from "react";

import TabPanel from "./tabpanel";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="main__inner-container">
                    <TabPanel />
                </div>
            </main>
        );
    }
}