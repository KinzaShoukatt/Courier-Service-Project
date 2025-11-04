import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
console.log("BASE URL:", process.env.REACT_APP_API_URL);
export default axios;
