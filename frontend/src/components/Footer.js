import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} Horlescu Adrian. All rights
                reserved.
            </p>
            <div className="footer-links">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </footer>
    );
}
