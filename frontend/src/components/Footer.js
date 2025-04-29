import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} priyankapatwal. All rights
                reserved.
            </p>
            <div className="footer-links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </footer>
    );
}
