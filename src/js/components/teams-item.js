import React from "react";

import {Link} from 'react-router-dom';

export default class TeamsItem extends React.Component {
    //Extracts id from the ending of the team url
    extractId(url) {
        const regEx = /\d+$/;
        const ids = regEx.exec(url);
        return ids.length === 1 ? ids[0] : 0;
    }

    render() {
        const teamUrl = "/team/" + this.extractId(this.props.team._links.self.href);
        return (
            <div className="teams-list__teams-item-container">
                
                    <div className="teams-item">
                        <Link to={teamUrl} className="teams-item__link">
                            <div className="teams-item__logo-container">
                                <img src={this.props.team.crestUrl} className="teams-item__logo"/>
                            </div>
                        </Link>
                        <div className="teams-item__info-container">
                            <Link to={teamUrl} className="teams-item__link">
                                <p className="teams-item__name">{this.props.team.name}</p>
                            </Link>
                            <p className="teams-item__short-name">Short name: {this.props.team.shortName}</p>
                            {
                                //If squadMarketValue isn't null or underfined we can display it
                                this.props.team.squadMarketValue && 
                                <p className="teams-item__market-value">Squad market value: {this.props.team.squadMarketValue}</p>
                            }
                            <button className="teams-item__button">Add team to favourite</button>
                        </div>
                    </div>
            </div>
        );
    }
}