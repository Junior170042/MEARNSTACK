import { useContext, useState } from "react";
import "./write.css";
import { Context } from "../../context/Context";
import axios from "axios";
import { baseUrl, imagePath } from "../../baseUrl";
export const Write = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("Other");
  const [wait, setWait] = useState(false)

  const handlePost = async (datos) => {
    try {

      const res = await axios.post(baseUrl + "/post", datos);
      if (res) {

        window.location.replace("/")
      }
    } catch (error) {

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      description: desc,
      username: user.username,
      categories: cat
    };

    setWait(true)

    if (file) {
      const data = new FormData();
      const fileName = file.name;

      data.append("name", fileName);
      data.append("image", file);
      data.append("type", "postImage");

      try {
        const getUrl = await axios.post(baseUrl + "/post/upload/file", data
        )

        newPost.photo = getUrl.data.url

        await handlePost(newPost)
        setWait(false)
      } catch (error) {
        setWait(false)
      }
    } else {

      await handlePost(newPost)
      setWait(false)
    }




  }

  return (
    <div className="write">
      <h1 className="post-title">Add New Post</h1>
      <img
        src={file ? URL.createObjectURL(file) : imagePath + "placeholder.png"}
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
            onChange={(e) => {
              setFile(e.target.files[0])
            }}
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="input-form input-title"
            required
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />


        </div>
        <div className="form-content">
          <div className="form-group form-group-cat">
            <label htmlFor="cat">Post category</label>
            <select name="cats" id="cat" className="input-cat"
              onChange={(e) => setCat(e.target.value)}
            >
              <option value="Other">Other</option>
              <option value="Music">Music</option>
              <option value="Sport">Sport</option>
              <option value="Life">Life</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              type="text"
              neme="description"
              required
              placeholder="Your story..."
              className="input-form input-story"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>
        <button className="btn-publish" type="submit">{wait ? "Sending..." : "Add Post"}</button>
      </form>
    </div>
  );
};
