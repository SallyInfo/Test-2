import { FaStar } from "react-icons/fa";
import "../../assets/styles/cards.css";

const Card = ({ image, old_price, price, name ,discount_rate}) => {
    return (
        <>
            <div className="my-card bg-w">
            <button className="btn3 Hot" text="Hot">Hot</button>
            <button className="btn4 discount">{discount_rate}%</button>
                <img src={image} alt={name} className='' />
                <div className='con1'>
                    <FaStar className="ster txt-b"/>
                    <FaStar className="ster txt-b"/>
                    <FaStar className="ster txt-b"/>
                    <FaStar className="ster txt-b"/>
                    <FaStar className="ster txt-b"/>
                    <a href='/' className='btn'>Add to cart</a>
                    <p className='para'>{name}</p>
                    <div className="">
                        <span className='txt-main'>{price}$ <del className='old'>{old_price}$</del></span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Card;