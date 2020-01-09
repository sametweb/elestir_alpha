import axios from "axios";

const baseURL = "https://elestirorg.appspot.com";

const actions = {
  login: "/login",
  isloggedin: "/isloggedin",
  signup: "/signup",
  getquestions: "/getquestions",
  question: "/question",
  createquestion: "/createquestion",
  setchoice: "/setchoice"
};

const headers = {
  "Content-Type": "application/json"
};

export const PostRequest = (action, data) => {
  switch (action) {
    case "login":
      return axios.post(`${baseURL}${actions.login}`, data, headers);
    case "isloggedin":
      return axios.post(`${baseURL}${actions.isloggedin}`, data, headers);
    case "signup":
      return axios.post(`${baseURL}${actions.signup}`, data, headers);
    case "getquestions":
      return axios.post(`${baseURL}${actions.getquestions}`, data, headers);
    case "question":
      return axios.get(`${baseURL}${actions.question}/${data}`, headers);
    case "createquestion":
      return axios.post(`${baseURL}${actions.createquestion}`, data, headers);
    case "setchoice":
      return axios.post(`${baseURL}${actions.setchoice}`, data, headers);

    default:
      console.log("Please define an action");
  }
};
