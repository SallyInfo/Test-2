const Input = (props) => {
  if(props.item =="input"){

    return (
      <>
    <div className="inputBox">
      <label htmlFor={props.name}>{props.value}</label>
      <input type={props.type}  name={props.name} id={props.name} required />
    </div>
    </>
    )

    }else{
     return (
      <>
    <div className="inputBox">
      <label htmlFor={props.name}>{props.value}</label>
      <textarea name={props.name} id={props.name} required  rows={4}></textarea>
    </div>
    </>
    )

    }
}

export default Input;