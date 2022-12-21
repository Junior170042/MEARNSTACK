import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";
export const Register = () => {

  const [username, setUser] = useState('');
  const [email, setMail] = useState('');
  const [password, setPass] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    //data should be validated first

    try {
      const res = await axios.post("/auth/register", {
        username, email, password,
      });
      await res.data && window.location.replace("/login");
    } catch (error) {
      setError(error.message)
    }

  }

  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username..."
          onChange={e => setUser(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="Enter your email..."
          onChange={e => setMail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..."
          onChange={e => setPass(e.target.value)} />
        <label>Password confirm</label>
        <input type="password" placeholder="Confirm your password..." />
        <button className="register-button" type="submit">Register</button>
      </form>
      <button className="btn-register">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>

      {error && <span className="error">{error === "Request failed with status code 600" && "email is already in use"}</span>}
    </div>
  );
};
