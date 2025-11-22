# AI Marketing Strategist Platform

An AI-powered marketing strategy generator that uses NazareAI Senior Marketing Strategist for plan generation and DeepSeek for translation and content improvement.

## Features

- Generate comprehensive marketing plans using AI
- Translate plans to Arabic
- Improve and refine marketing strategies
- Store and view plan history
- User authentication with Supabase
- Clean, modern UI

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: FastAPI, Python
- **Database**: Supabase (PostgreSQL)
- **AI Models**:
  - NazareAI Senior Marketing Strategist (Hugging Face)
  - DeepSeek R1 Distill Llama 8B (for translation/improvement)

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- Hugging Face account and API token

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. The `.env` file is already configured with Supabase credentials

3. Start the development server:
```bash
npm run dev
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Update the `.env` file in the backend directory with your Hugging Face token:
```
HF_TOKEN=your_huggingface_token_here
```

To get a Hugging Face token:
- Go to https://huggingface.co/settings/tokens
- Create a new token with read access
- Copy and paste it in the `.env` file

5. Start the FastAPI server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

### Database Setup

The database tables need to be created in Supabase. Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS businesses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  industry text NOT NULL,
  description text NOT NULL,
  target_audience text NOT NULL,
  budget text,
  goals text NOT NULL,
  additional_info jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own businesses"
  ON businesses FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own businesses"
  ON businesses FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own businesses"
  ON businesses FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own businesses"
  ON businesses FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS marketing_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid REFERENCES businesses(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  original_plan text NOT NULL,
  translated_plan text,
  improved_plan text,
  language text DEFAULT 'en',
  status text DEFAULT 'completed',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE marketing_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own marketing plans"
  ON marketing_plans FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own marketing plans"
  ON marketing_plans FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own marketing plans"
  ON marketing_plans FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own marketing plans"
  ON marketing_plans FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_businesses_user_id ON businesses(user_id);
CREATE INDEX IF NOT EXISTS idx_marketing_plans_user_id ON marketing_plans(user_id);
CREATE INDEX IF NOT EXISTS idx_marketing_plans_business_id ON marketing_plans(business_id);
```

## Usage

1. Start both the frontend (npm run dev) and backend (python backend/main.py)
2. Open http://localhost:5173 in your browser
3. Sign up or sign in to your account
4. Fill in the business information form
5. Select your preferred language (English or Arabic)
6. Click "Generate Marketing Plan"
7. View your AI-generated marketing strategy
8. Access previous plans from the History sidebar

## API Endpoints

- `POST /api/generate-plan` - Generate a new marketing plan
- `GET /api/plans/{user_id}` - Get all plans for a user

## Project Structure

```
├── src/
│   ├── components/       # React components
│   ├── lib/             # Supabase client
│   ├── types/           # TypeScript types
│   └── App.tsx          # Main application component
├── backend/
│   ├── main.py          # FastAPI application
│   ├── requirements.txt # Python dependencies
│   └── .env            # Backend environment variables
└── .env                # Frontend environment variables
```
