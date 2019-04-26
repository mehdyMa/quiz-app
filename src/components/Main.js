import React from 'react';
import '../styles/app.css';
import Footer from './Footer.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return(
      <div className='container'>
      <h1>Question</h1>
      <Footer />
      </div>
    )
  }
}

export default Main
