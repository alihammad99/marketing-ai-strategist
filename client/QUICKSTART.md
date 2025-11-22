# Quick Start Guide

Get your AI Marketing Strategist Platform up and running in 5 minutes!

## Step 1: Database Setup

1. Go to your Supabase project: https://0ec90b57d6e95fcbda19832f.supabase.co
2. Click on "SQL Editor" in the left sidebar
3. Copy the contents of `setup-database.sql`
4. Paste and run it in the SQL Editor

## Step 2: Get Hugging Face Token

1. Go to https://huggingface.co/settings/tokens
2. Click "Create new token"
3. Give it a name (e.g., "Marketing Platform")
4. Select "Read" permission
5. Copy the token

## Step 3: Configure Backend

1. Open `backend/.env`
2. Replace `your_huggingface_token_here` with your actual token:
   ```
   HF_TOKEN=hf_your_actual_token_here
   ```
3. Save the file

## Step 4: Start the Backend

### Option A: Using the script (Linux/Mac)
```bash
./start-backend.sh
```

### Option B: Manual setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

The backend will start at http://localhost:8000

## Step 5: Start the Frontend

In a new terminal:
```bash
npm run dev
```

The frontend will start at http://localhost:5173

## Step 6: Use the Platform

1. Open http://localhost:5173
2. Sign up with your email and password
3. Fill in the business information form
4. Choose your language (English or Arabic)
5. Click "Generate Marketing Plan"
6. Wait for the AI to generate your strategy!

## Troubleshooting

**Backend won't start?**
- Make sure Python 3.8+ is installed
- Check that your HF_TOKEN is correct
- Ensure port 8000 is not in use

**Frontend won't connect?**
- Make sure the backend is running on port 8000
- Check browser console for CORS errors

**Database errors?**
- Verify you ran the SQL setup script
- Check Supabase connection in .env file

**AI generation taking too long?**
- First generation can take 30-60 seconds
- Check your internet connection
- Verify Hugging Face token is valid

## Support

For more details, see the main README.md file.
