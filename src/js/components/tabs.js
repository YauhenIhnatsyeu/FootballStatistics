import React from "react";

export default class Tabs extends React.Component {
    getTabsList = () => {
        return (
            <ul>
                {this.props.children.map((child, index) =>
                    <li key={index}>{child.props.title}</li>
                )}
            </ul>
        );
    }

    getCurrentTabContent = () => {
        //console.log(this.props.children);
        for (let i = 0; i < this.props.children.length; i++) {
            if (this.props.children[i].props.isCurrent === true) {
                return this.props.children[i].props.children;
            }
        }
        return "";
    }

    render() {
        return (
            <div className="tabs">
                {this.getTabsList()}
                {this.getCurrentTabContent()}
            </div>
        );
    }
}