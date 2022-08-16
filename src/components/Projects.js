import React, { Component } from 'react'

class Projects extends Component {
  render() {
    return (
      <fieldset className='fieldset'>
            <legend>Project One</legend>
            <div class="subCategoryTwo">
              <p>
                  <label htmlFor='projectName'>Name</label>
                  <input type='text' name='projectName' className='projectName' onChange={this.props.handleChange} value={this.props.form.projectName}></input>
              </p>
              <p>
                  <label htmlFor='projectLanguages'>Languages/Frameworks</label>
                  <input type='text' name='projectLanguages' className='projectLanguages' onChange={this.props.handleChange} value={this.props.form.projectLanguages}></input>
              </p>
              <p>
                  <label htmlFor='projectDate'>Time Period</label>
                  <input type='text' name='projectDate' className='projectDate' onChange={this.props.handleChange} value={this.props.form.projectDate}></input>
              </p>
            </div>
            <div class="subCategoryTwo">
              <p>
                  <label htmlFor='projectBulletOne'>Bullet Point One</label>
                  <input type='text' name='projectBulletOne' className='projectBulletOne' onChange={this.props.handleChange} value={this.props.form.projectBulletOne}></input>
              </p>
              <p>
                  <label htmlFor='projectBulletTwo'>Bullet Point Two</label>
                  <input type='text' name='projectBulletTwo' className='projectBulletTwo' onChange={this.props.handleChange} value={this.props.form.projectBulletTwo}></input>
              </p>
              <p>
                  <label htmlFor='projectBulletThree'>Bullet Point Three</label>
                  <input type='text' name='projectBulletThree' className='projectBulletThree' onChange={this.props.handleChange} value={this.props.form.projectBulletThree}></input>
              </p>
            </div>
      </fieldset>
    )
  }
}

export default Projects