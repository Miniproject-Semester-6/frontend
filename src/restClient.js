import axios from "axios";

const REACT_BACKEND_URL = "http://localhost:3000/api"; //local
// const REACT_BACKEND_URL = "https://backend-gap9.onrender.com/api"; //production

const restClient = axios.create({
  baseURL: REACT_BACKEND_URL,
});

export default restClient;
