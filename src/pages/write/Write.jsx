import { useContext, useState } from "react";
import "./write.css";
import { Context } from "../../context/Context";
import axios from "axios";
export const Write = () => {

  const { user } = useContext(Context);
  const path = "http://localhost:5000/images";

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      description: desc,
      username: user.username,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);

      newPost.photo = fileName;

      try {
        await axios.post("/upload", data)
      } catch (error) {

      }
    }
    try {
      const res = await axios.post("/post", newPost);
      window.location.replace("/single/" + res.data._id)
    } catch (error) {

    }



  }

  return (
    <div className="write">
      <h1 className="post-title">Add New Post</h1>
      <img
        src={file ? URL.createObjectURL(file) : path + "/placeholder.png"}
        alt="Post-img"
        className="write-img"
      />
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="files" className="label-file">
            <i className="form-icon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="files" style={{ display: "none" }}
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="input-form input-title"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            neme="description"
            placeholder="Your story..."
            className="input-form input-story"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="btn-publish" type="submit">Publish</button>
      </form>
    </div>
  );
};
