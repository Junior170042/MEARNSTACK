import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button className="btn-login">Login</button>
      </form>
      <button className="btn-register">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
};
