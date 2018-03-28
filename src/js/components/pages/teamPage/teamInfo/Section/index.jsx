import React, { Component } from "react";

import PropTypes from "prop-types";

import SectionHeader from "Components/SectionHeader";

export default class Section extends Component {
    render() {
        return (
            <div className="team-panel__section">
                <SectionHeader title={this.props.title} />
                {this.props.children}
            </div>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

Section.defaultProps = {
    title: "",
    children: null,
};
