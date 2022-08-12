import React, { Component } from 'react'

class Experience extends Component {
  render() {
    return (
        <fieldset>
            <legend>Work Experience</legend>
            <p>
                <label htmlFor='company'>Company Name</label>
                <input type='text' name='company' className='company'></input>
            </p>
            <p>
                <label htmlFor='position'>Position</label>
                <input type='text' name='position' className='position'></input>
            </p>
            <p>
                <label htmlFor='yearsWorked'>Duration of Work</label>
                <input type='text' name='yearsWorked' className='yearsWorked'></input>
            </p>
            <p>
                <label htmlFor='bulletOne'>Bullet Point One</label>
                <input type='text' name='bulletOne' className='bulletOne'></input>
            </p>
            <p>
                <label htmlFor='bulletTwo'>Bullet Point Two</label>
                <input type='text' name='bulletTwo' className='bulletTwo'></input>
            </p>
            <p>
                <label htmlFor='bulletThree'>Bullet Point Three</label>
                <input type='text' name='bulletThree' className='bulletThree'></input>
            </p>
        </fieldset>
    )
  }
}

export default Experience