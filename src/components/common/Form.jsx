import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";


const Form = () => {
  return (
    <>
      
    <form action="" className="form  p16">
      <div className="f2 f-cen f-grid">

      <div className="text">
        <label> Full Name </label>
        <Input item="input" className="p8 " type="text"  id="text" name="text"/>
      </div>

      <div className="email">
        <label> e-mail </label>
        <Input item="input" className="p8 " type="email"  id="email" name="email" />
      </div>

      <div className="tel">
        <label> phone numder </label>
        <Input item="input" className="p8 " type="tel"  id="tel" name="tel" />
      </div>
 
        <div className="text">
        <label> the address </label>
        <Input item="input" className="p8 " type="text"  id="text" name="text"/>
      </div>

       
        <div className="text">
        <label>city</label>
        <input item="input" type="text"  name="" id="" />
        </div >

        <div className="Password">
        <label>zip code</label>
        <input item="input" type="Password" name="" id="" />
        </div >
        
        
      <div className="taxtarea">
        <label> (optional) Additional notes </label>
        <TextArea item="taxtarea" className="p8" id="taxtarea" name="taxtarea"/>
        </div>
        
        </div>
      <Button className="btn btn1" type="submit" text="Submit the application" />
    </form>
    </>
  )
}

export default Form;