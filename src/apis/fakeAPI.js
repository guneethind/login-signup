import axios from "axios";

const fakeAPI = axios.create({ baseURL: "http://localhost:8000" });

export default fakeAPI;
