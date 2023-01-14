import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import "./style.css"
const SideBarPost = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            const resp = await axios.get('/api/post', { sort: { timestamp: -1 } });
            setPosts(resp.data);
        }
        getPost();
    }, [])

    const path = "https://blogappbackend-zutg.onrender.com/images/";

    return (
        <>
            <div className="sidePostContainer">
                {posts.map(post => (

                    post.categories[0] !== 'Sport' &&
                    <div className=" sidePost" key={post._id}>
                        <div className="sidebarItem">
                            <h2 className="side-title">{post.title}</h2>
                            <img
                                src={post.photo ? path + post.photo : path + "placeholder.png"}
                                alt="Man"
                                className="sidePostImg"
                            />
                            <p className="side-desc1">
                                {post.description.split("", 200)}</p>
                        </div>
                        <p className="side-desc2">
                            {post.description.split("", 200)}</p>
                    </div>

                ))}
            </div>
        </>
    )
}

export default SideBarPost
