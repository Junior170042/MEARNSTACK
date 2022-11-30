import { Link } from "react-router-dom";
import "./register.css";

export const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <label>Password confirm</label>
        <input type="password" placeholder="Confirm your password..." />
        <button className="register-button">Register</button>
      </form>
      <button className="btn-register">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
};
