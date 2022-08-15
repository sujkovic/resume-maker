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
          name: 'John Doe',
          email: 'johndoe4@gmail.com',
          phone: '123-456-7890',
          website: 'github.com',
          school: 'Binghamton University',
          schoolLocation: 'Binghamton, New York',
          degree: 'Bachelor\'s of Science in Computer Science',
          yearsAttended: '2020-2024',
          company: '',
          position: '',
          yearsWorked: '',
          bulletOne: '',
          bulletTwo: '',
          bulletThree: '',
      },
    };
  }

  handleChange = (e) => {
    const val = e.target.value;
    const nam = e.target.name;
    let newState = Object.assign({}, this.state);
    newState.form[nam] = val;
    this.setState(newState);

  };

  render() {
    return (
      <div className='app'>
        <Form handleChange={this.handleChange} form={this.state.form} />
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
