# Sentiment Analysis

A full-stack web application designed to analyze the sentiment of user-inputted text. The app utilizes NLP techniques to determine the sentiment, providing feedback on whether the text is positive, neutral, or negative.  The app features a React-based frontend and a Python FastAPI backend, making use of machine learning for real-time text sentiment evaluation.

![image](images/image1.png)
![image](images/image2.png)
![image](images/image3.png)
![image](images/image4.png)




## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Technologies](#technologies)
- [Installation](#installation)
- [License](#license)
- [Contact](#contact)


## Features

- **Multilingual Sentiment Analysis**: Supports sentiment analysis in multiple languages
- **Real-Time Sentiment Analysis**: Analyze the sentiment of a given text in real-time, providing instant feedback.
- **Confidence Scoring**: Display a formatted confidence score for the analyzed sentiment.
- **History Tracking**: Allows users to view previously analyzed texts and their corresponding sentiments.
- **Responsive Design**: The interface is fully optimized for both desktop and mobile devices.

## Usage

- **Analyze Text**: Enter text in the provided input field and click "Analyze" to receive sentiment feedback.
- **View Confidence**: The result includes a formatted score indicating the confidence of the sentiment classification.
- **Check History**: Users can view a list of previously analyzed texts and their sentiment scores.

## Technologies

- **Frontend**: React, JavaScript (ES6+), HTML5, CSS3
- **Backend**: FastAPI, Python, AWS Lambda
- **Machine Learning**: Hugging Face Transformers for sentiment analysis

## Installation

To get started with this project, follow these steps:
1. **Clone the repository**:
```bash
git clone https://github.com/priyankapatwal/multilingual-sentiment-analysis.git
```
2. **Navigate to the frontend directory**:
```bash
cd multilingual-sentiment-analysis/frontend
```
3. **Install frontend dependencies:**:
```bash
npm install
```
4. **Start the frontend development server**: 
```bash
npm start
```
5. **Open a new terminal window**, then navigate to the backend directory:
```bash
cd ../backend
```
6. **Install backend dependencies**:
```bash
pip install -r requirements.txt
```
7. **Start the backend server**:
```bash
uvicorn main:app --reload
```
8. The backend will run on http://localhost:8000, and the frontend on http://localhost:3000. Make sure both servers are running to use the application.


## Contact

For any inquiries or feedback, feel free to reach out via:

- Email: priyankapatwal789@gmail.com, niharikarwt811@gmail.com
- Linkedin [Priyanka Patwal] (https://www.linkedin.com/in/priyanka-p-72a0b525b) [Niharika Rawat](https://www.linkedin.com/in/niharika-rawat-0776a8280/)
- GitHub: [priyankapatwal](https://github.com/priyankapatwa) [niharikarawat](https://github.com/Niharika811)

---
