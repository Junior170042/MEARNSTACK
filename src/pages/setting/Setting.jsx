import "./setting.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ErrorServer } from "../errorServer/ErrorServer";
import { baseUrl } from "../../baseUrl";

export const Setting = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wait, setWait] = useState(false)


  const handleUpdate = async (data) => {
    try {
      await axios.post(baseUrl + "/post/update_many", {
        old: user.username, newUser: username
      })
      //sending datas to the server for updating
      const res = await axios.put(baseUrl + "/user/" + user._id, data);
      dispatch({ type: "UPDATE_SUCCESS", payload: await res.data })

      toast.success("User updated successfully!", {
        position: toast.POSITION.TOP_CENTER
      });
      setTimeout(() => {

        window.location.replace("/");
      }, 2000)
    } catch (error) {
      showMessage(ErrorServer(error.response.data))
      dispatch({ type: "UPDATE_FAILURE" })
    }
  }


  const showMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const handleEdit = (user, mail, pass, repass) => {
    let errors = "";

    const myMailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!user.trim()) {
      errors = "A username is required!";
    } else {

      if (user.length < 3) {
        errors = "Username is too short!";
      }

      if (!isNaN(user)) {
        errors = "Username is in valid!";
      }
    }
    if (!mail.trim()) {
      errors = "An email is required!";
    } else {

      if (!myMailReg.test(mail)) {
        errors = "Please enter a valid email address!";
      }
    }
    if (!pass.trim()) {
      errors = "A password is required!";
    } else {
      if (pass.length < 5) {
        errors = "The password most be at least 5 characters!";
      } else if (pass !== repass) {
        errors = "The password doesn't match!";
      }
    }

    if (!errors) {
      return true;
    } else {
      showMessage(errors);
      return false;
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleEdit(e.target.user.value, e.target.mail.value, e.target.pass.value, e.target.cpass.value)) {

      dispatch({ type: "UDATE_START" })
      const updatedUser = {
        userId: user._id,
        username,
        email,
        password
      };
      setWait(true)

      //file management
      if (file) {
        //creting a form data
        const data = new FormData();
        //custom file name
        const fileName = Date.now() + file.name;
        //adding the file and the name to the form data
        data.append("name", fileName);
        data.append("image", file);
        data.append("type", "userImage")



        try {
          const getUrl = await axios.post(baseUrl + "/post/upload/file", data
          )

          updatedUser.picture = getUrl.data.url

          await handleUpdate(updatedUser)
          setWait(false)
        } catch (error) {
          setWait(false)
        }
      } else {
        await handleUpdate(updatedUser)

        setWait(false)
      }






    }

  }


  return (
    <div className="setting">
      <div className="setting-content">
        <div className="setting-title">
          <span className="update-title">Update Account</span>
        </div>
        <form className="setting-form" onSubmit={handleSubmit}>
          <label>Profile picture</label>
          <div className="setting-profile">
            <img
              src={file ? URL.createObjectURL(file) : user.picture}
              alt="Profile"
              className="setting-img"
            />
            <label htmlFor="file-input">
              <i className="setting-icon fa fa-plus"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <label htmlFor="user">Username</label>
          <input type="text" id="user" placeholder={user.username}

            name="user"
            onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder={user.email}

            name="mail"
            onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password..."

            name="pass"
            onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="Cpassword">Confirm Password</label>
          <input type="password" id="Cpassword" placeholder="Confirm password..."

            name="cpass"
            onChange={null} />
          <button className="btn-setting" type="submit">{wait ? "Updating..." : "Update"}</button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};
