import LoginImg from "../../../public/2.jpg";
import Input from '../../components/common/Input';
import Button from "./../../components/common/Button";
import "./../../assets/styles/login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
            <h2 className="sign-up-title">Sign Up</h2>
            <span className="sign-in-prompt"> Already have an account?
              <Link to="/sign-in" className="sign-in-link">Sign In</Link>
            </span>

            <form className='sign-up-form'>
              <Input className="form-input" item="input" type="text" plac="Your name" />
              <Input className="form-input" item="input" type="text" plac="Username" />
              <Input className="form-input" item="input" type="email" plac="Email address" />
              <Input className="form-input password-input" item="input" type={passwordInputType} plac="Password" />

              {showPassword ? (
                <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
              ) : (
                <FaEyeSlash className="eye-icon" onClick={togglePasswordVisibility} />
              )}
              <div className="terms-checkbox-container">
                <Input type="checkbox" className="checkbox-input" />
                <span className="terms-text">
                  I agree with <a href="#" className="terms-link">Privacy Policy</a> and <a href="#" className="terms-link">Terms of Use</a>
                </span>
              </div>

              <Button type="submit" styletype="primary-button" text="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;