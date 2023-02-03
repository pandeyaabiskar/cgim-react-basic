import "./button.css"

function Button(props) {
  return (
    <button
      className={props.size === "medium" ? "medium-btn" : "small-btn"}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
