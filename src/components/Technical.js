import React, { Component } from 'react'

class Technical extends Component {
  render() {
    return (
      <fieldset>
            <legend>Technical Skills</legend>
            <p>
                <label htmlFor='technicalOne'>Category One</label>
                <input type='text' name='technicalOne' className='technicalOne' onChange={this.props.handleChange} value={this.props.form.technicalOne}></input>
                <input type='text' name='technicalOneText' className='technicalOneText' onChange={this.props.handleChange} value={this.props.form.technicalOneText}></input>
            </p>
            <p>
                <label htmlFor='technicalTwo'>Category Two</label>
                <input type='text' name='technicalTwo' className='technicalTwo' onChange={this.props.handleChange} value={this.props.form.technicalTwo}></input>
                <input type='text' name='technicalTwoText' className='technicalTwoText' onChange={this.props.handleChange} value={this.props.form.technicalTwoText}></input>
            </p>
            <p>
                <label htmlFor='technicalOne'>Category Three</label>
                <input type='text' name='technicalThree' className='technicalThree' onChange={this.props.handleChange} value={this.props.form.technicalThree}></input>
                <input type='text' name='technicalThreeText' className='technicalThreeText' onChange={this.props.handleChange} value={this.props.form.technicalThreeText}></input>
            </p>
      </fieldset>
    )
  }
}

export default Technical