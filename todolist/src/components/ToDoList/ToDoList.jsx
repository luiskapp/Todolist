import React, { useState, useEffect } from "react";
import TarefaDetalhesModal from "components/TarefaDetalhesModal/TarefaDetalhesModal";
import Tarefa from "components/Tarefa/Tarefa";
import { TarefaService } from "services/TarefaService";
import pana from "assets/images/pana.png";
import "./ToDoList.css";

function ToDoList({ createTarefa, tarefaCriada }) {
  const [todolists, setTodolists] = useState([]);

  const [TarefaModal, setTarefaModal] = useState(false);

  const getList = async () => {
    const response = await TarefaService.getLista();
    setTodolists(response);
  };

  const getTarefaById = async (todolistId) => {
    const response = await TarefaService.getById(todolistId);
    setTarefaModal(response);
  };

  useEffect(() => {
    getList();
  }, []);

  const adicionaTarefaNaLista = (todolist) => {
    const lista = [...todolists, todolist];
    setTodolists(lista);
  };

  useEffect(() => {
    if (tarefaCriada) adicionaTarefaNaLista(tarefaCriada);
  }, [tarefaCriada]);

  return (
    <div className="Todolist__container">
      <p className="Titulo__container"><b>Minhas Tarefas</b></p>
      <span className="container">
        <div>
          <div>
            <button
              type="button"
              className="Acoes__adicionar"
              onClick={() => createTarefa()}
            >
              Adicionar Tarefa
            </button>
          </div>
          <div>
            <img src={pana} alt="" width={400} />
          </div>
        </div>
        <div className="Todolist">
          {todolists.map((todolist, index) => (
            <Tarefa
              key={`Todolist-${index}`}
              todolist={todolist}
              index={index}
              clickItem={(todolistId) => getTarefaById(todolistId)}
            />
          ))}
          {TarefaModal && (
            <TarefaDetalhesModal
              todolists={TarefaModal}
              closeModal={() => setTarefaModal(false)}
            />
          )}
        </div>
      </span>
    </div>
  );
}

export default ToDoList;
