import React, { Component } from 'react';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      handle: ""
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateField() {
    return (e) => {
      this.setState({handle: e.currentTarget.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.searchHandles(this.state.handle);
  }


  render () {
    return (
      <div>main
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Twitter Handle to Search"
            onChange={this.updateField()}
            value={this.state.handle}>
          </input>
          <input type="submit">
          </input>
        </form>
      </div>
    )
  }
}

export default Main;
