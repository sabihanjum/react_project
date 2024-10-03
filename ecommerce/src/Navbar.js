import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return(
        <div> 
            <ul ClassName ="navbar">
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/">About</Link></li>
                <li><Link to ="/">Dashboard</Link></li>
            </ul>
        </div>
    )
}