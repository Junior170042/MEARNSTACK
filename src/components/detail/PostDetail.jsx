import { useEffect, useState } from "react";
import { Context } from "../../context/Context"
import "./postDetail.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { baseUrl } from "../../baseUrl";
//import { useLocation } from "react-router-dom";
export const PostDetail = ({ post_id }) => {
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const path = "https://blogappbackend-zutg.onrender.com/images/";

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [editMode, setEditMode] = useState(false);
  /*
  wse can get the id from the url in the location object
  const location = useLocation();
  we split the path url into an array and we get the id from that array
  const _id = location.pathname.split('/')[2];*/

  const handleDelete = async () => {
    try {
      await axios.delete(baseUrl + "/api/post/" + post_id, { data: { username: user.username } })

      setEditMode(false);
    } catch (error) {

    }
  }
  const handleUpdate = async () => {
    try {
      await axios.put(baseUrl + "/api/post/" + post_id, { username: user.username, title: title, description: desc })
      window.location.reload();
    } catch (error) {

    }
  }

  useEffect(() => {
    const getSinglePost = async () => {
      const res = await axios.get(baseUrl + "/api/post/" + post_id);
      setPost(res.data);

      setTitle(await res.data.title);
      setDesc(await res.data.description);


    }
    getSinglePost();
  }, [post_id])
  return (
    <div className="post-detail">

      <div className="detail-content">
        <img
          src={post.photo ? path + post.photo : path + "placeholder.png"}
          alt="detail"
          className="detailImg"
        />
        {editMode ? <input type="text" className="title-input" value={title} autoFocus
          onChange={(e) => setTitle(e.target.value)}
        /> : (

          <h1 className="detail-title">
            {title}

            {user?.username === post.username &&

              <div className="edit-container">
                <i className="detail-icon fa-regular fa-pen-to-square" onClick={() => setEditMode(true)}></i>
                <i className="detail-icon fa fa-trash" onClick={handleDelete}></i>
              </div>
            }
          </h1>
        )}

        {!editMode && (

          <div className="detail-info">

            <Link to={"/?user=" + post.username} className="link">
              <span className="detail-auther">
                Author: <b>{post.username}</b>
              </span>

            </Link>
            <span className="detail-date">
              <b>Date:</b> {post.createdAt}
            </span>
          </div>
        )}
        {editMode ? <textarea className="description-input" value={desc} rows="6" onChange={(e) => setDesc(e.target.value)} /> : <p className="detail-text">
          {desc}
        </p>}
        {editMode && <button className="btn-update-post"
          onClick={handleUpdate}>Update</button>}

      </div>

    </div>
  );
};
