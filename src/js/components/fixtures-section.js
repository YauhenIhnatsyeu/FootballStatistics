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

                    <form>
                        <input type="text" />
                        <input type="text" />
                    </form>
                </div>
            </div>
        );
    }   
}