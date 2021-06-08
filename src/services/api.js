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

function requestedAdoptions() {
  return api.get("/adoption/adopter/requests");
}

function getPets(page = 1, filters, sort, limit = 15) {
  let filtersList = {};
  for (let filter in filters) {
    if (filters[filter]) filtersList[`filters[${filter}]`] = filters[filter];
  }
  return api.get("/pets", {
    params: {
      limit,
      page,
      sort,
      ...filtersList,
    },
  });
}

function getPet(petId) {
  return api.get(`/pets/${petId}`);
}
export {
  getPet,
  registerUser,
  loginUser,
  getUser,
  registerPet,
  getPets,
  requestedAdoptions,
};
export default api;
