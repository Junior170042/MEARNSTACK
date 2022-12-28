import "./setting.css";
import { SideBar } from "../../components/sidebar/SideBar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const Setting = () => {

  const path = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UDATE_START" })
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);

      updatedUser.picture = fileName;

      try {
        await axios.post("/upload", data)
      } catch (error) {

      }
    }
    try {
      await axios.post("post/update_many", {
        old: user.username, newUser: username
      })
      const res = await axios.put("/user/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: await res.data })
      toast.success("User updated successfully!", {
        position: toast.POSITION.TOP_CENTER
      });
      window.location.reload();
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" })
    }



  }


  return (
    <div className="setting">
      <div className="setting-content">
        <div className="setting-title">
          <span className="update-title">Update Account</span>
          <span className="delete-title">Delete Account</span>
        </div>
        <form className="setting-form" onSubmit={handleSubmit}>
          <label>Profile picture</label>
          <div className="setting-profile">
            <img
              src={file ? URL.createObjectURL(file) : path + user.picture}
              alt="Profile"
              className="setting-img"
            />
            <label htmlFor="file-input">
              <i className="setting-icon fa fa-user"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <label htmlFor="user">Username</label>
          <input type="text" id="user" placeholder={user.username}
            required
            onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder={user.email}
            required
            onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password..."
            required
            onChange={(e) => setPassword(e.target.value)} />
          <button className="btn-setting" type="submit">Update</button>
        </form>
      </div>
      <SideBar />
      <ToastContainer />
    </div>
  );
};
