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
                    <strong>Sentiment Analysis Model</strong>: The app uses a
                    pre-trained sentiment analysis model from Hugging Face,
                    which interprets text and provides sentiment results along
                    with a confidence score. The app supports multiple
                    languages.
                </li>
                <li>
                    <strong>Local Storage</strong>: Analysis history is stored
                    securely in the browser using local storage, meaning no data
                    is sent to external servers, and no login is required.
                </li>
            </ul>
            <p>
                Together, these technologies create a fast and reliable
                experience for analyzing text sentiment.
            </p>
        </div>
    );
}
