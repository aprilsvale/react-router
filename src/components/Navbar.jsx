import {NavLink} from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Feed
            </NavLink>
            <NavLink to="/about" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                About
            </NavLink>
            <NavLink to="/feedback" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Feedback
            </NavLink>
        </nav>
    );
}