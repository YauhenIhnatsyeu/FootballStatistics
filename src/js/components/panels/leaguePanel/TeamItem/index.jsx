import React from "react";

import {Link} from "react-router-dom";

import extractTeamIdFromUrl from "Utilities/extractTeamIdFromUrl";

import "./index.css";

export default class TeamItem extends React.Component {
	constructor(props) {
		super(props);

		this.teamId = extractTeamIdFromUrl(this.props.team._links.self.href);

		this.state = {
			isFavourite: this.isThisTeamFavourite()
		};
	}

	componentWillReceiveProps(newProps) {
		this.teamId = extractTeamIdFromUrl(newProps.team._links.self.href);

		const isThisTeamFavourite = this.isThisTeamFavourite();
		if (this.state.isFavourite !== isThisTeamFavourite) {
			this.setState({
				isFavourite: isThisTeamFavourite
			});
		}
	}

	isThisTeamFavourite() {
		let favourites = localStorage.getItem("favourites");
		if (favourites) {

			favourites = JSON.parse(favourites);
			const indexOfTeamId = favourites.indexOf(this.teamId);
			
			if (indexOfTeamId === -1) {
				return false;
			}
			return true;
		}
		return false;
	}

    handleButtonClick = () => {
    	if (this.state.isFavourite) {
    		this.removeTeamIdFromLocalStorage();
    	} else {
    		this.addTeamIdToLocalStorage();
		}
		
    	this.setState({
    		isFavourite: !this.state.isFavourite
    	});
    }

    addTeamIdToLocalStorage = () => {
		let favourites = localStorage.getItem("favourites");
		
    	if (favourites) {
    		favourites = JSON.parse(favourites);
    		favourites.push(this.teamId);
    		favourites = JSON.stringify(favourites);
    	} else {
    		favourites = JSON.stringify([this.teamId]);
    	}

		localStorage.setItem("favourites", favourites);
    }

    removeTeamIdFromLocalStorage = () => {
		let favourites = localStorage.getItem("favourites");
		
    	if (favourites) {

    		favourites = JSON.parse(favourites);
			const indexOfTeamId = favourites.indexOf(this.teamId);
			
    		if (indexOfTeamId !== -1) {
    			favourites.splice(indexOfTeamId, 1);
    			favourites = JSON.stringify(favourites);
    			localStorage.setItem("favourites", favourites);
    		}
    	}
    }

    render() {
		const teamUrl = "/team/" + this.teamId;
		
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
						//If squadMarketValue isn't null or underfined we can display it
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