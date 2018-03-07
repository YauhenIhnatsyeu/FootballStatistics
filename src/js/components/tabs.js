import React from "react";

import Tab from "./tab";

export default class Tabs extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentTab: 0
        }

        this.tabElements = [];
    }
    
    handleClick = (tabIndex) => {
        this.setState({
            currentTab: tabIndex
        });
    }

    updateTabsElements = () => {
        this.tabElements = [];
        this.props.children.map((child) => {
            if (child.type === Tab) {
                this.tabElements.push(child);
            }
        })
    }

    getTabsList = () => {
        return (
            <ul>
                {this.tabElements.map((tab, tabIndex) =>
                    <li key={tabIndex} onClick={() => this.handleClick(tabIndex)}>{tab.props.title}</li>
                )}
            </ul>
        );
    }

    getCurrentTabContent = () => {
        // for (let i = 0; i < this.props.children.length; i++) {
        //     if (this.props.children[i].props.isCurrent === true) {
        //         return this.props.children[i].props.children;
        //     }
        // }
        // this.tabElements.map((tab, tabIndex) => {
        //     if (tab.props.isCurrent === true) {
                
        //     }
        // })
        // return "";
        console.log(this.tabElements[0]);
        console.log(this.state.currentTab);
        
        return this.tabElements[this.state.currentTab].props.children;
    }

    render() {
        this.updateTabsElements();
        return (
            <div className="tabs">
                {this.getTabsList()}
                {this.getCurrentTabContent()}
            </div>
        );
    }
}