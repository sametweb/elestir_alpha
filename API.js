import axios from "axios";

const baseURL = "https://elestirorg.appspot.com";

const actions = {
  login: "/login",
  isloggedin: "/isloggedin",
  signup: "/signup",
  getquestions: "/getquestions",
  question: "/question",
  user: "/user",
  getcomments: "/getcomments",
  createquestion: "/createquestion",
  createcomment: "/createcomment",
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
    case "user":
      return axios.post(`${baseURL}${actions.user}/${data}`, headers);
    case "getcomments":
      return axios.post(
        `${baseURL}${actions.getcomments}/${data.questionID}?count=${data.count}&offset=${data.offset}`,
        headers
      );
    case "createquestion":
      return axios.post(`${baseURL}${actions.createquestion}`, data, headers);
    case "createcomment":
      return axios.post(`${baseURL}${actions.createcomment}`, data, headers);
    case "setchoice":
      return axios.post(`${baseURL}${actions.setchoice}`, data, headers);

    default:
      console.log("Please define an action");
  }
};
