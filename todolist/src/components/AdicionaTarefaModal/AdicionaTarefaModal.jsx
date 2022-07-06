import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaTarefaModal.css";
import { TarefaService } from "services/TarefaService";

function AdicionaTarefaModal({ closeModal, onCreateTarefa }) {
  const form = {
    tarefa: "",
    dia: "",
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

const createTarefa = async () => {

    const { tarefa, dia} = state;

    const todolist = {
        tarefa,
        dia,
    }

    const response = await TarefaService.create(todolist);

    onCreateTarefa(response);

    closeModal();
}

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionatarefaModal">
        <form autoComplete="off">
          <h2>Adicionar Tarefa!</h2>
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
          <button disabled={canDisable} onClick={createTarefa} className="AdicionatarefaModal__enviar" type="button">Adicionar</button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaTarefaModal;
