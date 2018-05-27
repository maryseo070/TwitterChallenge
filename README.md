# Twitter API Coding Challenge
Link to live version: https://seotwitterchallenge.herokuapp.com/

This app uses the Twitter API to to fetch the last 25 tweets per searched Twitter handle. Technologies used include a Ruby on Rails back end and ReactJS/Redux front end.


It implements basic auth where users can sign up requiring only a username and password of minimum length 6 and log in/out. Users must be logged in to view tweets.

### Local Setup Instructions:
1. Clone this repo and navigate into the project directory

2. In the terminal, run `bundle install` (to install gems),
   `npm install` (to install node packages),
   `bundle exec rails db:migrate` (to make database migrations),
   and `bundle exec rails db:create` (to set up the database)

3. I used the Figaro gem to hide Twitter API keys so in order to set up the API key information, create an `application.yml` file in the `config` folder and input the API key information. If I've emailed you the API keys, simply copy and paste them as-is into the `application.yml` file. If you have your own API keys, use the following format:

    `consumer_key: "INPUT KEY"`  
    `consumer_secret: "INPUT KEY"`  
    `access_token: "INPUT KEY"`   
    `access_token_secret: "INPUT KEY"`
     
4. Run the command `npm run start` in your terminal to start webpack and `rails server` to start the rails server (in 2 different tabs).

5. navigate to localhost:3000 and the welcome page will appear!
