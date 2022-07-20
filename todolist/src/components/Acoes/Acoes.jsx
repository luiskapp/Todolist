import { ActionMode } from "constants/index";
import "./Acoes.css";

function Acoes({ createTarefa, mode, updateTarefa, deleteTarefa }) {
    return (
        <div className="container__button">
        <button
          type="button"
          className="Acoes__adicionar"
          onClick={() => createTarefa()}
        >
          Adicionar Tarefa
        </button>
        <button className={`Atualizar ${
          mode === ActionMode.ATUALIZAR && "ativa"
        }`}
        onClick={() => updateTarefa()}>Atualizar</button>
        <button
          type="button"
          className={`deletar ${
          mode === ActionMode.DELETAR
        }`}
          onClick={() => deleteTarefa()}
        >
          deletar
        </button>
      </div>
    );
  }
  
  export default Acoes;



