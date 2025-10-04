const Input = (props) => {
  if (props.item == "input") {

    return (
      <>
        <div className="inputBox">
          <label htmlFor={props.name}>{props.value}</label>
          <input type={props.type} name={props.name} placeholder={props.plac} id={props.name} required />
        </div>
      </>
    )

  } else {
    return (
      <>
        <div className="inputBox">
          <label htmlFor={props.name}>{props.value}</label>
          <input type="checkbox" name={props.name} id={props.name} required />
        </div>
      </>
    )

  }
}

export default Input;