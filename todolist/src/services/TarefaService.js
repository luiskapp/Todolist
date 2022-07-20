import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

export const TarefaService = {
  getLista: () =>
    fetch(Api.tarefaLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.tarefaById(id), { method: "GET" }).then(parseResponse),
  create: (todolist) =>
    fetch(Api.createtarefa(), { method: "POST", body: JSON.stringify(todolist), mode: "cors", headers: {
      "Content-Type": "application/json", }}).then(parseResponse),
  updateById: (id, todolist) =>
    fetch(Api.updatetarefaById(id), { method: "PUT" , body: JSON.stringify(todolist), mode: "cors", headers: {
      "Content-Type": "application/json", }}).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletetarefaById(id), { method: "DELETE" }).then(parseResponse),
};