import style from "./GameFrame.module.css";
import Card from "../../ReusableComponents/Card/Card";
import UserNames from "../../ReusableComponents/UserNames/UserNames";
import MainGame from "./MainGame/MainGame";
const GameFrame = (props) => {
  return (
    <>
      <Card className={`${style["game-frame"]} flex-column align-center`}>
        <div className={`${style["inputs-div"]} flex justify-center align-center`}>
          <UserNames message="Player 1:" />
          <UserNames message="Player 2:" />
        </div>

        <MainGame />
      </Card>
    </>
  );
};

export default GameFrame;
