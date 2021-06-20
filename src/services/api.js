import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;
const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
});
function registerUser(formData) {
  return api.post("/register", formData);
}
function updateUser(formData) {
  return api.put("/users", formData);
}
function deleteUserPhoto() {
  return api.delete("/users/photo");
}
function deletePet(petId) {
  return api.delete("/pets/" + petId);
}
function registerPet(formData) {
  return api.post("/pets", formData);
}
function updatePet(petId, formData) {
  return api.put("/pets/" + petId, formData);
}

function deletePetPhoto(petPhotoId) {
  return api.delete("/pets/photo/" + petPhotoId);
}
function loginUser(email, password) {
  return api.post("login", { email, password });
}
function loginFacebook(access_token) {
  return api.post("fb-login", { access_token });
}
function getUser() {
  return api.get("/users");
}

function requestedAdopterAdoptions() {
  return api.get("/adoptions/adopter/requests");
}

function deleteAdoptionRequest(adoptionId) {
  return api.delete("/adoptions/" + adoptionId);
}
function requestedProtectorAdoptions() {
  return api.get("/adoptions/protector/requests");
}
function getAdopterAdoptions() {
  return api.get("/adoptions/adopter");
}
function getProtectorAdoptions() {
  return api.get("/adoptions/protector");
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

function getMyPets() {
  return api.get("/pets/my");
}

function approveAdoption(adoptionId) {
  return api.post(`/adoptions/${adoptionId}/approve`);
}
function rejectAdoption(adoptionId) {
  return api.post(`/adoptions/${adoptionId}/reject`);
}
function createAdoption(petId) {
  return api.post(`/adoptions`, { petId });
}

function rateAdoption(adoptionId, score, message) {
  return api.post(`/adoptions/${adoptionId}/rate`, { score, message });
}
export {
  getPet,
  registerUser,
  loginUser,
  getUser,
  registerPet,
  getPets,
  requestedAdopterAdoptions,
  requestedProtectorAdoptions,
  getMyPets,
  approveAdoption,
  rejectAdoption,
  getAdopterAdoptions,
  getProtectorAdoptions,
  createAdoption,
  loginFacebook,
  updatePet,
  deletePetPhoto,
  deleteUserPhoto,
  updateUser,
  deletePet,
  deleteAdoptionRequest,
  rateAdoption
};
export default api;
