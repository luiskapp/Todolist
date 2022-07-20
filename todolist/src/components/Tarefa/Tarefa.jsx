import { ActionMode } from "constants/index";
import "./Tarefa.css";

function Tarefa({todolist, clickItem, mode}) {
  
  const badgeAction = (canRender) => {
    if (canRender) return (<span className={`TarefaLista__tag ${mode === ActionMode.DELETAR && 'TarefaLista__tag--deletar'}`}> { mode } </span>);
  }

  return (
    <div className="Tarefa__container" onClick ={()=> clickItem(todolist.id)}>
      {badgeAction(mode !== ActionMode.NORMAL)}
        <div>
          <div className="Tarefa">{todolist.tarefa} - {todolist.dia}</div>
        </div>
    </div>
  );
}

export default Tarefa;
