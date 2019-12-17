import axios from "axios";

const baseURL = "https://elestirorg.appspot.com";

const actions = {
  login: "/login",
  signup: "/signup"
};

const headers = {
  "Content-Type": "application/json"
};

export const PostRequest = (action, data) => {
  switch (action) {
    case "login":
      return axios.post(`${baseURL}${actions.login}`, data, headers);
    case "signup":
      return axios.post(`${baseURL}${actions.login}`, data, headers);
    default:
      console.log("Please define an action");
  }
};
