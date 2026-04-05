import axios from "axios";

const instace = axios.create({
  baseURL: "http://172.21.131.39:3000/api",
  withCredentials: true,
});

export default instace;
