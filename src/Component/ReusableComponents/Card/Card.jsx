import style from "./Card.module.css";

const Card = (props) => {
  const className = `${style.card} ${props.className ? props.className : ""} shadow-outline`.trim();
  return <div className={className}>{props.children}</div>;
};

export default Card;
