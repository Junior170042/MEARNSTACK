import "./sideBar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwiperSide from "../swiper/SwiperSide";
import { baseUrl } from "../../baseUrl";
export const SideBar = ({ posts }) => {

  const [categories, setCat] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get(baseUrl + "/cat");

      setCat(res.data);
    }

    fetchCategory();
  }, [])
  return (
    <>

      <div className={`side-bar ${posts.length === 0 && "noSidebar"}`}>

        <div className="sidebarItem">
          <span className="sidebarTitle">Blog App Made With React & Node</span>

        </div>
        <div className="swiperSideContent">

          <SwiperSide posts={posts} />
        </div>
        <div className="sidebarItem">
          <p className="sidebarP">
            Blog app made with React & Node, Node is used as backend for request like post, put,get, and delete. it's a basic application, user can add , delete and update post after being registered. Posts can be filtered by category.</p>

        </div>
        <div className="sidebarItem sidebarCat">
          <ul className="sidebarList">
            <h6 className="sidebarTitle">CATEGORIES</h6>
            {categories.length > 0 && categories.map(cat => <Link to={"/?cat=" + cat.name} className="link" key={cat._id}>
              <li className="sidbarListItem" >{cat.name}</li>
            </Link>)}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FALLOW US</span>
          <div className="sidebarSocial">
            <a className="link" href=" https://www.facebook.com/juniorhens.vernard" target="_blank">
              <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=1wvdpbesps17q&utm_content=o6xi1f0" className="link" target="_blank" rel="noopener noreferrer">
              <i className="sidebarIcon fa-brands fa-square-instagram"></i>

            </a>
            <a href="https://www.linkedin.com/in/st-verty-vernard/" className="link" target="_blank" rel="noopener noreferrer">

              <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

    </>
  );
};
