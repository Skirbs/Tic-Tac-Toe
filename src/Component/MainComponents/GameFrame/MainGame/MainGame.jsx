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
  const setCell = (e) => {
    const cellIndex = parseInt(e.target.id.slice(-1));

    if (props.currentCells[cellIndex] != -1) return;

    props.currentCells[cellIndex] = props.currentPlayer;

    if (checkVictory()) {
      props.hasWinnerHandler();
    }

    props.setCurrentCell(props.currentCells);
    props.alternatePlayer();
  };

  const checkVictory = () => {
    const currentPlayerIndex = props.currentPlayer;

    for (const arr of winningArrays) {
      if (
        props.currentCells[arr[0]] === currentPlayerIndex &&
        props.currentCells[arr[1]] === currentPlayerIndex &&
        props.currentCells[arr[2]] === currentPlayerIndex
      ) {
        return true;
      }
    }

    return false;
  };

  return (
    <Card className={style["main-game"]}>
      <button
        className={`${style.cell} outline ${props.currentCells[0] == 0 ? style.cross : ""} ${
          props.currentCells[0] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-0"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${props.currentCells[1] == 0 ? style.cross : ""} ${
          props.currentCells[1] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-1"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${props.currentCells[2] == 0 ? style.cross : ""} ${
          props.currentCells[2] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-2"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${props.currentCells[3] == 0 ? style.cross : ""} ${
          props.currentCells[3] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-3"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${props.currentCells[4] == 0 ? style.cross : ""} ${
          props.currentCells[4] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-4"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${props.currentCells[5] == 0 ? style.cross : ""} ${
          props.currentCells[5] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-5"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${props.currentCells[6] == 0 ? style.cross : ""} ${
          props.currentCells[6] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-6"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${props.currentCells[7] == 0 ? style.cross : ""} ${
          props.currentCells[7] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-7"
        onClick={(e) => {
          setCell(e);
        }}></button>

      <button
        className={`${style.cell} outline ${props.currentCells[8] == 0 ? style.cross : ""} ${
          props.currentCells[8] == 1 ? style.circle : ""
        }`.trim()}
        id="cell-8"
        onClick={(e) => {
          setCell(e);
        }}></button>
    </Card>
  );
};

export default MainGame;
