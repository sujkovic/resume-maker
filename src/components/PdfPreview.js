import React, { Component } from 'react'

class PdfPreview extends Component {
  render() {
      const { form } = this.props;
    return (
        <div className='PdfPreview'>
            <div className='sectionOne'>
                <div className='viewName'>{form.name}a</div>
                <div className='viewGeneralInfo'>
                    <div className='viewPhone'>{form.phone}b</div>
                    <a className='viewWebsite' href={form.website}>{form.website}c</a>
                    <div className='viewEmail'>{form.email}d</div>
                </div>
            </div>
            <div className='sectionTwo'>

            </div>
            <div className='sectionThree'>

            </div>
        </div>
    )
  }
}

export default PdfPreview