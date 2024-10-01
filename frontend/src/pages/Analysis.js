import axios from "axios";
import { useState } from "react";
import "./Analysis.css";
import { formatScore, capitalizeFirstLetter } from "../App";

export function Analysis() {
    const [inputText, setInputText] = useState("");
    const [analysisResult, setAnalysisResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = function (e) {
        setInputText(capitalizeFirstLetterOfSentences(e.target.value));
    };

    const handleAnalyze = async function () {
        if (!inputText) return;

        setLoading(true);
        try {
            // Replace with your actual API endpoint
            const response = await axios.post(
                "http://127.0.0.1:8000/api/analyze",
                {
                    text: inputText,
                }
            );
            setAnalysisResult(response.data);
            storeHistory(
                inputText,
                response.data.sentiment,
                response.data.score
            );
        } catch (error) {
            console.error("Error during analysis:", error);
        } finally {
            setLoading(false);
        }
    };

    // Store analysis results in local storage
    const storeHistory = (text, sentiment, score) => {
        let history = JSON.parse(localStorage.getItem("analysisHistory")) || [];
        const newEntry = { text, sentiment, score };
        history.push(newEntry);
        localStorage.setItem("analysisHistory", JSON.stringify(history));
    };

    // Capitalize first letter of first word in every sentence of the paragrapth
    function capitalizeFirstLetterOfSentences(inputText) {
        if (!inputText) return;

        // Split the text into sentences using regex to identify end of sentences (., ?, !)
        const sentences = inputText.match(/[^.!?]+[.!?]*\s*/g);

        // Capitalize the first letter of each sentence
        const capitalizedSentences = sentences.map((sentence) => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        });

        // Join the sentences back into a single paragraph
        return capitalizedSentences.join("");
    }

    return (
        <div className="analysis">
            <h1>Check Your Text's Sentiment Instantly</h1>
            <div className="sentiment">
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Enter text for analysis..."
                />
                <button onClick={handleAnalyze} disabled={loading}>
                    {loading ? "Analyzing..." : "Analyze"}
                </button>
            </div>

            {analysisResult && (
                <div className="result">
                    <h2>Analysis Results</h2>
                    <p>
                        <strong>Sentiment feeling:</strong>{" "}
                        {capitalizeFirstLetter(analysisResult.sentiment)}
                    </p>
                    <p>
                        <strong>Confidence score:</strong>{" "}
                        {formatScore(analysisResult.score)} (
                        {analysisResult.score.toFixed(3)})
                    </p>
                </div>
            )}
        </div>
    );
}
