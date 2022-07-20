import "./DeletaTarefaModal.css";
import Modal from "components/Modal/Modal";
import { TarefaService } from "services/TarefaService";

function DeletaPaletaModal({ closeModal, tarefaParaDeletar, onDeleteTarefa }) {
  const handleDelete = async (todolist) => {
    await TarefaService.deleteById(todolist.id);
    onDeleteTarefa(todolist);
    closeModal();
 };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaTarefaModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover a tarefa?
        </p>
        <div>
          <button
            onClick={() => handleDelete(tarefaParaDeletar)}
            className="DeletatarefaModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button onClick={closeModal} className="DeletatarefaModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletaPaletaModal;