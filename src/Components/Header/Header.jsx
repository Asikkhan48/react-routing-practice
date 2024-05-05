import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
        <nav className="flex justify-around">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="./contact">Contact</NavLink>
            <NavLink to="./users">Users</NavLink>
        </nav>
        
        </>
    );
};

export default Header;