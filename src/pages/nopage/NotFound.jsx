import "./styles.css";
import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className='noPage'>
            <h2>Page not found</h2>

            <button><Link to="/">Go home</Link></button>
        </div>
    )
}

export default NotFound