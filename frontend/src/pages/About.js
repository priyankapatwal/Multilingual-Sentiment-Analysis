import "./About.css";

export function About() {
    return (
        <div className="about">
            <h1>About the App</h1>
            <p>
                This app is designed to analyze the sentiment of text, providing
                instant feedback on whether the sentiment is positive or
                negative. It uses a combination of modern technologies to
                deliver fast and accurate results:
            </p>
            <ul>
                <li>
                    <strong>React</strong>: Used to build a smooth and
                    interactive user interface. It handles dynamic updates and
                    ensures the app runs seamlessly on different devices.
                </li>
                <li>
                    <strong>FastAPI</strong>: Powers the backend, enabling quick
                    processing of user input and returning results efficiently.
                    FastAPI is known for its speed and flexibility when building
                    APIs.
                </li>
                <li>
                    <strong>Hugging Face Transformers</strong>: A pre-trained
                    sentiment analysis model from Hugging Face is used to
                    interpret the text, providing accurate sentiment and
                    probability scores based on the input.
                </li>
                <li>
                    <strong>CORS Middleware</strong>: Ensures secure
                    communication between the frontend and backend, especially
                    when hosted on different servers.
                </li>
            </ul>
            <p>
                Together, these technologies create a fast and reliable
                experience for analyzing text sentiment.
            </p>
        </div>
    );
}
