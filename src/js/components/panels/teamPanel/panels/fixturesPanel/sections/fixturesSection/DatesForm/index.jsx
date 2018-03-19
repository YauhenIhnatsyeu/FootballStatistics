import React from "react";

import dateToString from "Utilities/dateToString"

export default class DatesForm extends React.Component {
    constructor(props) {
        super(props);

        const currentDate = new Date();

        //Turning current date into string to pass it to from-date input value
        this.currentDateString = dateToString(currentDate);

        //Adding 2 weeks to current date
        currentDate.setDate(currentDate.getDate() + 14);
        //Turning to-date into string
        const toDateString = dateToString(currentDate);

        this.state = {
            fromDate: this.currentDateString,
            toDate: toDateString
        }
    }
    
    handleFromDateChange = (date) => {
        this.props.onFromDateChange(date);

        this.setState({
            //Changing value of from-date input, when onChange fires
            fromDate: date
        });
    }

    handleToDateChange = (date) => {
        this.props.onToDateChange(date);

        this.setState({
            //Changing value of to-date input, when onChange fires
            toDate: date
        });
    }

    render() {
        return (
            <form className="dates-form">
                <input 
                    className="dates-form__input"
                    type="date" 
                    value={this.state.fromDate}
                    //Min date is current date
                    min={this.currentDateString} 
                    //Passing to handler new date
                    onChange={(event) => this.handleFromDateChange(event.target.value)}
                />

                <input 
                    className="dates-form__input"
                    type="date" 
                    value={this.state.toDate}
                    //Min date is current date
                    min={this.currentDateString} 
                    //Passing to handler new date
                    onChange={(event) => this.handleToDateChange(event.target.value)}
                />
            </form>
        );
    }   
}