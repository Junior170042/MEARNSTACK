import React from 'react'
import "./footer.css"
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <h2>About us</h2>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsam temporibus eveniet reiciendis beatae consectetur, saepe, voluptas architecto animi tenetur eaque! Aliquam in assumenda id maxime repudiandae laudantium excepturi praesentium.
                    Adipisci iure quo eius obcaecati, in ea. Officiis, laboriosam! Impedit, dolore laboriosam quisquam possimus nostrum perferendis rem beatae eos reprehenderit velit aliquid deserunt, in, nulla eligendi omnis officiis. Optio, eius.
                    Maiores magni minus ea earum porro odio deleniti neque commodi. Voluptatum obcaecati aut accusamus tempore exercitationem error dolores, maiores facilis quis quibusdam distinctio voluptates quo fugiat enim ullam odit porro!</div>
            </div>
            <div className="footer-social">
                <h2>Join us in our community</h2>
                <div className="social-icon">
                    <ul>
                        <li> <a className="link" href=" https://www.facebook.com/juniorhens.vernard" target="_blank">
                            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                        </a></li>
                        <li> <a href="https://www.instagram.com/invites/contact/?i=1wvdpbesps17q&utm_content=o6xi1f0" className="link" target="_blank" rel="noopener noreferrer">
                            <i className="sidebarIcon fa-brands fa-square-instagram"></i>

                        </a></li>
                        <li>  <a href="https://www.linkedin.com/in/st-verty-vernard/" className="link" target="_blank" rel="noopener noreferrer">

                            <i className="sidebarIcon fa-brands fa-linkedin"></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
