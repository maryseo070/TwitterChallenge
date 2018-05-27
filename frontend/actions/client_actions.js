import * as ClientAPIUtil from '../util/client_api_util';
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_TWITTER_ERRORS = 'RECEIVE_TWITTER_ERRORS';


export const receiveTweets = tweets => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
};

export const searchHandles = handle => dispatch => {
  return ClientAPIUtil.searchHandles(handle).then(
    tweets => dispatch(receiveTweets(tweets),
    errors => dispatch(receiveErrors(errors))
    )
  );
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_TWITTER_ERRORS,
    errors: errors
  };
};
