import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    // headers: {
    //   "Accept-Language": "en",
    //   "X-api-key": "sdasd12asda2sd2",
    // },
    params: {
        "api_key": '0517ef6f93c22282f56d30c3f754c5c9'
    }
});


// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
        
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log(response)
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // Show ERROR Handler Message
      return Promise.reject(error);
    }
  );