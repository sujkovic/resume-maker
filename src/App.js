import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PdfPreview from './components/PdfPreview';
import PdfView from './components/PdfView';
import { PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';

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
          company2: 'Amazon',
          company3: 'NYC DOE',
          position: 'Software Engineer Intern',
          position2: 'Software Engineer Intern',
          position3: 'IT Specialist',
          companyLocation: 'New York, NY',
          companyLocation2: 'Boston, MA',
          companyLocation3: 'New York, NY',
          yearsWorked: 'May 2023 - July 2023',
          yearsWorked2: 'May 2022 - July 2022',
          yearsWorked3: 'December 2022 - January 2023',
          bulletOne: 'worked for gogle',
          bulletTwo: 'made program go brrrrr',
          bulletThree: 'beep boop beep boop 100101011',
          bulletOne2: 'worked for gogle',
          bulletTwo2: 'made program go brrrrr',
          bulletThree2: 'beep boop beep boop 100101011',
          bulletOne3: 'worked for gogle',
          bulletTwo3: 'made program go brrrrr',
          bulletThree3: 'beep boop beep boop 100101011',
          projectName: 'Resume Builder',
          projectName2: 'Weather App',
          projectLanguages: 'Javascript, React, React-pdf, CSS, Git',
          projectLanguages2: 'Python, Django, Bootstrap, Git',
          projectDate: 'August 2022',
          projectDate2: 'September 2022 - November 2022',
          projectBulletOne: 'Made the program that made this resume :O',
          projectBulletTwo: 'Used react and react-pdf to export it',
          projectBulletThree: 'Very easy to use!',
          projectBulletOne2: 'Made a weather app!!',
          projectBulletTwo2: 'It tells you the weather anywhere',
          projectBulletThree2: 'Even Antarctica!',
          
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
        <Header />
        <div class="body">
          <Form handleChange={this.handleChange} form={this.state.form} />
          {/* <PdfPreview form={this.state.form} /> */}
          <PDFViewer className='PdfView'>
            <PdfView form={this.state.form} />
          </PDFViewer>
        </div>
        {/* <PDFDownloadLink className='downloadBtn' document={<PdfView form={this.state.form} />} fileName='resume.pdf'>Download</PDFDownloadLink> */}
      </div>
    );
  };
}

export default App;
