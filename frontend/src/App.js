import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Analysis } from "./pages/Analysis";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { History } from "./pages/History";
import "./App.css";

// Format score in text
export function formatScore(score) {
    if (score >= 0.9) {
        return "Highly Certain";
    } else if (score >= 0.7) {
        return "Fairly Certain";
    } else if (score >= 0.5) {
        return "Somewhat Certain";
    } else {
        return "Uncertain";
    }
}

// Capitalize first letter of a string
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function App() {
    useEffect(() => {
        axios
            .get("http://localhost:8000")
            .then((response) => console.log(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/history" element={<History />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
