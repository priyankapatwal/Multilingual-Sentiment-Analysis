import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} Sentient Analysis. All rights
                reserved.
            </p>
            <div className="footer-links">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
        </footer>
    );
}
