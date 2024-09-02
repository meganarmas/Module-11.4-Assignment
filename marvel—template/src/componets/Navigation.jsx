import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav-bar">
            <NavLink to="/" exact activeClassName="active-link" className="nav-link">
                Home 
            </NavLink>
            <NavLink to="/browse-characters" exact activeClassName="active-link" className="nav-link">
                Browse Characters
            </NavLink>
            <NavLink to="/detail-characters" exact activeClassName="active-link" className="nav-link">
                Detail Characters
            </NavLink>
            <NavLink to="/comics" exact activeClassName="active-link" className="nav-link">
                Comics
            </NavLink>
          
        </nav>
    )
}

export default Navigation;