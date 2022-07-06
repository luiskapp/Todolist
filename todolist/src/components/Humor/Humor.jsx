import "./Humor.css";
import sorriso from "assets/icons/smile-svgrepo-com(1).svg";
import love from 'assets/icons/in-love-svgrepo-com.svg';
import serio from 'assets/icons/emoticons-svgrepo-com.svg'
import sono from 'assets/icons/sleep-svgrepo-com.svg'


function Humor() {
  return (
    <div>
      <div className="Humor">
        <h3>Como esta seu humor hoje ?</h3>
        <div className="Humores">
          <div className="sorriso"> <img src={sorriso} alt="" width={50}/></div>
          <div className="love"><img src={love} alt="" width={50} /></div>
          <div className="serio"><img src={serio} alt="" width={50}/></div>
          <div className="sono"><img src={sono }alt="" width={50}/></div>
        </div>
      </div>
    </div>
  );
}

export default Humor;
