import React, { Component } from 'react'

class Education extends Component {
  render() {
    return (
        <fieldset>
            <legend>Education</legend>
            <p>
                <label htmlFor='school'>School</label>
                <input type='text' name='school' className='school' onChange={this.props.handleChange}></input>
            </p>
            <p>
                <label htmlFor='schoolLocation'>Location</label>
                <input type='text' name='schoolLocation' className='schoolLocation' onChange={this.props.handleChange}></input>
            </p>
            <p>
                <label htmlFor='degree'>Degree</label>
                <input type='text' name='degree' className='degree' onChange={this.props.handleChange}></input>
            </p>
            <p>
                <label htmlFor='yearsAttended'>Years Attended</label>
                <input type='text' name='yearsAttended' className='yearsAttended' onChange={this.props.handleChange}></input>
            </p>
        </fieldset>
    )
  }
}

export default Education