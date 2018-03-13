import React from "react";

export class Loading extends React.Component {
    render() {
        return (
            <div className="message-container">
                <div className="message">
                    <p>Loading...</p>
                    <p>Please, wait...</p>
                </div>
            </div>
        )
    }
}

export class Error extends React.Component {
    render() {
        return (
            <div className="message-container">
                <div className="message">
                    <p>An error occured</p>
                    <p>Please, try to reload the page</p>
                </div>
            </div>
        )
    }
}