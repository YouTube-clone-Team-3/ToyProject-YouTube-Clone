import axios from "axios";

export const request = ({ method = "GET", url = "", reqData = {} }) => {
  document.body.style.cursor = "wait";
  return axios({
    params: {
      apikey: import.meta.env.VITE_API_KEY,
    },
    method,
    url: import.meta.env.VITE_BASE_URL + url,
    data: reqData,
  })
    .then((res) => {
      document.body.style.cursor = "default";
      return res;
    })
    .catch((err) => {
      console.log(err);
      document.body.style.cursor = "default";
      return err.response;
    });
};