import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.props.handleChange(e);
    };

    render() {
        return (
            <form>
                <GeneralInfo handleChange={this.handleChange} />
                <Education handleChange={this.handleChange} />
                <Experience handleChange={this.handleChange} />
            </form>
        );
    };
}

export default Form;