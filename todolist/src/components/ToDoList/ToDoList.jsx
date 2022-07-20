import React, { useState, useEffect, useCallback } from "react";
import { ActionMode } from "constants/index";
import TarefaDetalhesModal from "components/TarefaDetalhesModal/TarefaDetalhesModal";
import Tarefa from "components/Tarefa/Tarefa";
import { TarefaService } from "services/TarefaService";
import pana from "assets/images/pana.png";
import "./ToDoList.css";

function ToDoList({ tarefaCriada, mode, updateTarefa, deleteTarefa, tarefaEditada, tarefaRemovida}) {
  const [todolists, setTodolists] = useState([]);

  const [TarefaModal, setTarefaModal] = useState(false);

  const getList = async () => {
    const response = await TarefaService.getLista();
    setTodolists(response);
  };

  const getTarefaById = async (todolistId) => {
    const response = await TarefaService.getById(todolistId);
    const mapper = {
      [ActionMode.NORMAL]: () => setTarefaModal(response),
      [ActionMode.ATUALIZAR]: () => updateTarefa(response),
      [ActionMode.DELETAR]: () => deleteTarefa(response),
    };

    mapper[mode]();
  };

  useEffect(() => {
    getList();
  }, [tarefaEditada, tarefaRemovida]);

  const adicionaTarefaNaLista = useCallback((todolist) => {
    const lista = [...todolists, todolist];
    setTodolists(lista);
  } , [todolists]);

  useEffect(() => {
    if (
      tarefaCriada &&
      !todolists.map(({ id }) => id).includes(tarefaCriada.id)
    ) {
      adicionaTarefaNaLista(tarefaCriada);
    }
  }, [adicionaTarefaNaLista, tarefaCriada, todolists]);


  return (
    <div className="Todolist__container">
      <p className="Titulo__container">
        <b>Minhas Tarefas</b>
      </p>
      <span className="container">
        <div>
          <div>
            <img src={pana} alt="" width={400} />
          </div>
        </div>
        <div className="Todolist">
          {todolists.map((todolist, index) => (
            <Tarefa
              mode={mode}
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
