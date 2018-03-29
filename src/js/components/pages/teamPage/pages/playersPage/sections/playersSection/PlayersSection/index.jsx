import React, { Component } from "react";

import PropTypes from "prop-types";

import PagingControls from "Components/PagingControls";
import ItemsList from "Components/ItemsList";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import PlayerItem from "PlayersPageSections/playersSection/PlayerItem";

import itemsOnOnePageCount from "Constants/itemsOnOnePageCount";

import "./index.css";

export default class PlayersSection extends Component {
    constructor(props) {
        super(props);

        this.props.fetchPlayers(this.props.team._links.self.href);
    }

    handlePageChanged = (pageIndex) => {
        this.props.updatePlayersPageIndex(pageIndex);
    }

    render() {
        if (this.props.fetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.players) {
            return <Loading />;
        }

        const pagingControlsPagesCount =
            Math.ceil(this.props.players.length / itemsOnOnePageCount);

        const pagingControls = (
            <PagingControls
                pagesCount={pagingControlsPagesCount}
                onPageChanged={this.handlePageChanged}
                currentPageIndex={this.props.playersPageIndex}
            />
        );

        return (
            <React.Fragment>
                {this.props.players.length <= this.PLAYERS_ON_ONE_PAGE_COUNT ||
                    <div className="players-section__paging-controls-container">
                        {pagingControls}
                    </div>
                }
                <div className="players-section__players-list-container">
                    <ItemsList
                        items={this.props.players}
                        itemComponent={<PlayerItem />}
                        itemKey="player"
                        currentPageIndex={this.props.playersPageIndex}
                    />
                </div>
                {this.props.players.length <= this.PLAYERS_ON_ONE_PAGE_COUNT ||
                    <div className="players-section__paging-controls-container players-section__paging-controls-container_position_bottom">
                        {pagingControls}
                    </div>
                }
            </React.Fragment>
        );
    }
}

PlayersSection.propTypes = {
    fetchPlayers: PropTypes.func.isRequired,
    updatePlayersPageIndex: PropTypes.func.isRequired,
    fetchingErrorOccured: PropTypes.bool,
    team: PropTypes.shape({
        _links: PropTypes.shape({
            self: PropTypes.shape({
                href: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    players: PropTypes.arrayOf(PropTypes.object),
    playersPageIndex: PropTypes.number.isRequired,
};

PlayersSection.defaultProps = {
    fetchingErrorOccured: false,
    players: null,
};
