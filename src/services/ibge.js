import axios from "axios";

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1",
});
function getMunicipios(uf) {
  return api.get(`/localidades/estados/${uf}/municipios`);
}
function getEstados() {
  return api.get(`/localidades/estados`);
}

export { getMunicipios, getEstados };
export default api;
