import { useContext } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";
export const Login = () => {
  const userRef = useRef();
  const pasRef = useRef();
  const { dispatch, isFitching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: pasRef.current.value,
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: await res.data })
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" })
    }
  }
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username"
          ref={userRef} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..."
          ref={pasRef} />
        <button className="btn-login" type="submit" disabled={isFitching}>Login</button>
      </form>
      <button className="btn-register">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
};
