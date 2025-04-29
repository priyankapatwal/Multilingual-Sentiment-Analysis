import { useEffect, useState } from "react";
import "./History.css";
import { formatScore, capitalizeFirstLetter } from "../App";

export function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = getHistory();
        setHistory(storedHistory);
    }, []);

    // Retrive analysis results from local storage
    const getHistory = () => {
        return JSON.parse(localStorage.getItem("analysisHistory")) || [];
    };

    // Calculate average confidence score
    const calculateAverageScore = () => {
        if (history.length === 0) return;
        const totalScore = history.reduce((sum, entry) => sum + entry.score, 0);
        return (totalScore / history.length).toFixed(3);
    };

    // Calculate overall sentiment
    const calculateOverallSentiment = () => {
        if (history.length === 0) return;

        const sentimentCounts = history.reduce((counts, entry) => {
            counts[entry.sentiment] = (counts[entry.sentiment] || 0) + 1;
            return counts;
        }, {});

        // Determine the predominant sentiment
        const overallSentiment = Object.entries(sentimentCounts).reduce(
            (prev, curr) => (curr[1] > prev[1] ? curr : prev)
        );

        return overallSentiment[0]; // Return the sentiment with the highest count
    };

    const overallSentiment = calculateOverallSentiment();
    const averageScore = calculateAverageScore();

    return (
        <div className="history">
            <h1>Analysis History</h1>
            {history.length === 0 ? (
                <p>No analysis history found.</p>
            ) : (
                <>
                    <div className="summary">
                        <strong>Overall Sentiment:</strong>{" "}
                        {capitalizeFirstLetter(overallSentiment)}
                        <br/>
                        
                        <strong>Overall Confidence Score:</strong>{" "}
                        {formatScore(averageScore)} ({averageScore})
                    </div>
                    <ul>
                        {history.map((entry, index) => (
                            <li key={index} className="result">
                                <strong>Input text:</strong> {entry.text} <br />
                                <strong>Sentiment feeling:</strong>{" "}
                                {capitalizeFirstLetter(entry.sentiment)}
                                <br />
                                <strong>Confidence score:</strong>{" "}
                                {formatScore(entry.score)} (
                                {entry.score.toFixed(3)}
                                )
                                <br />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
