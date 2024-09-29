import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
    return (
        <header className="header">
            <h1>Sentiment Analysis</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
