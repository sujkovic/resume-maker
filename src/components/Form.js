import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <GeneralInfo />
                <Education />
                <Experience />
            </form>
        );
    };
}

export default Form;