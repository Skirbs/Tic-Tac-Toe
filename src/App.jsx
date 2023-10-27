import "./App.css";
import Header from "./Component/MainComponents/Header/Header";
import GameFrame from "./Component/MainComponents/GameFrame/GameFrame";
import Popup from "./Component/MainComponents/Popup/Popup";
import {useState} from "react";

function App() {
  const [currentCells, setCurrentCell] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]); /* -1: empty, 0: cross, 1: circle */

  const [gameState, setGameState] = useState({winningState: "ongoing", player: ""});

  const newGame = () => {
    setGameState({winningState: "ongoing", player: ""});
    setCurrentCell([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  };

  return (
    <>
      <Header />
      <GameFrame
        currentCells={currentCells}
        setCurrentCell={setCurrentCell}
        setGameState={setGameState}
      />
      <Popup gameState={gameState} newGameHandler={newGame} />
    </>
  );
}

export default App;
