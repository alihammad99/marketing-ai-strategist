export interface BusinessInput {
  name: string;
  industry: string;
  description: string;
  target_audience: string;
  budget?: string;
  goals: string;
  language: 'en' | 'ar';
}

export interface MarketingPlan {
  id: string;
  business_id: string;
  original_plan: string;
  translated_plan?: string;
  improved_plan?: string;
  language: string;
  status: string;
  created_at: string;
  businesses?: {
    name: string;
    industry: string;
  };
}
