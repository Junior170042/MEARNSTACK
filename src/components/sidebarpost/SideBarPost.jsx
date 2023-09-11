import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import "./style.css"
import { baseUrl } from '../../baseUrl';
const SideBarPost = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {

        const getPost = async () => {
            try {

                const resp = await axios.get(baseUrl + '/post', { sort: { timestamp: -1 } });
                setPosts(resp.data);

            } catch (error) {

            }
        }
        getPost();
    }, [])



    return (
        <>

            <div className="sidePostContainer">
                {posts.map(post => (

                    post.categories[0] !== 'Sport' &&
                    <div className=" sidePost" key={post._id}>
                        <div className="sidebarItem">
                            <h2 className="side-title">{post.title}</h2>
                            <img
                                src={post.photo ? post.photo : ""}
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
