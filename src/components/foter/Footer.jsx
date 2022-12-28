import React from 'react'
import "./footer.css"
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <h2>About us</h2>
                <div className="text">Quick word of advice: If you do choose to go down the avenue of one group photo, do be sure to take into account that naturally people may come and go from your team over time, which will require your photo to be updated more often. But if this is not a problem, then go ahead!</div>
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
