import "./write.css";

export const Write = () => {
  return (
    <div className="write">
      <img
        src="https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-02.jpg"
        alt="Post-img"
        className="write-img"
      />
      <form className="write-form">
        <div className="form-group">
          <label htmlFor="files" className="label-file">
            <i className="form-icon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="files" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="input-form input-title"
            autoFocus={true}
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="Your story..."
            className="input-form input-story"
          />
        </div>
        <button className="btn-publish">Publish</button>
      </form>
    </div>
  );
};
