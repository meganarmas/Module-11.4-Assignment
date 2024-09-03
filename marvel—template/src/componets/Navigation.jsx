import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav-bar">
            <NavLink to="/" exact activeClassName="active">
                Home 
            </NavLink>
            <NavLink to="/browse-characters" exact activeClassName="active">
                Browse Characters
            </NavLink>
            <NavLink to="/detail-characters" exact activeClassName="active">
                Detail Characters
            </NavLink>
            <NavLink to="/comics" exact activeClassName="active">
                Comics
            </NavLink>
          
        </nav>
    );
}

export default Navigation;