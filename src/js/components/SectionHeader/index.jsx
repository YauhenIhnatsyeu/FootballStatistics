import React from "react";

import PropTypes from "prop-types";

import "./index.css";

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

SectionHeader.propTypes = {
    title: PropTypes.string
}