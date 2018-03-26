import React from "react";

import fetchFootbalData from "Utilities/fetchFootballData";

import SectionHeader from "Components/SectionHeader";
import PagingControls from "Components/PagingControls";
import PlayersListContainer from "Containers/PlayersListContainer";


import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class PlayersSection extends React.Component {
    constructor(props) {
        super(props);

        const playersUrl = this.props.team._links.self.href + "/players";
        this.props.fetchPlayers(playersUrl);
    }

    render() {
        if (this.props.fetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.players) {
            return <Loading />;
        }

        const pagesCount = Math.ceil(this.props.players.length / this.props.itemsOnOnePageCount);

        const pagingControls = new PagingControls({
            currentPageIndex: this.props.currentPageIndex,
            pagesCount: pagesCount,
            updateSelectedOptionIndex: this.props.updateSelectedOptionIndex
        });
        
        return (
            <React.Fragment>
                {this.props.players.length <= this.PLAYERS_ON_ONE_PAGE_COUNT ||
                    <div className="players-section__paging-controls-container">
                        {pagingControls.render()}
                    </div>
                }
                <div className="players-section__players-list-container">
                    <PlayersListContainer />
                </div>
                {this.props.players.length <= this.PLAYERS_ON_ONE_PAGE_COUNT ||
                    <div className="players-section__paging-controls-container players-section__paging-controls-container_position_bottom">
                        {pagingControls.render()}
                    </div>
                }
            </React.Fragment>
        );
    }
}