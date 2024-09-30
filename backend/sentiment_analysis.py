from textblob import TextBlob

def analyze_sentiment(text):
    analysis = TextBlob(text)
    sentiment = "Positive" if analysis.sentiment.polarity > 0 else "Negative" if analysis.sentiment.polarity < 0 else "Neutral"
    score = analysis.sentiment.polarity
    feedback = str(analysis.sentences)
    return sentiment, score, feedback