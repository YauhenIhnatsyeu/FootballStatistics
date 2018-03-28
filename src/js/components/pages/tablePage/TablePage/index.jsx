import React from "react";

import TabsContainer from "Containers/TabsContainer";
import Tab from "Components/tabs/Tab";

import LeagueTableContainer from "Containers/LeagueTableContainer";

import leaguesData from "Constants/leaguesData";

export default class TablePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TabsContainer selectedOptionKey="leagueIndex">
                    {leaguesData.map((leagueData, index) =>
                        (
                            <Tab title={leagueData.title} key={index} />
                        ))
                    }
                </TabsContainer>

                <LeagueTableContainer />
            </React.Fragment>
        );
    }
}
