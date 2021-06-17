import axios from "axios";

const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1",
});
function getMunicipios(uf) {
  return api.get(`/localidades/estados/${uf}/municipios?orderBy=nome`);
}
function getEstados() {
  return api.get(`/localidades/estados?orderBy=nome`);
}

export { getMunicipios, getEstados };
export default api;
