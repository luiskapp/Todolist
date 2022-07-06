import "./TarefaDetalhesModal.css";
import Modal from "components/Modal/Modal";

function TarefaDetalhesModal({ todolists, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="TarefaDetalhes">
        <div className="Tarefa__Todolist">
          <div>
            <b>Tarefa: </b> {todolists.tarefa}
          </div>
          <div>
            <b>Quando: </b> {todolists.dia}
          </div>
        </div>
        <div className="TarefaDetalhes__button">
          <button className="Atualizar">Atualizar</button>
        </div>
        <div className="TarefaDetalhes__button">
          <button className="deletar">Deletar</button>
        </div>
      </div>
    </Modal>
  );
}

export default TarefaDetalhesModal;
