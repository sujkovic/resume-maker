import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Technical from './Technical';
import Experience from './Experience';
import Projects from './Projects';

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
                <GeneralInfo handleChange={this.handleChange} form={this.props.form} />
                <Education handleChange={this.handleChange} form={this.props.form} />
                <Technical handleChange={this.handleChange} form={this.props.form} />
                <Experience handleChange={this.handleChange} form={this.props.form} />
                <Projects handleChange={this.handleChange} form={this.props.form} />
            </form>
        );
    };
}

export default Form;