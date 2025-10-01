// import { FaStar } from "react-icons/fa";
import "../../assets/styles/cards.css";
import { Link } from "react-router-dom";

const Card = ({ image, old_price, price, name ,discount_rate ,id }) => {
    return (
        <>
            <div className="one-card bg-w">
                <img src={image} alt={name} className='img' />
            </div>
        </>
    )
}

export default Card;