import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});
function registerUser(formData) {
  return api.post("/register", formData);
}
export { registerUser };
export default api;
