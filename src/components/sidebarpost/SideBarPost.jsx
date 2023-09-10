import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import "./style.css"
import { baseUrl, imagePath } from '../../baseUrl';
import Loading from '../../loading/Loading';
const SideBarPost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getPost = async () => {
            try {
                setLoading(true)
                const resp = await axios.get(baseUrl + '/post', { sort: { timestamp: -1 } });
                setPosts(resp.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true)
            }
        }
        getPost();
    }, [])



    return (
        <>
            {loading ? <div className="sidePostContainer"><Loading /></div> :
                <div className="sidePostContainer">
                    {posts.map(post => (

                        post.categories[0] !== 'Sport' &&
                        <div className=" sidePost" key={post._id}>
                            <div className="sidebarItem">
                                <h2 className="side-title">{post.title}</h2>
                                <img
                                    src={post.photo ? imagePath + post.photo : imagePath + "placeholder.png"}
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
            }

            {error && <div className="sidePostContainer"><h2>Some issues has been found! Please try to connect later.</h2></div>}
        </>
    )
}

export default SideBarPost
