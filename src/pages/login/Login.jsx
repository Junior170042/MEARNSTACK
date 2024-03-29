import { useContext } from "react";
import { useRef } from "react";
import { Context } from "../../context/Context";
import { ToastContainer, toast } from "react-toastify";
import "./login.css";
//import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { useCookies } from "react-cookie";
export const Login = () => {
  const userRef = useRef();
  const pasRef = useRef();
  const { dispatch, isFitching } = useContext(Context);
  const [cookies, setCookie] = useCookies()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userRef.current.value || !pasRef.current.value) {
      return toast.error("Fill out all the fields!", {
        position: toast.POSITION.TOP_CENTER
      })
    }

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(baseUrl + '/auth/login', {
        username: userRef.current.value,
        password: pasRef.current.value,
      }, { withCredentials: true })
      if (!res.data.status) {
        dispatch({ type: "LOGIN_FAILURE" })
        return toast.error(res.data.message, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        setCookie("isUser", res.data.user, { maxAge: 6500 })
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user })
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" })
      return toast.error("Sorry, we can not process your request at this moment! Try later", {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }
  return (
    <>
      {
        !cookies.isUser &&

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
          <ToastContainer />
        </div>
      }

    </>

  );
};
