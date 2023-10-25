import style from "./MainGame.module.css";
import Card from "../../../ReusableComponents/Card/Card";

const MainGame = (props) => {
  return (
    <Card className={style["main-game"]}>
      <button className={`${style.cell} outline`} id="cell-0">
        <img src="" alt="" />
      </button>
      <button className={`${style.cell} outline`} id="cell-1">
        <img src="" alt="" />
      </button>
      <button className={`${style.cell} outline`} id="cell-2">
        <img src="" alt="" />
      </button>
      <button className={`${style.cell} outline`} id="cell-3">
        <img src="" alt="" />
      </button>
      <button className={`${style.cell} outline`} id="cell-4">
        <img src="" alt="" />
      </button>
      <button className={`${style.cell} outline`} id="cell-5">
        <img src="" alt="" />
      </button>
      <button className={`${style.cell} outline`} id="cell-6">
        <img src="" alt="" />
      </button>
      <button className={`${style.cell} outline`} id="cell-7">
        <img src="" alt="" />
      </button>
      <button className={`${style.cell} outline`} id="cell-8">
        <img src="" alt="" />
      </button>
    </Card>
  );
};

export default MainGame;
