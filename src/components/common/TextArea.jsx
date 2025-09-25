const TextArea = (props) => {
  return (
    <textarea rows="3" maxLength="300" name={props.name} 
    id={props.name} required />
  )
}

export default TextArea;
