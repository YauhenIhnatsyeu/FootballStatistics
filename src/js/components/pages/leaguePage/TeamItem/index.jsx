import React from "react";

import PropTypes from "prop-types";

import {Link} from "react-router-dom";

import "./index.css";

export default class TeamItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isFavourite: this.isThisTeamFavourite()
        };
    }

    componentWillReceiveProps(nextProps) {
        const isThisTeamFavourite = this.isThisTeamFavourite();
        if (this.state.isFavourite !== isThisTeamFavourite) {
            this.setState({
                isFavourite: isThisTeamFavourite
            });
        }
    }

    isThisTeamFavourite() {
        return this.props.favouriteTeams.includes(this.props.team.id);
    }

    handleButtonClick = () => {
        if (this.state.isFavourite) {
            this.props.removeTeamFromFavourites(this.props.team.id);
        } else {
            this.props.addTeamToFavourites(this.props.team.id);
        }
        
        this.setState({
            isFavourite: !this.state.isFavourite
        });
    }

    render() {
        const teamUrl = "/team/" + this.props.team.id;
        
        return (
            <div className="item team-item">
                <Link to={teamUrl} className="team-item__link">
                    <div className="team-item__img-container">
                        <img src={this.props.team.crestUrl} className="team-item__img"/>
                    </div>
                </Link>
                <div className="team-item__info-container">
                    <Link to={teamUrl} className="team-item__link">
                        <p className="team-item__name">{this.props.team.name}</p>
                    </Link>
                    <p>Short name: {this.props.team.shortName}</p>
                    {
                        this.props.team.squadMarketValue && 
                        <p>Squad market value: {this.props.team.squadMarketValue}</p>
                    }
                    <button className="team-item__button" onClick={this.handleButtonClick}>
                        {this.state.isFavourite ? "Remove" : "Add"} team to favourites
                    </button>
                </div>
            </div>
        );
    }
}

TeamItem.propTypes = {
    team: PropTypes.shape({
        id: PropTypes.number.isRequired,
        crestUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        shortName: PropTypes.string.isRequired,
        squadMarketValue: PropTypes.string,
    }).isRequired,
};
