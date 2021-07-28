import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
        <h2>The page you searched for was not found.</h2>
        <button><Link to='/'>Return home</Link></button>  
        </div>
    )
}

export default Error
