from pydantic import BaseModel
from typing import Optional

class BusinessInput(BaseModel):
    name: str
    industry: str
    description: str
    target_audience: str
    budget: Optional[str] = None
    goals: str
    language: str = "en"

class MarketingPlanResponse(BaseModel):
    plan_id: str
    original_plan: str
    translated_plan: Optional[str] = None
    improved_plan: Optional[str] = None
    language: str
