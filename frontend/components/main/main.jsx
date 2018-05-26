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
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then( ()=> this.props.history.push('/'));
  }

  render () {
    let retrievedTweets = this.props.tweets.map((tweet, i) => {
      let date = tweet.created_at;
      date = Date.parse(date);
      date = new Date(date).toString();
      return (
        <li key={i}>
          <div>{tweet.text}</div>
          <div>{date}</div>
        </li>
      );
    });

    return (
      <section>
      <nav className="top-nav">
        <button className="session-button-logout" onClick={this.handleClick}>Log Out</button>
      </nav>

      <div className="main">


        <form className="main-form" onSubmit={this.handleSubmit}>
          <div className="instructions">
            Type in a Twitter handle to get their last 25 tweets! (i.e., BarackObama)
          </div>
          <input
            className="input-text"
            type="text"
            placeholder="Twitter Handle"
            onChange={this.updateField()}
            value={this.state.handle}>
          </input>
          <input className="session-button" type="submit" value="Search">
          </input>
        </form>

        <ol className="tweets">
          {retrievedTweets}
        </ol>
      </div>

    </section>

    );
  }
}

Main.propType = {
  tweets: PropTypes.array,
  currentUser: PropTypes.object,
  logout: PropTypes.func
};
Main.defaultProps = {
  tweets: [],
  currentUser: {}
};


export default Main;
