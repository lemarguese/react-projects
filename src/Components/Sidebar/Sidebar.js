import {Link} from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="more"/>
            <div className="routes">
                <div className="blocks">
                    <div className="cloth-icon"/>
                    <Link to="/clothes">Clothes</Link>
                </div>
                <div className="blocks">
                    <div className="profile-icon"/>
                    <Link to="/profile">Profile</Link>
                </div>
                <div className="blocks">
                    <div className="cart-icon"/>
                    <Link to="/cart">Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
