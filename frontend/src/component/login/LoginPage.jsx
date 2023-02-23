import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="login-main-page">
        <p>Welcome to your professional community</p>
        <form action="">
          <div className="login-input">
            <input type="email" required placeholder="Email" />
          </div>
          <div className="login-input">
            <input
              type={eye ? "text" : "password"}
              required
              placeholder="Password"
            />
            <div
              onClick={() => {
                setEye(!eye);
              }}
              style={{'margin' : '8px'}}
            >
              {eye ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </div>
          </div>
          <button type="submit">Sign in</button>
        </form>
        <button className="joinnow-login-button" onClick={() => navigate('/signup')}>New to LinkedIn? Join now</button>
      </div>
      <div className="login-image">
        <img src="Images/loginImage.png" alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
