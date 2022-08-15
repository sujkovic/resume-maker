import React, { Component } from 'react';
import Form from './components/Form';
import PdfPreview from './components/PdfPreview';
import PdfView from './components/PdfView';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

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
          technicalOne: 'Languages',
          technicalTwo: 'Frameworks',
          technicalThree: 'Skills',
          technicalOneText: 'C++, JavaScript, HTML, CSS',
          technicalTwoText: 'React, Node.js',
          technicalThreeText: 'Git, Bash, Webpack, VS Code, Adobe Suite',
          company: 'Google',
          position: 'Software Engineer Intern',
          companyLocation: 'New York, NY',
          yearsWorked: 'May 2023 - July 2023',
          bulletOne: 'worked for gogle',
          bulletTwo: 'made program go brrrrr',
          bulletThree: 'beep boop beep boop 100101011',
          projectName: 'Resume Builder',
          projectLanguages: 'Javascript, React, React-pdf, CSS, Git',
          projectDate: 'August 2022',
          projectBulletOne: '',
          projectBulletTwo: '',
          projectBulletThree: '',
          
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
          <PdfView form={this.state.form} />
        </PDFViewer>
        {/* <PDFDownloadLink document={<PdfView form={this.state.form} />} fileName='resume.pdf'>Download</PDFDownloadLink> */}
      </div>
    );
  };
}

export default App;
