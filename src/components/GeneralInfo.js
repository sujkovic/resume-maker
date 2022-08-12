import React, { Component } from 'react'

class GeneralInfo extends Component {
  render() {
    return (
        <fieldset>
            <legend>General Information</legend>
            <p>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' className='name'></input>
            </p>
            <p>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' className='email'></input>
            </p>
            <p>
                <label htmlFor='phone'>Phone</label>
                <input type='text' name='phone' className='phone'></input>
            </p>
            <p>
                <label htmlFor='website'>Website</label>
                <input type='text' name='website' className='website'></input>
            </p>
        </fieldset>
    )
  }
}

export default GeneralInfo;