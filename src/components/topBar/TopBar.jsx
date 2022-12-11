import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./TopBar.css";

export const TopBar = () => {
  const { user, dispatch } = useContext(Context);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.location("/");

  }

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="leftIcon fa-brands fa-square-facebook"></i>
          <i className="leftIcon fa-brands fa-square-twitter"></i>
          <i className="leftIcon fa-brands fa-square-pinterest"></i>
          <i className="leftIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="topListItem">
              {" "}
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className="topListItem">
              {" "}
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/write" className="link">
                Write
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
              <img
                className="profileImg "
                src={user.picture}
                alt="Profile"
              />
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
          <i className=" searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};
