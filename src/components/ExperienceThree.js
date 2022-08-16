import React, { Component } from 'react'

class ExperienceThree extends Component {
  render() {
    return (
        <fieldset className='fieldset'>
            <legend>Work Experience Three</legend>
            <div class="subCategoryTwo">
                <p>
                    <label htmlFor='position'>Position</label>
                    <input type='text' name='position' className='position' onChange={this.props.handleChange} value={this.props.form.position3}></input>
                </p>
                <p>
                    <label htmlFor='company'>Company Name</label>
                    <input type='text' name='company' className='company' onChange={this.props.handleChange} value={this.props.form.company3}></input>
                </p>
                <p>
                    <label htmlFor='yearsWorked'>Duration of Work</label>
                    <input type='text' name='yearsWorked' className='yearsWorked' onChange={this.props.handleChange} value={this.props.form.yearsWorked3}></input>
                </p>
                <p>
                    <label htmlFor='companyLocation'>Location</label>
                    <input type='text' name='companyLocation' className='companyLocation' onChange={this.props.handleChange} value={this.props.form.companyLocation3}></input>
                </p>
            </div>
            <div class="subCategoryTwo">
                <p>
                    <label htmlFor='bulletOne'>Bullet Point One</label>
                    <input type='text' name='bulletOne' className='bulletOne' onChange={this.props.handleChange} value={this.props.form.bulletOne3}></input>
                </p>
                <p>
                    <label htmlFor='bulletTwo'>Bullet Point Two</label>
                    <input type='text' name='bulletTwo' className='bulletTwo' onChange={this.props.handleChange} value={this.props.form.bulletTwo3}></input>
                </p>
                <p>
                    <label htmlFor='bulletThree'>Bullet Point Three</label>
                    <input type='text' name='bulletThree' className='bulletThree' onChange={this.props.handleChange} value={this.props.form.bulletThree3}></input>
                </p>
            </div>
        </fieldset>
    )
  }
}

export default ExperienceThree