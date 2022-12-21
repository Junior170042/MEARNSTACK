import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
const SideBarPost = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            const resp = await axios.get('/post', { sort: { timestamp: -1 } });
            setPosts(resp.data);
        }
        getPost();
    }, [])

    const path = "http://localhost:5000/images/";

    return (
        <>
            {posts.map(post => (

                post.categories[0] !== 'Sport' &&
                <div className=" sidePost" key={post._id}>
                    <div className="sidebarItem">
                        <img
                            src={post.photo ? path + post.photo : path + "placeholder.png"}
                            alt="Man"
                            className="sidePostImg"
                        />
                        <h2 className="side-title">{post.title}</h2>
                    </div>
                    <p className="side-desc">
                        {post.description.split("", 200)}</p>
                </div>

            ))}
        </>
    )
}

export default SideBarPost
