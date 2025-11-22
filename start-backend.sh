#!/bin/bash

echo "Starting AI Marketing Strategist Backend..."
echo "=========================================="
echo ""

cd backend

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python -m venv venv
fi

echo "Activating virtual environment..."
source venv/bin/activate

if [ ! -f ".env" ]; then
    echo "ERROR: .env file not found in backend directory!"
    echo "Please create a .env file with your Hugging Face token"
    exit 1
fi

echo "Installing dependencies..."
pip install -q -r requirements.txt

echo ""
echo "Starting FastAPI server on http://localhost:8000"
echo "=========================================="
python main.py
