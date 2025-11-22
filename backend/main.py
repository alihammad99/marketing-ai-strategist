from fastapi.responses import HTMLResponse
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import os
from dotenv import load_dotenv
from huggingface_hub import InferenceClient
import httpx
from api.class_list import BusinessInput, MarketingPlanResponse
from api.db import supabaseClient
from api.prompt import generatePrompt
# from model import generatePlan
from api.o3 import generateCloudPlan
import traceback

load_dotenv()

app = FastAPI(
    title="AI Marketing Strategist Platform",
    description="Vercel + FastAPI",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

hf_token = os.getenv("HF_TOKEN", "")

@app.get("/")
async def root():
    return {"message": "AI Marketing Strategist Platform API"}

@app.post("/api/generate-plan", response_model=MarketingPlanResponse)
async def generate_marketing_plan(business: BusinessInput, user_id: str):
    print("DEBUG - user_id =", user_id)
    print("DEBUG - business =", business.model_dump())
    
    try:
        # Save business
        print("business data ...")

        business_data = {
            "user_id": user_id,
            "name": business.name,
            "industry": business.industry,
            "description": business.description,
            "target_audience": business.target_audience,
            "budget": business.budget,
            "goals": business.goals
        }

        print("✅ business data passed")

        response = supabaseClient.table("businesses").insert(business_data).execute()
        business_id = response.data[0]["id"]

        print("✅ business table saved to db", business_id)


        # Prompt
        plan = generateCloudPlan(business)
        # plan = generatePlan(business)
        print("✅ prompt generated")


        client = InferenceClient(token=hf_token)
        print("✅ client fetched")

        # Save plan
        plan_data = {
            "business_id": business_id,
            "user_id": user_id,
            "original_plan": plan,
            "language": business.language,
            "status": "completed"
        }

        plan_response = supabaseClient.table("marketing_plans").insert(plan_data).execute()
        plan_id = plan_response.data[0]["id"]

        return MarketingPlanResponse(
            plan_id=plan_id,
            original_plan=plan,
            language=business.language
        )

    except Exception as e:
        print("❌ ERROR:", e)
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/plans/{user_id}")
async def get_user_plans(user_id: str):
    try:
        response = supabaseClient.table("marketing_plans")\
            .select("*, businesses(*)")\
            .eq("user_id", user_id)\
            .order("created_at", desc=True)\
            .execute()

        return {"plans": response.data}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
 



 
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=5001, reload=True)
