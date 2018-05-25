import * as ClientAPIUtil from '../util/client_api_util';
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";


export const receiveTweets = tweets => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
};

export const searchHandles = handle => dispatch => {
  return ClientAPIUtil.searchHandles(handle).then(
    tweets => dispatch(receiveTweets(tweets))
  );
};
