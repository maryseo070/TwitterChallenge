import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      handle: ""
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.tweets)
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
    let retrievedTweets = this.props.tweets.map((tweet) => {
    return (
        <section>
        <div>{tweet.text}</div>
        <div>{tweet.created_at}</div>
      </section>
    );
    });

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
        {retrievedTweets}
      </div>
    );
  }
}

Main.propType = {
  tweets: PropTypes.array
};
Main.defaultProps = {
  tweets: []
};


export default Main;
