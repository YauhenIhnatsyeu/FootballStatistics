import React from "react";

export default class PlayersList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            currentPageIndex: 0
        }
    }
    
    handleClick = (pageIndex) => {
        if (pageIndex < 0 
            || pageIndex > this.props.pagesCount - 1
            || pageIndex === this.state.currentPageIndex)
            return;

        if (this.props.onClick) {
            this.props.onClick(pageIndex);
        }

        this.setState({
            currentPageIndex: pageIndex
        });
    }

    getOptions = () => {
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
                    <li className="paging-controls__control">
                        <select
                            className="paging-controls__select"
                            onChange={(event) => this.handleClick(event.target.value - 1)}
                            value={this.state.currentPageIndex + 1}
                        >
                            {this.getOptions()}
                        </select>
                    </li>
                    <li
                        className="paging-controls__control"
                        onClick={() => this.handleClick(0)}
                    >
                        first
                    </li>
                    <li
                        className="paging-controls__control"
                        onClick={() => this.handleClick(this.state.currentPageIndex - 1)}
                    >
                        prev
                    </li>
                    <li
                        className="paging-controls__control"
                        onClick={() => this.handleClick(0)}
                    >
                        1/6
                    </li>
                    <li
                        className="paging-controls__control"
                        onClick={() => this.handleClick(this.state.currentPageIndex + 1)}
                    >
                        next
                    </li>
                    <li
                        className="paging-controls__control"
                        onClick={() => this.handleClick(this.props.pagesCount - 1)}
                    >
                        last
                    </li>
                </ul>
			</div>
		);
	}
}