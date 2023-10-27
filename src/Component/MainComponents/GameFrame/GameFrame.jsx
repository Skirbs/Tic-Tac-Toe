import style from "./GameFrame.module.css";
import Card from "../../ReusableComponents/Card/Card";
import UserNames from "../../ReusableComponents/UserNames/UserNames";
import MainGame from "./MainGame/MainGame";

import {useState} from "react";
const GameFrame = (props) => {
  const [currentPlayer, setCurrentPlayer] = useState(0); /* 0 = first: X, 1 = second: O */
  const [playerNames, setPlayerNames] = useState(["", ""]);

  const alternatePlayer = () => {
    setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
  };

  const changeName = (newName, playerIndex) => {
    playerNames[playerIndex] = newName;
    setPlayerNames(playerNames);
  };
  const gameStateHandler = (winningState) => {
    props.setGameState({
      winningState: winningState,
      player:
        playerNames[currentPlayer].trim().length != 0
          ? playerNames[currentPlayer]
          : `Player ${currentPlayer + 1}`,
    });
  };

  return (
    <>
      <Card className={`${style["game-frame"]} flex-column align-center`}>
        <div className={`${style["inputs-div"]} flex justify-center align-center`}>
          <UserNames
            message="Player 1:"
            playerIndex={0}
            currentPlayerIndex={currentPlayer}
            changeNameHandler={(newName) => {
              changeName(newName, 0);
            }}
          />
          <UserNames
            message="Player 2:"
            playerIndex={1}
            currentPlayerIndex={currentPlayer}
            changeNameHandler={(newName) => {
              changeName(newName, 1);
            }}
          />
        </div>

        <MainGame
          currentPlayer={currentPlayer}
          alternatePlayer={alternatePlayer}
          currentCells={props.currentCells}
          setCurrentCell={props.setCurrentCell}
          gameStateHandler={(winningState) => {
            gameStateHandler(winningState);
          }}
        />
      </Card>
    </>
  );
};

export default GameFrame;
