import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props){
    super(props);
    this.state= {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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


  render () {
    return (
      <div>
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
