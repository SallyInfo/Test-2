const Button = (props) => {
  return (
    <button type={props.type} className={"btn " + props.styletype} onClick={props.onClick}>
        {props.text}
    </button>
  )
}

export default Button;