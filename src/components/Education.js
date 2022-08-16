import React, { Component } from 'react'

class Education extends Component {
  render() {
    return (
        <fieldset>
            <legend>Education</legend>
            <div className='subCategory'>
                <p>
                    <label htmlFor='school'>School</label>
                    <input type='text' name='school' className='school' onChange={this.props.handleChange} value={this.props.form.school}></input>
                </p>
                <p>
                    <label htmlFor='schoolLocation'>Location</label>
                    <input type='text' name='schoolLocation' className='schoolLocation' onChange={this.props.handleChange} value={this.props.form.schoolLocation}></input>
                </p>
            </div>
            <div className='subCategory'>
                <p>
                    <label htmlFor='degree'>Degree</label>
                    <input type='text' name='degree' className='degree' onChange={this.props.handleChange} value={this.props.form.degree}></input>
                </p>
                <p>
                    <label htmlFor='yearsAttended'>Years Attended</label>
                    <input type='text' name='yearsAttended' className='yearsAttended' onChange={this.props.handleChange} value={this.props.form.yearsAttended}></input>
                </p>
            </div>
        </fieldset>
    )
  }
}

export default Education