import Form from "../../components/common/Form";
import "./../../assets/styles/contact.css"
import { useEffect } from 'react';


const FillOrder = () => {
  useEffect(() => {
    document.title = " ContactUs - 3legant."
  });
  return (
    <div id="Orders" className="FillOrder p16 f-cen f-col">
      <h1 className="p16"> Product order form </h1>
      <p>Fill out the form below to submit your application and we will contact you to confirm the details.</p>
      <span className="txt-main p4"> Customer information </span>
      <Form />
    </div>
  )
}

export default FillOrder;