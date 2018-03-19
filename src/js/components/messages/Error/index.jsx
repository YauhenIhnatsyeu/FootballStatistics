import React from "react";

import Message from "../Message";

export default class Error extends React.Component {
	render() {
		return (
			<Message>
                <p>An error occured</p>
                <p>Please, try to reload the page</p>  
			</Message>
		);
	}
}