import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;
const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
});
function registerUser(formData) {
  return api.post("/register", formData);
}

function registerPet(formData) {
  return api.post("/pets", formData);
}

function loginUser(email, password) {
  return api.post("login", { email, password });
}

function getUser() {
  return api.get("/users");
}

function getPets(page = 1, limit = 15, filters) {
  return api.get("/pets", {
    params: {
      limit,
      page,
      filters: filters,
    },
  });
}

export { registerUser, loginUser, getUser, registerPet, getPets };
export default api;
