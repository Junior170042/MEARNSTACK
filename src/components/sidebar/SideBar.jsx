import "./sideBar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const SideBar = () => {

  const [categories, setCat] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get("/cat/");

      setCat(res.data);
    }

    fetchCategory();
  }, [])
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
            {categories.length > 0 && categories.map(cat => <Link to={"/?cat=" + cat.name} className="link" key={cat._id}>
              <li className="sidbarListItem" >{cat.name}</li>
            </Link>)}
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
