// import heroImg from "./../../../assets/Images/HeroSection.png";/
import "../../../assets/styles/HeroSection.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section">

      <div className="overlay"></div>


      <div className="hero-content">
        <h1 className="hero-title">
          More than <br />
          just a game. <br />
          It’s a lifestyle.
        </h1>
        <p className="hero-description">
          Whether you’re just starting out, have played your whole life or
          you’re a Tour pro, your swing is like a fingerprint.
        </p><br /><br />
        <Link to="/allproducts/" className="hero-button">
          Shopping Now
        </Link>
      </div>
    </section>
  );
}