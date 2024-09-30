from fastapi.middleware.cors import CORSMiddleware

# backend/app.py
from fastapi import FastAPI
from pydantic import BaseModel
from sentiment_analysis import analyze_sentiment

app = FastAPI()

# Add the CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can change this to specific origins in production, like ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers (authorization, content-type, etc.)
)

class TextInput(BaseModel):
    text: str

@app.get("/")
async def root():
    return {"message": "Welcome to the Sentiment Analysis API"}

@app.post("/api/analyze")
async def analyze(text_input: TextInput):
    sentiment, score, feedback = analyze_sentiment(text_input.text)
    return {"sentiment": sentiment, "score": score, "feedback": feedback}

result = analyze_sentiment("I love programming!")
print(result)