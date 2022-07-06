import { useState } from "react";
import Humor from "components/Humor/Humor";
import SideBar from "components/SideBar/SideBar";
import ToDoList from "components/ToDoList/ToDoList";
import AdicionaTarefaModal from "components/AdicionaTarefaModal/AdicionaTarefaModal";
import "./Home.css";

function Home() {

  const [canShowAdicionaTarefaModal, setCanShowAdicionaTarefaModal] = useState(false);

  const [tarefaParaAdicionar, setTarefaParaAdicionar] = useState();

  return (
    <div className="Container">
      <div className="Sidebar__Container">
        <SideBar />
      </div>
      <div className="Container__Informacoes">
        <div className="Todolist__Container">
          <ToDoList createTarefa={()=> setCanShowAdicionaTarefaModal(true)} tarefaCriada={tarefaParaAdicionar}/>
          {
            canShowAdicionaTarefaModal && (<AdicionaTarefaModal closeModal={() => setCanShowAdicionaTarefaModal(false)}
            onCreateTarefa={(todolist) => setTarefaParaAdicionar(todolist)}/>)
          }
        </div>
        <div className="Humor__Container">
          <Humor />
        </div>
      </div>
    </div>
  );
}

export default Home;
