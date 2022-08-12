import React, { Component } from 'react';
import Form from './components/Form';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <Form />
      </div>
    );
  };
}

export default App;
