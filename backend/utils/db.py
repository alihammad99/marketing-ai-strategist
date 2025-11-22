import os
from supabase import create_client, Client
from dotenv import load_dotenv
load_dotenv()

supabase_url = os.getenv("VITE_SUPABASE_URL")
supabase_key = os.getenv("VITE_SUPABASE_ANON_KEY")

supabaseClient: Client = create_client(supabase_url, supabase_key)