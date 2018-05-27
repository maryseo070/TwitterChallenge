import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      handle: ""
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderTweets = this.renderTweets.bind(this);
    this.userMentions = this.userMentions.bind(this);
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

  parseMentions(tweet) {
    tweet.text.map( word => {
      if (word[0] === "@")
    });
  }

  userMentions(tweet) {
    let mentions = [];
    if (tweet.user_mentions.length > 0) {
      tweet.user_mentions.map( m => mentions.push(m.screen_name) );
    }
    return mentions.map ( m => {
      return (
        <div>
          <a href={`https://twitter.com/${m}`} target="_blank" >{m}</a>
          <br></br>
        </div>
      );
    });
  }

  renderTweets() {
    let retrievedTweets = this.props.tweets.map((tweet, i) => {
      let date = tweet.created_at;
      date = Date.parse(date);
      date = new Date(date).toString();

      let mentions = this.userMentions(tweet);

      return (
        <div className="single-tweet" key={i}>
          <li>
            <div>{tweet.text}</div>
            <div className="tweet-date">{date}</div>

            {this.userMentions(tweet)}

            <a></a>
          </li>
        </div>
      );
    });

    return retrievedTweets;
  }

  render () {

    return (
      <section>
      <nav className="top-nav">
        <button className="session-button-logout" onClick={this.handleClick}>Log Out</button>
      </nav>

      <div className="main">


        <form className="main-form" onSubmit={this.handleSubmit}>
          <div className="instructions">
            Type in a Twitter handle to get their last 25 tweets! (i.e., MichelleObama)
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
          {this.renderTweets()}
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
