import LoginImg from "../../../public/2.jpg";
import Input from '../../components/common/Input';
import Button from "../../components/common/Button";
import "./../../assets/styles/login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
  const passwordInputType = showPassword ? "text" : "password";

  return (
    <>
      <div className="sign-up-container">
        <div className="image-section">
          <h1 className="logo-text">3legant.</h1>
          <img src={LoginImg} alt="Armchair with blanket" className="login-image" />
        </div>

        <div className="form-section-wrapper">

          <div className="form-content">
            <h2 className="sign-up-title">Sign In</h2>
            <span className="sign-in-prompt"> Don't have an account yet?
              <Link to="/Login" className="sign-in-link">Sign Up</Link>
            </span>

            <form className='sign-up-form'>
              <Input className="form-input" item="input" type="text" plac="Username" />
              <Input className="form-input password-input" item="input" type={passwordInputType} plac="Password" />
              {showPassword ? (
                <FaEye className="eye2" onClick={togglePasswordVisibility} />
              ) : (
                <FaEyeSlash className="eye2" onClick={togglePasswordVisibility} />
              )}


              <div className="terms-checkbox-container">
                <Input type="checkbox" className="checkbox-input" />
                <span className="terms-text"> Remember me </span>
                <a href="#" className="terms-link"> Forgot password? </a>
              </div>
              <Button type="submit" styletype="primary-button" text="Sign In" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin;