import React, { Component } from 'react';
import Form from './components/Form';
import PdfPreview from './components/PdfPreview';
import PdfView from './components/PdfView';
import { PDFViewer } from '@react-pdf/renderer';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phone: '',
        website: '',
      },
      educationInfo: {
        school: '',
        location: '',
        degree: '',
        yearsAttended: '',
      },
      experienceInfo: {
        company: '',
        position: '',
        yearsWorked: '',
        bulletOne: '',
        bulletTwo: '',
        bulletThree: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <div className='app'>
        <Form onChangeFunc={this.state.handleChange} />
        <PdfPreview/>
        <PDFViewer className='PdfView'>
          <PdfView/>
        </PDFViewer>
        <div>{this.state.generalInfo.name}a</div>
      </div>
    );
  };
}

export default App;
