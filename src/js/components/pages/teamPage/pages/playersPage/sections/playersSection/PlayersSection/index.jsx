import PropTypes from "prop-types";

import React from "react";

import PagingControls from "Components/PagingControls";
// import PlayersListContainer from "Containers/PlayersListContainer";
import ItemsListContainer from "Containers/ItemsListContainer";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import PlayerItem from "PlayersPageSections/playersSection/PlayerItem";

import "./index.css";

export default class PlayersSection extends React.Component {
    constructor(props) {
        super(props);

        const playersUrl = `${this.props.team._links.self.href}/players`;
        this.props.fetchPlayers(playersUrl);
        console.log("Here");
    }

    render() {
        console.log("Here");
        if (this.props.fetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.players) {
            return <Loading />;
        }
        console.log("Here");
        const pagingControlsPagesCount =
            Math.ceil(this.props.players.length / this.props.itemsOnOnePageCount);
        console.log(pagingControlsPagesCount);
        const pagingControls = new PagingControls({
            currentPageIndex: this.props.currentPageIndex,
            pagesCount: pagingControlsPagesCount,
            updateSelectedOptionIndex: this.props.updateSelectedOptionIndex,
        });

        return (
            <React.Fragment>
                {this.props.players.length <= this.PLAYERS_ON_ONE_PAGE_COUNT ||
                    <div className="players-section__paging-controls-container">
                        {pagingControls.render()}
                    </div>
                }
                <div className="players-section__players-list-container">
                    {/* <PlayersListContainer /> */}
                    <ItemsListContainer
                        items={this.props.players}
                        itemComponent={<PlayerItem />}
                        itemKey="player"
                        currentPageIndex={this.props.currentPageIndex}
                    />
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

PlayersSection.propTypes = {
    fetchPlayers: PropTypes.func.isRequired,
    updateSelectedOptionIndex: PropTypes.func.isRequired,
    fetchingErrorOccured: PropTypes.bool,
    team: PropTypes.shape({
        _links: PropTypes.shape({
            self: PropTypes.shape({
                href: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    players: PropTypes.arrayOf(PropTypes.object),
    currentPageIndex: PropTypes.number.isRequired,
    itemsOnOnePageCount: PropTypes.number.isRequired,
};

PlayersSection.defaultProps = {
    fetchingErrorOccured: false,
    players: null,
};
