import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});
function registerUser(formData) {
  return api.post("/register", formData);
}
function loginUser(email, password) {
  return api.post("login", { email, password });
}

function getUser() {
  return api.get("/users");
}

export { registerUser, loginUser, getUser };
export default api;
