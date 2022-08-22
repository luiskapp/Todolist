import { useState } from "react";
import { ActionMode } from "constants/index";
import Humor from "components/Humor/Humor";
import SideBar from "components/SideBar/SideBar";
import ToDoList from "components/ToDoList/ToDoList";
import Acoes from "components/Acoes/Acoes";
import DeletaTarefaModal from "components/DeletaTarefaModal/DeletaTarefaModal";
import AdicionaEditaTarefaModal from "components/AdicionaEditaTarefaModal/AdicionaEditaTarefaModal";
import "./Home.css";

function Home() {
  const [tarefaEditada, setTarefaEditada] = useState();

  const [tarefaRemovida, setTarefaRemovida] = useState();

  const [canShowAdicionaTarefaModal, setCanShowAdicionaTarefaModal] =
    useState(false);

  const [tarefaParaAdicionar, setTarefaParaAdicionar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const [tarefaParaEditar, setTarefaParaEditar] = useState();

  const [tarefaParaDeletar, setTarefaParaDeletar] = useState();

  const handleDeleteTarefa = (tarefaToDelete) => {
    setTarefaParaDeletar(tarefaToDelete);
  };

  const handleUpdateTarefa = (tarefaToUpdate) => {
    setTarefaParaEditar(tarefaToUpdate);
    setCanShowAdicionaTarefaModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaTarefaModal(false);
    setTarefaParaAdicionar();
    setTarefaParaDeletar();
    setTarefaParaEditar();
    setModoAtual(ActionMode.NORMAL);
  };

  return (
    <div className="Container">
      <div className="Sidebar__Container">
        <SideBar />
      </div>
      <div className="Container__Informacoes">
        <div className="Todolist__Container">
          <ToDoList
            mode={modoAtual}
            tarefaCriada={tarefaParaAdicionar}
            tarefaEditada={tarefaEditada}
            tarefaRemovida={tarefaRemovida}
            deleteTarefa={handleDeleteTarefa}
            updateTarefa={handleUpdateTarefa}
          />
          <Acoes
            mode={modoAtual}
            createTarefa={() => setCanShowAdicionaTarefaModal(true)}
            updateTarefa={() => handleActions(ActionMode.ATUALIZAR)}
            deleteTarefa={() => handleActions(ActionMode.DELETAR)}
          />
          {canShowAdicionaTarefaModal && (
            <AdicionaEditaTarefaModal
              mode={modoAtual}
              tarefaToUpdate={tarefaParaEditar}
              onCreateTarefa={(todolist) => setTarefaParaAdicionar(todolist)}
              closeModal={handleCloseModal}
              onUpdatetarefa={(todolist) => setTarefaEditada(todolist)}

            />
          )}
          {tarefaParaDeletar && (
            <DeletaTarefaModal
            tarefaParaDeletar={tarefaParaDeletar}
              closeModal={handleCloseModal}
              onDeleteTarefa={(todolist) => setTarefaRemovida(todolist)}
            />
          )}
        </div>
        <div className="Humor__Container">
          <Humor />
        </div>
      </div>
    </div>
  );
}

export default Home;
