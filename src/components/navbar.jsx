import React from 'react';
const navbar = ({count}) => {
    console.log('navbar render()');
    return (  
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <a className="nav-link">Navbar</a><span className="badge badge-pill badge-secondary">{count}</span>
        </nav>
    );
}
 
export default navbar;