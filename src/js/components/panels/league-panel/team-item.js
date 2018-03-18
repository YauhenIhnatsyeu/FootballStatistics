import React from "react";

import {Link} from "react-router-dom";

import extractTeamIdFromUrl from "../../../utils/extractTeamIdFromUrl";

export default class TeamItem extends React.Component {
	constructor(props) {
		super(props);

		//Extracting id from team url and store it
		this.teamId = extractTeamIdFromUrl(this.props.team._links.self.href);

		this.state = {
			//When team-item initializes, it checks
			//if it is favourite using local storage and updates
			isFavourite: this.isThisTeamFavourite()
		};
	}

	componentWillReceiveProps(newProps) {
		//Extracting id from team url and store it,
		//because we will recieve new props
		this.teamId = extractTeamIdFromUrl(newProps.team._links.self.href);

		//When new props will recieve, team-item checks
		//if it is favourite using local storage
		const isThisTeamFavourite = this.isThisTeamFavourite();
		// and updates
		if (this.state.isFavourite !== isThisTeamFavourite) {
			this.setState({
				isFavourite: isThisTeamFavourite
			});
		}
	}

	//Checks if this team is favourite using local storage
	isThisTeamFavourite() {
		let favourites = localStorage.getItem("favourites");
		if (favourites) {
			//Here and below favourites ids are stored
			//in local storage as JSON strigns
			favourites = JSON.parse(favourites);
			const indexOfTeamId = favourites.indexOf(this.teamId);
			if (indexOfTeamId === -1) {
				//If local storage doesn't have this team's id, team is not favourite
				return false;
			}
			//If local storage has this team's id, team is favourite
			return true;
		}
		//If local storage doesn't have "favourites" key, team is not favourite
		return false;
	}

    //Handles add/remove from favourites button click
    handleClick = () => {
    	if (this.state.isFavourite) {
    		this.removeTeamIdFromLocalStorage();
    	} else {
    		this.addTeamIdToLocalStorage();
    	}
    	//Change isFavoutite state to opposite
    	this.setState({
    		isFavourite: !this.state.isFavourite
    	});
    }

    addTeamIdToLocalStorage = () => {
    	let favourites = localStorage.getItem("favourites");
    	if (favourites) {
    		//If local storage has "favourites" key, get its item,
    		favourites = JSON.parse(favourites);
    		//and add new id
    		favourites.push(this.teamId);
    		favourites = JSON.stringify(favourites);
    	} else {
    		//If local storage doesn't have "favourites" key,
    		//just create an array with one id
    		favourites = JSON.stringify([this.teamId]);
    	}
    	//In the end set favourites item to a new one
    	localStorage.setItem("favourites", favourites);
    }

    removeTeamIdFromLocalStorage = () => {
    	let favourites = localStorage.getItem("favourites");
    	if (favourites) {
    		favourites = JSON.parse(favourites);
    		//Getting index of this team's id in array
    		const indexOfTeamId = favourites.indexOf(this.teamId);
    		if (indexOfTeamId !== -1) {
    			//Removing id from array
    			favourites.splice(indexOfTeamId, 1);
    			favourites = JSON.stringify(favourites);
    			localStorage.setItem("favourites", favourites);
    		}
    	}
    }

    render() {
		//Creating teamUrl for later redirecting to specific team page
		const teamUrl = "/team/" + this.teamId;
		
    	return (
			<div className="item">
				<Link to={teamUrl} className="team-item__link">
					<div className="team-item__img-container">
						<img src={this.props.team.crestUrl} className="item__img"/>
					</div>
				</Link>
				<div className="team-item__info-container">
					<Link to={teamUrl} className="team-item__link">
						<p className="item__name">{this.props.team.name}</p>
					</Link>
					<p className="item__short-name">Short name: {this.props.team.shortName}</p>
					{
						//If squadMarketValue isn't null or underfined we can display it
						this.props.team.squadMarketValue && 
						<p className="item__market-value">Squad market value: {this.props.team.squadMarketValue}</p>
					}
					<button className="team-item__button" onClick={this.handleClick}>
						{this.state.isFavourite ? "Remove" : "Add"} team to favourites
					</button>
				</div>
			</div>
    	);
    }
}