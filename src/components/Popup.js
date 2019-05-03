import React from 'react';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 'start',
      title: 'Welcome To My Quiz',
      text: 'This is a quiz application built using ReactJS',
      buttonText: 'Start Quiz'
    };
    this.handlePopup = this.handlePopup.bind(this);
  }

  createMarkup(t) {
    return {__html: t};
  }

  handlePopup(){
    let { time } = this.state;
    if (time === 'start') {
      this.setState({
        time: 'end',
        title: 'Quiz Finished',
        buttonText: 'Restart'
      });
      this.props.startQuiz();
    }
    // else {
    //   location.reload();
    // }
  }

  render() {
    let { title, text, buttonText } = this.state;
    let { style } = this.props;

    return(
      <div className="popup-container" style={style}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="popup">
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={this.createMarkup(text)} />
              <button className="button-fancy" onClick={this.handlePopup}>{buttonText}</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Popup;
