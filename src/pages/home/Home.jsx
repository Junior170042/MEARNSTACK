import "./Home.css";
import { Header } from "../../components/header/Header";
import { Post } from "../../components/posts/Post";
import { SideBar } from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
export const Home = () => {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getPost = async () => {
      const resp = await axios.get('/post' + search, { sort: { timestamp: -1 } });
      setPosts(resp.data);
    }
    getPost();
  }, [search])

  return (
    <>
      <Header />
      <div className="home">
        <Post posts={posts} />
        <SideBar />
      </div>
    </>
  );
};
