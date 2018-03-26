import React from "react";

import PropTypes from "prop-types";

//Tab is only for semantics, that's why it doesn't render anything
export default class Tab extends React.Component {
    render() {
        return null;
    }
}

Tab.propTypes = {
    title: PropTypes.string
}