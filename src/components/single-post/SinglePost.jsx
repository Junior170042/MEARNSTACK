import "./singlePost.css";

export const SinglePost = () => {
  return (
    <>
      <div className="singlePost">
        <img
          src="https://www.optum.com/health-articles/sites/default/files/styles/article_feature/public/images/NatureHeals_1200x800_3.jpg?itok=S4cxcQHz"
          alt="Post"
          className="postImage"
        />
        <div className="postInfo">
          <div className="categories">
            <span className="postCategory">Life</span>
            <span className="postCategory">Music</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <hr />
          <span className="postDate"> 1 hour ago</span>
        </div>
        <p className="postDescription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          corrupti nisi quas non quo beatae commodi, blanditiis deleniti dolorum
          atque! Quasi magnam ipsam totam? Laborum, distinctio? Corrupti, ipsum
          modi! A! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Vero corrupti nisi quas non quo beatae commodi, blanditiis deleniti
          dolorum atque! Quasi magnam ipsam totam? Laborum, distinctio?
          Corrupti, ipsum modi! A! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vero corrupti nisi quas non quo beatae commodi,
          blanditiis deleniti dolorum atque! Quasi magnam ipsam totam? Laborum,
          distinctio? Corrupti, ipsum modi! A! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Vero corrupti nisi quas non quo beatae
          commodi, blanditiis deleniti dolorum atque! Quasi magnam ipsam totam?
          Laborum, distinctio? Corrupti, ipsum modi! A!
        </p>
      </div>
    </>
  );
};
