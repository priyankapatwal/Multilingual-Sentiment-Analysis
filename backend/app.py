from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel, constr
from transformers import pipeline

# Initialize the FastAPI app
app = FastAPI()

# Add the CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # You can change this to specific origins in production, like ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers (authorization, content-type, etc.)
)

# Load the multilingual sentiment analysis pipeline
sentiment_pipeline = pipeline("sentiment-analysis", model="lxyuan/distilbert-base-multilingual-cased-sentiments-student")

# Define the input model
class TextInput(BaseModel):
    text: constr(min_length=1)  # Ensure text is not empty

@app.post("/api/analyze")
async def analyze(text_input: TextInput):
    # The pipeline can handle multiple languages, so we can use the same one for any language
    result = sentiment_pipeline(text_input.text)[0]  # Get the first result
    sentiment = result['label']  # e.g., "POSITIVE" or "NEGATIVE"
    score = result['score']  # Probability score
    feedback = "Text analyzed successfully."
    
    return {"sentiment": sentiment, "score": score, "feedback": feedback}

@app.get("/")
async def root():
    return {"message": "Welcome to the Sentiment Analysis API"}