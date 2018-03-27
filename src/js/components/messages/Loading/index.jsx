import React from "react";

import Message from "../Message";

export default class Loading extends React.Component {
    render() {
        return (
            <Message>
                <p>Loading...</p>
                <p>Please, wait...</p>
            </Message>
        );
    }
}
