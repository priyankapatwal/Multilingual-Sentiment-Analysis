import { Link } from "react-router-dom";
import "./Home.css";

export function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Sentient Analysis</h1>
            <p>
                This application allows you to analyze text and gain insights
                using advanced algorithms.
            </p>
            <Link to="/analysis" className="button">
                Get Started
            </Link>
        </div>
    );
}
