import React, { Component } from "react";

import { dateToString } from "Utilities/formatDate";

import "./index.css";

export default class DatesForm extends Component {
    constructor(props) {
        super(props);

        const currentDate = new Date();
        console.log(currentDate);
        this.currentDateString = dateToString(currentDate);

        // Adding 2 weeks to current date
        currentDate.setDate(currentDate.getDate() + 14);
        const toDateString = dateToString(currentDate);

        this.state = {
            fromDate: this.currentDateString,
            toDate: toDateString,
        };
    }

    handleFromDateChange = (date) => {
        this.props.onFromDateChange(date);

        this.setState({
            fromDate: date,
        });
    }

    handleToDateChange = (date) => {
        this.props.onToDateChange(date);

        this.setState({
            toDate: date,
        });
    }

    render() {
        return (
            <form className="dates-form">
                <input
                    className="dates-form__input"
                    type="date"
                    value={this.state.fromDate}
                    min={this.currentDateString}
                    onChange={(event) => { this.handleFromDateChange(event.target.value); }}
                />

                <input
                    className="dates-form__input dates-form__input_position_down"
                    type="date"
                    value={this.state.toDate}
                    min={this.currentDateString}
                    onChange={(event) => { this.handleToDateChange(event.target.value); }}
                />
            </form>
        );
    }
}
