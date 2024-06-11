import { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../store/authReducer";
import { connect } from "react-redux";

export const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginCredentials);
  };

  const updateEmail = (e) => {
    setLoginCredentials({ email: e.target.value });
  };

  const updatePassword = (e) => {
    setLoginCredentials({ password: e.target.value });
  };

  const demoUserLogin = (e) => {
    e.preventDefault();
    setLoginCredentials({ email: "guest@guest.com", password: "password" });
    login(loginCredentials);
  };

  if (this.props.isLoggedIn) return <Redirect to="/"></Redirect>;
  const { email, password } = this.state;
  return (
    <div className="login-page">
      <div className="login-background"></div>
      <div className="login-page-div">
        <div className="login-form-header">Welcome to Batmanhood</div>
        <div className="error-container">
          <ul id="errors" className="errors"></ul>
        </div>
        <div className="login-form-email-header">Email</div>
        <div className="login-form-div">
          <form onSubmit={handleSubmit} className="login-form">
            <input
              className="login-input-email"
              type="email"
              value={email}
              onChange={updateEmail}
            ></input>
            <div className="login-form-password-header">Password</div>
            <div>
              <input
                className="login-input-password"
                type="password"
                value={password}
                onChange={updatePassword}
              ></input>
            </div>
            <div className="forgot-account">Forgot your email or password?</div>
            <div className="login-sign-in-button">
              <button type="submit" className="login-button">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <form onSubmit={demoUserLogin} className="demo-user-form">
          <button type="submit" className="demo-user-login-button">
            Demo User
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
};

connect(mapStateToProps, mapDispatchToProps)(Login);
