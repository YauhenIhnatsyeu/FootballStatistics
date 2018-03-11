import React from "react";

export default class TeamsItem extends React.Component {
    render() {
        console.log(this.props.team);
        return (
            <div className="teams-list__teams-item-container">
                <div className="teams-item">
                    <div className="teams-item__logo-container">
                        <img src={this.props.team.crestUrl} className="teams-item__logo"/>
                    </div>
                    <div className="teams-item__info-container">
                        <p className="teams-item__name">{this.props.team.shortName}</p>
                        <p className="teams-item__short-name">Short name: {this.props.team.shortName}</p>
                        <p className="teams-item__market-value">Squad market value: {this.props.team.squadMarketValue}</p>
                    </div>
                </div>
            </div>
        );
    }
}