import "./sideBar.css";

export const SideBar = () => {
  return (
    <>
      <div className="side-bar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=170667a&w=0&k=20&c=aS1I71X6jSTTdFJFxgL5nmb-2ACzbw7prj3lIVvX-2U="
            alt="Man"
            className="sidebarImg"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit, veritatis veniam ducimus dignissimos suscipit quasi
            assumenda corporis nobis optio sint voluptatem aspernatur cum sequi.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidbarListItem">Life</li>
            <li className="sidbarListItem">Music</li>
            <li className="sidbarListItem">Style</li>
            <li className="sidbarListItem">Sport</li>
            <li className="sidbarListItem">Cinema</li>
            <li className="sidbarListItem">Tech</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FALLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
};
