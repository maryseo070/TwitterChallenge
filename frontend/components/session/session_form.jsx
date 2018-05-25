import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props){
    super(props);
    this.state= {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( (u) => this.props.history.push('/main'));
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="rendered-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

  render () {
    return (
      <div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.updateField("username")}>
          </input>
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.updateField("password")}>
          </input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}



export default SessionForm;
