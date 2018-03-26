import PropTypes from "prop-types";

import React from "react";

import TabsContainer from "Containers/TabsContainer";
import Tab from "Components/tabs/Tab";

import LeagueTableContainer from "Containers/LeagueTableContainer";

export default class TablePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TabsContainer
                    selectedOptionKey="leagueIndex"
                >
                    {this.props.leaguesTitles.map((tabTitle, index) => {
                        return (
                            <Tab title={tabTitle} key={index} />
                        );
                    })}
                </TabsContainer>

                <LeagueTableContainer />
            </React.Fragment>
        );
    }
}

TablePage.propTypes = {
    leaguesTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
