import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';

class Form extends Component {
    render() {
        const { onChangeFunc } = this.props;
        return (
            <form>
                <GeneralInfo onChange={onChangeFunc}/>
                <Education onChange={onChangeFunc}/>
                <Experience onChange={onChangeFunc}/>
            </form>
        );
    };
}

export default Form;