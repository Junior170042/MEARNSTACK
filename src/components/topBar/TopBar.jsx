import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./TopBar.css";

export const TopBar = () => {

  const { user, dispatch } = useContext(Context);

  const logout = () => {
    document.cookie = "isUser=;Expires=Thu, 01 Jan 1970 00:00:01 GMT;"

    dispatch({ type: "LOGOUT" });
    window.location.replace("/");

  }

  return (

    <div className="top">
      <div className="topLeft">
        <a className="link" href=" https://www.facebook.com/juniorhens.vernard" target="_blank">
          <i className="leftIcon fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/invites/contact/?i=1wvdpbesps17q&utm_content=o6xi1f0" className="link" target="_blank" rel="noopener noreferrer">
          <i className="leftIcon fa-brands fa-square-instagram"></i>

        </a>
        <a href="https://www.linkedin.com/in/st-verty-vernard/" className="link" target="_blank" rel="noopener noreferrer">

          <i className="leftIcon fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Write a post
            </Link>
          </li>
          {user && (
            <li className="topListItem">
              <Link to="/" className="link" onClick={logout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <div className="user-profile">
            <Link className="link-image" to="/setting"><img
              className="profileImg "
              src={user.picture}
              alt="Profile"
            /></Link>
            <p>{user.username}</p>
          </div>
        ) : (
          <>
            <Link to="/login" className="link logins">
              Login
            </Link>
            <Link to="/register" className="link registers">
              Register
            </Link>
          </>
        )}
      </div>
    </div>

  );
};
