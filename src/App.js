import React, { Component } from 'react';
import Form from './components/Form';
import PdfPreview from './components/PdfPreview';
import PdfView from './components/PdfView';
import { PDFViewer } from '@react-pdf/renderer';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      form: {
          name: '',
          email: '',
          phone: '',
          website: '',
          school: '',
          location: '',
          degree: '',
          yearsAttended: '',
          company: '',
          position: '',
          yearsWorked: '',
          bulletOne: '',
          bulletTwo: '',
          bulletThree: '',
      },
      among: '',
    };
  }

  handleChange = (e) => {
    const val = e.target.value;
    const nam = e.target.name;
    this.setState({
      form: {
        [nam]: val,
      },
    });
  };

  render() {
    return (
      <div className='app'>
        <Form handleChange={this.handleChange} />
        <PdfPreview form={this.state.form} />
        <PDFViewer className='PdfView'>
          <PdfView/>
        </PDFViewer>
        <div>{this.state.form.name} a</div>
      </div>
    );
  };
}

export default App;
