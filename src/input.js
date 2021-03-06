import React from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions/index';

export class UnconnectedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: ""
    }
  }

  submitGuessedWord = (event) => {
    event.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    };

    this.setState({
      currentGuess: ''
    })
  }
  render() {
    const content = this.props.success ? null: (
      <form className="form-inline">
        <input 
          data-test="input-box" 
          className="mb-2 mx-sm-3" 
          type="text"
          placeholder="enter guess" 
          value={this.state.currentGuess}
          onChange={(event) => this.setState({ currentGuess: event.target.value })} />
        <button
          data-test="submit-button"
          type="submit"
          onClick={(event) => {
            this.submitGuessedWord(event);
          }}
          className="btn btn-primary mb-2">
          Submit  
        </button>
      </form>
    )
    return (
      <div data-test="component-input">
        {content}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.success
  }
}

export default connect(mapStateToProps, { guessWord: guessWord })(UnconnectedInput);