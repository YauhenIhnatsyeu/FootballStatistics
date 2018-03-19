import React from "react";

import DateForms from "./dates-form";

export default class FixturesSection extends React.Component {
    handleFromDateChange = (date) => {

    }

    handleToDateChange = (date) => {

    }

    render() {
        return (
            <React.Fragment>
                <div className="fixture-section__dates-form-container">
                    <DateForms 
                        onFromDateChange={this.handleFromDateChange} 
                        onToDateChange={this.handleToDateChange}
                    />
                
                </div>
            </React.Fragment>
        );
    }   
}