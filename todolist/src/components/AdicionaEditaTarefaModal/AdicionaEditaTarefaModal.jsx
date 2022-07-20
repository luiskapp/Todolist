import { useState, useEffect } from "react";
import { ActionMode } from "constants/index";
import Modal from "components/Modal/Modal";
import "./AdicionaEditaTarefaModal.css";
import { TarefaService } from "services/TarefaService";

function AdicionaEditaTarefaModal({ closeModal, onCreateTarefa, mode, tarefaToUpdate, onUpdateTarefa }) {
  const form = {
    tarefa: tarefaToUpdate?.tarefa ??"",
    dia: tarefaToUpdate?.dia ??"",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable]= useState(true);

  const canDisableSendButton= ()=>{
    const response = !Boolean(
        state.tarefa.length
        && state.dia.length
    )
    setCanDisable(response);
  }

  useEffect(()=>{
    canDisableSendButton();
})

const handleSend = async () => {

    const { tarefa, dia} = state;

    const todolist = {
      ...(tarefaToUpdate && {_id:tarefaToUpdate?.id}),
        tarefa,
        dia,
    }

    const serviceCall = {
      [ActionMode.NORMAL]: () => TarefaService.create(todolist),
      [ActionMode.ATUALIZAR]: () => TarefaService.updateById(tarefaToUpdate?.id, todolist),
    }

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateTarefa(response),
      [ActionMode.ATUALIZAR]: ()=> onUpdateTarefa(response),
    }

    actionResponse[mode]();

    const reset = {
      tarefa:'',
      dia:'',
    }

    setState(reset);

    closeModal();
}

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionatarefaModal">
        <form autoComplete="off">
          <h2>{ ActionMode.ATUALIZAR === mode ? 'Atualizar' : 'Adicionar' } Tarefa!</h2>
          <div>
            <label className="AdicionatarefaModal__text" htmlFor="Tarefa">
              Tarefa
            </label>
            <input
              id="Tarefa"
              type="text"
              placeholder="Ligar para faculdade"
              value={state.tarefa}
              onChange={(e) => handleChange(e, "tarefa")}
              required
            />
          </div>
          <div>
            <label className="AdicionatarefaModal__text" htmlFor="dia">
              Dia
            </label>
            <input
              id="dia"
              type="text"
              placeholder="Seg 2,2022"
              value={state.dia}
              onChange={(e) => handleChange(e, "dia")}
              required
            />
          </div>
          <button disabled={canDisable} onClick={handleSend} className="AdicionatarefaModal__enviar" type="button">{ ActionMode.NORMAL === mode ? 'Adicionar' : 'Atualizar' }</button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEditaTarefaModal;
