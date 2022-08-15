import React, { Component } from 'react'

class PdfPreview extends Component {
  render() {
      const { form } = this.props;
    return (
        <div className='PdfPreview'>
            <div className='sectionOne'>
                <div className='viewName'>{form.name}</div>
                <div className='viewGeneralInfo'>
                    <div className='viewPhone'>{form.phone}</div>
                    <a className='viewWebsite' href={form.website}>{form.website}</a>
                    <div className='viewEmail'>{form.email}</div>
                </div>
            </div>
            <div className='sectionTwo'>
                <div className='viewEducationTitle'>Education</div>
                <div className='viewEducationWrapper'>
                    <div className='viewSchoolWrapperOne'>
                        <div className='viewSchool'>{form.school}</div>
                        <div className='viewSchoolLocation'>{form.schoolLocation}</div>
                    </div>
                    <div className='viewSchoolWrapperTwo'>
                        <div className='viewDegree'>{form.degree}</div>
                        <div className='viewYearsAttended'>{form.yearsAttended}</div>
                    </div>
                </div>
            </div>
            <div className='sectionThree'>

            </div>
        </div>
    )
  }
}

export default PdfPreview