//prettier-ignore
import {    
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT,
    SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    FETCH_FEED_START, FETCH_FEED_SUCCESS, FETCH_FEED_FAILURE,
    UPDATE_FEED,
    SUBMIT_CHOICE_START, SUBMIT_CHOICE_SUCCESS, SUBMIT_CHOICE_FAILURE
} from "../actions";

const INITIAL_STATE = {
  feed: [],
  isLoading: false,
  loggedInUser: {},
  message: ""
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoading: true, message: "" };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, loggedInUser: action.payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, message: action.payload };
    case LOGOUT:
      return INITIAL_STATE;
    case SIGNUP_START:
      return { ...state, isLoading: true, message: "" };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false, message: action.payload };
    case SIGNUP_FAILURE:
      return { ...state, isLoading: false, message: action.payload };
    case FETCH_FEED_START:
      return { ...state, isLoading: true, message: "" };
    case FETCH_FEED_SUCCESS:
      return { ...state, isLoading: false, feed: action.payload };
    case FETCH_FEED_FAILURE:
      return { ...state, isLoading: false, message: action.payload };
    case UPDATE_FEED:
      return { ...state, feed: action.payload };
    case SUBMIT_CHOICE_START:
      return { ...state, isLoading: true, message: "" };
    case SUBMIT_CHOICE_SUCCESS:
      return { ...state, isLoading: false };
    case SUBMIT_CHOICE_FAILURE:
      return { ...state, isLoading: false, message: "" };
    default:
      return state;
  }
};
