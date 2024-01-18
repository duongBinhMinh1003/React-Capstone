import axios from "axios";



// axios instance
export let https = axios.create({
   baseURL:"https://movienew.cybersoft.edu.vn",
    headers:{
        TokenCybersoft : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjAyLzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzI4NjQwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE3NDM0MDAwfQ.I_5jTmaP4oPXDl-5EqRjQqnodRT3qKLF9_hDUjhDwFQ",
        Authorization:"Bearer " + JSON.parse(localStorage.getItem("user_info"))?.accessToken,
       
      },
});
// Add a request interceptor
// https.interceptors.request.use(function (config) {
//    store.dispatch(setLoadingOn())
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// Add a response interceptor
// https.interceptors.response.use(function (response) {
//   store.dispatch(setLoadingOff())
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   return response;
// }, function (error) {
//   store.dispatch((setLoadingOff()))
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error);
// });