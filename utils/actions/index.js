export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const FETCH_FEED_START = "FETCH_FEED_START";
export const FETCH_FEED_SUCCESS = "FETCH_FEED_SUCCESS";
export const FETCH_FEED_FAILURE = "FETCH_FEED_FAILURE";
export const UPDATE_FEED = "UPDATE_FEED";
export const SUBMIT_CHOICE_START = "SUBMIT_CHOICE_START";
export const SUBMIT_CHOICE_SUCCESS = "SUBMIT_CHOICE_SUCCESS";
export const SUBMIT_CHOICE_FAILURE = "SUBMIT_CHOICE_FAILURE";
// export const  = ''

import { PostRequest } from "../../API";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  PostRequest("login", creds)
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data.data }))
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export const logout = () => ({ type: LOGOUT });

export const signup = (form, push) => dispatch => {
  dispatch({ type: SIGNUP_START });
  PostRequest("signup", form)
    .then(res => {
      console.log(res);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.status });
      push();
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};

export const fetchFeed = params => dispatch => {
  dispatch({ type: FETCH_FEED_START });
  PostRequest("getquestions", params)
    .then(res => dispatch({ type: FETCH_FEED_SUCCESS, payload: res.data.data }))
    .catch(err => dispatch({ type: FETCH_FEED_FAILURE, payload: err }));
};

export const updateFeed = feed => ({ type: UPDATE_FEED, payload: feed });

export const submitChoice = params => dispatch => {
  dispatch({ type: SUBMIT_CHOICE_START });
  PostRequest("setchoice", params)
    .then(() => {
      console.log("PARAMS: ", params);
      dispatch({ type: SUBMIT_CHOICE_SUCCESS });
    })
    .catch(err => dispatch({ type: SUBMIT_CHOICE_FAILURE, payload: err }));
};
