import React from "react";

import Tab from "./tab";

export default class Tabs extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            //Index of current (selected) tab
            currentTab: 0
        }

        //Contains all children of <Tabs></Tabs> that are  of type Tab
        this.tabList = [];
    }
    
    //Handles the click of some tab (that is li element)
    //Each tab "has" it's own index, so we can use it to update currnet tab
    handleClick = (tabIndex) => {
        this.setState({
            currentTab: tabIndex
        });
    }

    //Puts all children of <Tabs></Tabs> that are  of type Tab into this.tabList
    updateTabList = () => {
        this.tabList = [];
        this.props.children.map((child) => {
            if (child.type === Tab) {
                this.tabList.push(child);
            }
        })
    }

    //Returns ul, which has list of li, which represents list of tabs we can click on
    getTabList = () => {
        return (
            <ul className="tab-panel__list">
                {this.tabList.map((tab, tabIndex) => {
                    //If tab is current, apply corresponding style (with _current modifier)
                    if (tabIndex === this.state.currentTab) {
                        return <li className="tab-panel__tab tab-panel__tab_current" key={tabIndex} onClick={() => this.handleClick(tabIndex)}>{tab.props.title}</li>
                    } else {
                        return <li className="tab-panel__tab" key={tabIndex} onClick={() => this.handleClick(tabIndex)}>{tab.props.title}</li>
                    }
                })}
            </ul>
        );
    }

    //Returns content of current tab
    getCurrentTabContent = () => {
        return (
            //When current tab is known, we can easily get its children
            <div className="tab-panel__content">
                {this.tabList[this.state.currentTab].props.children}
            </div>
        );
    }

    render() {
        //In case if Tabs children were updated we should update list of Tab
        this.updateTabList();
        return (
            <div className="tab-panel">
                {this.getTabList()}
                {this.getCurrentTabContent()}
            </div>
        );
    }
}