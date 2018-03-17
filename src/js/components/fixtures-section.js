import React from "react";

import SectionHeader from "./section-header";

export default class PlayersPanel extends React.Component {
    render() {
        return (
            <div className="fixtures-section">
                <div className="team-panel__section">
                    <SectionHeader
                        title={"Fixtures"} 
                    />
                </div>
            </div>
        );
    }   
}