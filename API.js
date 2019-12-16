import axios from "axios";

const baseURL = "https://elestirorg.appspot.com";

const actions = {
  login: "/login",
  signup: "/signup"
};

export const PostRequest = (action, headers) => {
  switch (action) {
    case "login":
      return axios.post(`${baseURL}${actions.login}`, {}, headers);
    case "signup":
      return axios.post(`${baseURL}${actions.login}`, {}, headers);
    default:
      return "Please define an action";
  }
};
