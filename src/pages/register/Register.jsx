import { useState } from "react";
import "./register.css";
import axios from "axios";
import { HandleRegister } from "./HandleRegister";
import { baseUrl } from "../../baseUrl";
import { ToastContainer, toast } from "react-toastify";
export const Register = () => {

  const [username, setUser] = useState('');
  const [email, setMail] = useState('');
  const [password, setPass] = useState('');

  const removeError = (values, id) => {
    if (values !== "") {
      const element = document.getElementById(id);
      element.classList.add('hide');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //handle Errors
    const _user = e.target.username.value;
    const _email = e.target.email.value;
    const _password = e.target.password.value;
    const _repass = e.target.repass.value;
    const _errUser = document.querySelector('.errUser');
    const _errMail = document.querySelector('.errMail');
    const _errPass = document.querySelector('.errPass');
    const _errRepass = document.querySelector('.errRepass');

    if (await HandleRegister(
      _user, _email, _password,
      _repass, _errUser, _errMail,
      _errPass, _errRepass)) {

      //data should be validated first
      try {
        const res = await axios.post(baseUrl + "/auth/register", {
          username, email, password
        });
        res && window.location.replace("/login");
      } catch (error) {

        return toast.error("Sorry, we can not process your request at this moment! Try later", {
          position: toast.POSITION.TOP_CENTER
        })
      }

    }
  }


  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username..."
          onChange={e => {
            setUser(e.target.value)
            removeError(e.target.value, "user")
          }}

          onFocus={e => removeError(e.target.value, "user")}
          name="username"

        />
        <p className="errUser error hide" id="user"></p>
        <label>Email</label>
        <input type="text" placeholder="Enter your email..."
          onChange={e => {
            setMail(e.target.value)
            removeError(e.target.value, "mail")
          }}
          onFocus={e => removeError(e.target.value, "mail")}
          name="email" />
        <p className="errMail error hide" id="mail"></p>
        <label>Password</label>
        <input type="password" placeholder="Enter your password..."
          onChange={e => {
            setPass(e.target.value)
            removeError(e.target.value, "pass")
          }}
          onFocus={e => removeError(e.target.value, "pass")}
          name="password" />
        <p className="errPass error hide" id="pass"></p>
        <label>Password confirm</label>
        <input type="password" placeholder="Confirm your password..."
          onChange={e => {
            removeError(e.target.value, "repass")
          }}
          onFocus={e => removeError(e.target.value, "repass")}
          name="repass" />
        <p className="errRepass error hide" id="repass"></p>
        <button className="register-button" type="submit">Register</button>
      </form>

      <ToastContainer />
    </div>
  );
};
