import style from "./Popup.module.css";
import Card from "../../ReusableComponents/Card/Card";

const Popup = (props) => {
  const newGame = () => {
    props.newGameHandler();
  };

  const playerName = props.hasWinner.player;

  const PopupComponent = () => {
    return (
      <div className={`${style.background} flex justify-center align-center`}>
        <Card className={`${style.main} flex-column align-center outline`}>
          <p>Title</p>
          <p>{playerName} Wins</p>
          <button onClick={newGame}>New Game</button>
        </Card>
      </div>
    );
  };

  return <>{props.hasWinner.hasWon && <PopupComponent />}</>;
};

export default Popup;
