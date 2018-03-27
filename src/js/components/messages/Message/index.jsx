import PropTypes from "prop-types";

import React from "react";

import "./index.css";

export default class Message extends React.Component {
    render() {
        return (
            <div className="message-container">
                <div className="message">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Message.propTypes = {
    children: PropTypes.node.isRequired,
};
