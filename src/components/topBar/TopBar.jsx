import { Link } from "react-router-dom";
import "./TopBar.css";

export const TopBar = () => {
  const user = false;
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
                <Link to="/logout" className="link">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img
              className="profileImg "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU"
              alt="Profile"
            />
          ) : (
            <Link to="/login" className="link logins">
              Login
            </Link>
          )}
          <i className=" searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};
