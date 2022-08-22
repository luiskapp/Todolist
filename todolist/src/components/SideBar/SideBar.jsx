import "./SideBar.css";
import logo from 'assets/icons/check-svgrepo-com.svg';
import GIF from 'assets/images/Checklist-amico.png'

function SideBar() {
  const date = new Date().getDate();
  const hours = new Date().getHours();
  return (
    <div>
      <div className="sidebar">
        <div className="logo">
            <span><b>To Do List</b></span>
            <img src={logo} alt="" width={20} />
        </div>
        <div className="foto"></div>
        <div className="saudacao">
          <h2>Olá, Guilherme</h2>
          <p>Hoje é {date} de Julho - {hours}hs</p>
        </div>
        <div className="GIF"><img src={GIF} alt="" width={170}/></div> 
      </div>
      <div>
      <button className="btn__sair">Sair</button>
      </div>
      <footer>
      Todos os direitos reservados.<br/>© Copyright
      </footer>
    </div>
  );
}

export default SideBar;
