import React from 'react';

import { Game } from '../Game/Game';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedin: false,
      fields: { player1: '', player2: '' },
      errors: { player1: '', player2: '' },
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(data) {
    this.setState({
      fields: Object.assign(this.state.fields, data),
    });
  }

  submitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ loggedin: true });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (fields.player1 === '') {
      formIsValid = false;
      errors['player1'] = '*Please enter player1 Name.';
    }

    if (fields.player2 === '') {
      formIsValid = false;
      errors['player2'] = '*Please enter player2 Name.';
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
  render() {
    return this.state.loggedin ? (
      <Game playerNames={this.state.fields} />
    ) : (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4 offset-4">
            <div className="boxOutline">
              <div className="boxWrapper">
                <form
                  method="post"
                  name="LoginForm"
                  className="p-4"
                  onSubmit={this.submitForm}
                >
                  <div className="form-group">
                    <h6 className="text-center mb-2">
                      WELCOME TO{' '}
                      <span className="highlightedText">TIC TAC TOE</span>
                    </h6>
                    <label>Player 1</label>
                    <input
                      type="text"
                      name="player1"
                      value={this.state.fields.player1}
                      placeholder="Enter player 1 Name"
                      onChange={(e) =>
                        this.handleChange({ player1: e.target.value })
                      }
                    />
                    <div className="errorMsg">{this.state.errors.player1}</div>
                  </div>
                  <div className="form-group">
                    <label>Player 2</label>
                    <input
                      type="text"
                      name="player2"
                      value={this.state.fields.player2}
                      placeholder="Enter player 2 Name"
                      onChange={(e) =>
                        this.handleChange({ player2: e.target.value })
                      }
                    />
                    <div className="errorMsg">{this.state.errors.player2}</div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn primaryBtn shadow-sm">
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
