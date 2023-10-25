import style from "./UserNames.module.css";

const UserNames = (props) => {
  return (
    <>
      <div className={`${style["user-names-div"]} shadow-outline flex justify-center align-center`}>
        <p>{props.message}</p>
        <input type="text" />
      </div>
    </>
  );
};

export default UserNames;
