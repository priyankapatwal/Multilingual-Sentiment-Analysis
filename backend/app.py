from fastapi.middleware.cors import CORSMiddleware

# backend/app.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from the backend!"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend's address
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)