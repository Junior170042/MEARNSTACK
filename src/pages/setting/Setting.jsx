import "./setting.css";
import { SideBar } from "../../components/sidebar/SideBar";
export const Setting = () => {
  return (
    <div className="setting">
      <div className="setting-content">
        <div className="setting-title">
          <span className="update-title">Update Account</span>
          <span className="delete-title">Delete Account</span>
        </div>
        <form className="setting-form">
          <label>Profile picture</label>
          <div className="setting-profile">
            <img
              src="https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-02.jpg"
              alt="Profile"
              className="setting-img"
            />
            <label htmlFor="file-input">
              <i className="setting-icon fa fa-user"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>
          <label htmlFor="user">Username</label>
          <input type="text" id="user" placeholder="Username..." />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Email..." />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password..." />
          <button className="btn-setting">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};
