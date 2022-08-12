import React, { Component } from 'react';
import Form from './components/Form';
import PdfView from './components/PdfView';
import { PDFViewer } from '@react-pdf/renderer';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <Form />
        <PDFViewer>
          <PdfView />
        </PDFViewer>
      </div>
    );
  };
}

export default App;
