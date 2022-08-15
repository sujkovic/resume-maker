import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.props.handleChange(e);
    };

  render() {
    return (
        <fieldset>
            <legend>General Information</legend>
            <p>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' className='name' onChange={this.handleChange} value={this.props.form.name}></input>
            </p>
            <p>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' className='email' onChange={this.handleChange} value={this.props.form.email}></input>
            </p>
            <p>
                <label htmlFor='phone'>Phone</label>
                <input type='text' name='phone' className='phone' onChange={this.handleChange} value={this.props.form.phone}></input>
            </p>
            <p>
                <label htmlFor='website'>Website</label>
                <input type='text' name='website' className='website' onChange={this.handleChange} value={this.props.form.website}></input>
            </p>
        </fieldset>
    )
  }
}

export default GeneralInfo;