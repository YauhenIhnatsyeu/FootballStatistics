import React from "react";

export default class SectionHeader extends React.Component {
	render() {
		return (
			<div className="section-header">
				<h1 className="section-header__title">
					{this.props.title}
				</h1>
			</div>
		);
	}
}