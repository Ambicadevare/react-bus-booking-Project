import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="logo">Bus Tracker</h2>

            <div className="road">
                <div className="bus">
                    <div className="wheel"></div>
                    <div className="bus-body">🚌</div>
                    <div className="wheel"></div>
                </div>
            </div>

            <Link to="/" className="home">Home</Link>
        </div>
    );
}

export default Navbar;
