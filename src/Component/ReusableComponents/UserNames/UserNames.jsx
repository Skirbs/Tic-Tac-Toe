import style from "./UserNames.module.css";

const UserNames = (props) => {
  const inputChangeHandler = (e) => {
    props.changeNameHandler(e.target.value);
  };

  return (
    <>
      <div
        className={`${style["user-names-div"]} ${
          props.playerIndex === props.currentPlayerIndex ? style["active"] : ""
        } shadow-outline flex justify-center align-center`}>
        <p>{props.message}</p>
        <input
          type="text"
          placeholder="Write Name Here"
          onBlur={(e) => {
            inputChangeHandler(e);
          }}
        />
      </div>
    </>
  );
};

export default UserNames;
