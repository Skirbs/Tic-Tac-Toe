import style from "./MainGame.module.css";
import Card from "../../../ReusableComponents/Card/Card";
import {useState} from "react";

const winningArrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const MainGame = (props) => {
  const [currentCells, setCurrentCell] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]); /* -1: empty, 0: cross, 1: circle */

  const setCell = (e) => {
    const cellIndex = parseInt(e.target.id.slice(-1));

    currentCells[cellIndex] = props.currentPlayer;

    if (checkVictory()) {
      console.log("alsdkfjo");
    }

    setCurrentCell(currentCells);
    props.alternatePlayer();
  };

  const checkVictory = () => {
    const currentPlayerIndex = props.currentPlayer;

    for (const arr of winningArrays) {
      if (
        currentCells[arr[0]] === currentPlayerIndex &&
        currentCells[arr[1]] === currentPlayerIndex &&
        currentCells[arr[2]] === currentPlayerIndex
      ) {
        return true;
      }
    }

    return false;
  };

  return (
    <Card className={style["main-game"]}>
      <button
        className={`${style.cell} outline ${currentCells[0] == 0 ? style.cross : ""} ${
          currentCells[0] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-0"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${currentCells[1] == 0 ? style.cross : ""} ${
          currentCells[1] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-1"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${currentCells[2] == 0 ? style.cross : ""} ${
          currentCells[2] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-2"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${currentCells[3] == 0 ? style.cross : ""} ${
          currentCells[3] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-3"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${currentCells[4] == 0 ? style.cross : ""} ${
          currentCells[4] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-4"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${currentCells[5] == 0 ? style.cross : ""} ${
          currentCells[5] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-5"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${currentCells[6] == 0 ? style.cross : ""} ${
          currentCells[6] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-6"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${currentCells[7] == 0 ? style.cross : ""} ${
          currentCells[7] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-7"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${currentCells[8] == 0 ? style.cross : ""} ${
          currentCells[8] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-8"
        onClick={(e) => {
          setCell(e);
        }}></button>
    </Card>
  );
};

export default MainGame;
