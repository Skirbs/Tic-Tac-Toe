import style from "./GameFrame.module.css";
import Card from "../../ReusableComponents/Card/Card";
import UserNames from "../../ReusableComponents/UserNames/UserNames";
import MainGame from "./MainGame/MainGame";

import {useState} from "react";
const GameFrame = (props) => {
  const [currentPlayer, setCurrentPlayer] = useState(0); /* 0 = first: X, 1 = second: O */

  const alternatePlayer = () => {
    setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
  };

  return (
    <>
      <Card className={`${style["game-frame"]} flex-column align-center`}>
        <div className={`${style["inputs-div"]} flex justify-center align-center`}>
          <UserNames message="Player 1:" />
          <UserNames message="Player 2:" />
        </div>

        <MainGame currentPlayer={currentPlayer} alternatePlayer={alternatePlayer} />
      </Card>
    </>
  );
};

export default GameFrame;
