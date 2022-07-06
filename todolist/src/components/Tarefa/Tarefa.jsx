
import "./Tarefa.css";

function Tarefa({todolist, clickItem}) {

  return (
    <div className="Tarefa__container" onClick ={()=> clickItem(todolist.id)}>
        <div>
          <div className="Tarefa">{todolist.tarefa} - {todolist.dia}</div>
        </div>
    </div>
  );
}

export default Tarefa;
