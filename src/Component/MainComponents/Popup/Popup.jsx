import style from "./Popup.module.css";
import Card from "../../ReusableComponents/Card/Card";

const Popup = (props) => {
  const newGame = () => {
    props.newGameHandler();
  };

  const playerName = props.gameState.player;

  const PopupComponent = () => {
    return (
      <div className={`${style.background} flex justify-center align-center`}>
        <Card className={`${style.main} flex-column align-center outline`}>
          <p>{props.gameState.winningState === "win" ? `Winner` : "Draw"} </p>
          <p>{props.gameState.winningState === "win" ? `${playerName} Wins` : "game was drawn"} </p>
          <button onClick={newGame}>New Game</button>
        </Card>
      </div>
    );
  };

  return <>{props.gameState.winningState != "ongoing" && <PopupComponent />}</>;
};

export default Popup;
