import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data) => axiosClient.post("/resumes", data);
const GetUserResume = (userEmail) =>
  axiosClient.get(`/resumes?filters[userEmail][$eq]=${userEmail}`);

const updateResumeDetails = (id, data) =>
  axiosClient.put(`/resumes/${id}`, data);

const GlobalApi = {
  CreateNewResume,
  GetUserResume,
  updateResumeDetails,
};

export default GlobalApi;
