import React from 'react';

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswered: false,
      classNames: ['', '']
    }
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(e) {
    let { isAnswered } = this.props;
    if (!isAnswered) {
      let elem = e.currentTarget;
      let answer = Number(elem.dataset.id);
      let { correctAnswer } = this.props;

      if (answer === correctAnswer) {
        console.log('eee');
      }
    }
  }

  render() {
    let { answers } = this.props;

    return(
      <div id="answers">
        <ul>
          <li onClick={this.checkAnswer} data-id="1"><span>1- </span><p>{answers[0]}</p></li>
          <li onClick={this.checkAnswer} data-id="2"><span>2- </span><p>{answers[1]}</p></li>
          <li onClick={this.checkAnswer} data-id="3"><span>3- </span><p>{answers[1]}</p></li>
          <li onClick={this.checkAnswer} data-id="4"><span>4- </span><p>{answers[1]}</p></li>
        </ul>
      </div>
    )
  }
}

export default Answers;
