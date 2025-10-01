import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";
import "./../../assets/styles/contact.css"


const Form = () => {
  return (
    <>
      
    <form action="" className="form ">
      <div className="f-cen ">

      <div className="text">
        <label> Full Name </label>
        <Input item="input" className="p8 in" type="text"  id="text" name="text"/>
      </div>

      <div className="email">
        <label> e-mail </label>
        <Input item="input" className="p8  in" type="email"  id="email" name="email" />
      </div>

      <div className="tel">
        <label> phone numder </label>
        <Input item="input" className="p8  in" type="tel"  id="tel" name="tel" />
      </div>
 
        <div className="text">
        <label> the address </label>
        <Input item="input" className="p8  in" type="text"  id="text" name="text"/>
      </div>

       
        <div className="text">
        <label>city</label>
        <Input item="input" type="text"  name="" id="" className="in" />
        </div >

        <div className="Password">
        <label>zip code</label>
        <Input item="input" type="Password" name="" id="" className="in" />
        </div >
        
        
      <div className="taxtarea">
        <label> (optional) Additional notes </label>
        <TextArea item="taxtarea" className="p8 in" id="taxtarea" name="taxtarea"/>
        </div>
        </div>
      <Button className="btn" type="submit" text="Submit the application" />
    </form>
    </>
  )
}

export default Form;