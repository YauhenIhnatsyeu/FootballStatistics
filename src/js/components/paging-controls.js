import React from "react";

export default class PagingControls {
	constructor(props) {
		this.props = props;

		this.currentPageIndex = props.currentPageIndex;
    }
    
    //Is called, when any of contols was clicked
    handleClick = (pageIndex) => {
        //Don't do anything, if page goes beyond pages count
        //or needed page is already active
        if (pageIndex < 0 
            || pageIndex > this.props.pagesCount - 1
            || pageIndex === this.currentPageIndex)
            return;
        
        if (this.props.onClick) {
            //Calling external handler first
            //and providing new current page index, so it can use it
            this.props.onClick(pageIndex);
        }

        //Then change currentPageIndex to a new one 
        this.currentPageIndex = pageIndex;
    }

    //Gets list of options for <select></select>
    getOptions = () => {
        //Creating an array of 1..pagesCount
        const pages = [];
        for (let i = 1; i <= this.props.pagesCount; i++) {
            pages.push(i);
        }

        return (
            pages.map((page, index) => {
                return (
                    <option key={index}>
                        {page}
                    </option>
                )
            })
        )
    }
	
	render() {
		return (
			<div className="paging-controls">
                <ul className="paging-controls__list">
                    <li className="paging-controls__control paging-controls__control_not-clickable">
                        <select
                            className="paging-controls__select"
                            //When select changes extract new value from it,
                            //subtract 1 and pass it to the handler
                            onChange={(event) => this.handleClick(event.target.value - 1)}
                            value={this.currentPageIndex + 1}
                        >
                            {this.getOptions()}
                        </select>
                    </li>
                    <li
                        className="paging-controls__control"
                        //First page is page with zero index 
                        onClick={() => this.handleClick(0)}
                    >
                        first
                    </li>
                    <li
                        className="paging-controls__control"
                        //Previous page is page with currentPageIndex - 1 index 
                        onClick={() => this.handleClick(this.currentPageIndex - 1)}
                    >
                        prev
                    </li>
                    <li className="paging-controls__control paging-controls__control_not-clickable">
                        {(this.currentPageIndex + 1) + "/" + this.props.pagesCount}
                    </li>
                    <li
                        className="paging-controls__control"
                        //Next page is page with currentPageIndex + 1 index 
                        onClick={() => this.handleClick(this.currentPageIndex + 1)}
                    >
                        next
                    </li>
                    <li
                        className="paging-controls__control"
                        //Last page is page with pagesCount - s1 index 
                        onClick={() => this.handleClick(this.props.pagesCount - 1)}
                    >
                        last
                    </li>
                </ul>
			</div>
		);
	}
}