import style from "./Popup.module.css";
import Card from "../../ReusableComponents/Card/Card";

const Popup = (props) => {
  return (
    <div className={`${style.background} flex justify-center align-center`}>
      <Card className={`${style.main} flex-column align-center outline`}>
        <p>Title</p>
        <p>Player 2 Wins</p>
        <button>New Game</button>
      </Card>
    </div>
  );
};

export default Popup;
