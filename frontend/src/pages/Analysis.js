import axios from "axios";
import { useState } from "react";
import "./Analysis.css";

export function Analysis() {
    const [inputText, setInputText] = useState("");
    const [analysisResult, setAnalysisResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = function (e) {
        setInputText(e.target.value);
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
        } catch (error) {
            console.error("Error during analysis:", error);
        } finally {
            setLoading(false);
        }
    };

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
                        <strong>Sentiment:</strong> {analysisResult.sentiment}
                    </p>
                    <p>
                        <strong>Score:</strong> {analysisResult.score}
                    </p>
                    <p>
                        <strong>Detailed Feedback:</strong>{" "}
                        {analysisResult.feedback}
                    </p>
                </div>
            )}
        </div>
    );
}
