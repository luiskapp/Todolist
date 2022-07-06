const TodolistContext = {
    tarefaEndpoint: () => `${Api.baseUrl}`,
    tarefaLista: () => `${TodolistContext.tarefaEndpoint()}`,
    tarefaById: (id) => `${TodolistContext.tarefaEndpoint()}/${id}`,
    createtarefa: () => `${TodolistContext.tarefaEndpoint()}`,
    updatetarefaById: (id) => `${TodolistContext.tarefaEndpoint()}/${id}`,
    deletetarefaById: (id) => `${TodolistContext.tarefaEndpoint()}/${id}`,
  };
  
  export const Api = {
    baseUrl: "http://localhost:8000/todolist",
    ...TodolistContext,
  };