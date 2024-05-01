import axios from "axios";

const REACT_BACKEND_URL = "http://localhost:3000/api";

const restClient = axios.create({
  baseURL: REACT_BACKEND_URL,
});

export default restClient;
