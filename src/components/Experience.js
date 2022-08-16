import React, { Component } from 'react'

class Experience extends Component {
  render() {
    return (
        <fieldset className='fieldset'>
            <legend>Work Experience One</legend>
            <div class="subCategoryTwo">
                <p>
                    <label htmlFor='position'>Position</label>
                    <input type='text' name='position' className='position' onChange={this.props.handleChange} value={this.props.form.position}></input>
                </p>
                <p>
                    <label htmlFor='company'>Company Name</label>
                    <input type='text' name='company' className='company' onChange={this.props.handleChange} value={this.props.form.company}></input>
                </p>
                <p>
                    <label htmlFor='yearsWorked'>Duration of Work</label>
                    <input type='text' name='yearsWorked' className='yearsWorked' onChange={this.props.handleChange} value={this.props.form.yearsWorked}></input>
                </p>
                <p>
                    <label htmlFor='companyLocation'>Location</label>
                    <input type='text' name='companyLocation' className='companyLocation' onChange={this.props.handleChange} value={this.props.form.companyLocation}></input>
                </p>
            </div>
            <div class="subCategoryTwo">
                <p>
                    <label htmlFor='bulletOne'>Bullet Point One</label>
                    <input type='text' name='bulletOne' className='bulletOne' onChange={this.props.handleChange} value={this.props.form.bulletOne}></input>
                </p>
                <p>
                    <label htmlFor='bulletTwo'>Bullet Point Two</label>
                    <input type='text' name='bulletTwo' className='bulletTwo' onChange={this.props.handleChange} value={this.props.form.bulletTwo}></input>
                </p>
                <p>
                    <label htmlFor='bulletThree'>Bullet Point Three</label>
                    <input type='text' name='bulletThree' className='bulletThree' onChange={this.props.handleChange} value={this.props.form.bulletThree}></input>
                </p>
            </div>
        </fieldset>
    )
  }
}

export default Experience