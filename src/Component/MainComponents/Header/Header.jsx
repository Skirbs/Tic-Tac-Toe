import Card from "../../ReusableComponents/Card/Card";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <Card className={style.Header}>Tic Tac Toe</Card>
    </>
  );
};

export default Header;
