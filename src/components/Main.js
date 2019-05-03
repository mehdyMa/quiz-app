import React from 'react';
import data from '../data/data.js';
import '../styles/app.css';
import Footer from './Footer.js';
import Answers from './Answers.js';
import Popup from './Popup.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      total: data.length,
      showButton: false,
      score: 0,
      questionAnswered: false,
      displayPopup: 'flex'
    };
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  getData(n) {
    this.setState({
      question: data[n].question,
      answers: [data[n].answers[0], data[n].answers[1]],
      correctAnswer: data[n].correctAnswer,
      num: this.state.num + 1
    });
  }

  componentWillMount() {
    let { num } = this.state;
    this.getData(num);
  }

  handleStartQuiz() {
    this.setState({
      displayPopup: 'none',
      num: 1
    })
  }

  nextQuestion() {
      let { num, score, total } = this.state;
      if (num === total) {
        this.setState({
          displayPopup: 'flex'
        });
      } else {
        this.getData(num);
        this.setState({
          showButton: false,
          questionAnswered: false
        });
      }
  }

  handleShowButton() {
    this.setState({
      questionAnswered: true,
      showButton: true
    })
  }

  render() {
    let { num, total, question, answers, correctAnswer, questionAnswered, displayPopup, showButton } = this.state

    return(
      <div className='container'>
        <Popup startQuiz={this.handleStartQuiz} style={{display: displayPopup}}/>
        <div className='row'>
          <div className='col-lg-10 col-lg-offset-1'>
            <div id='question'>
              <h4>Question: {num}/{total}</h4>
              <p>{question}</p>
            </div>
            <Answers answers={answers} isAnswered={questionAnswered} correctAnswer={correctAnswer} />
            <div id="submit">
              {showButton ? <button className='button-fancy' onClick={this.nextQuestion}>{num === total ? 'Finish Quiz' : 'Next Question'}</button> : null}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Main
