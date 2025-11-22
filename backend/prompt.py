from class_list import BusinessInput

def generatePrompt(business: BusinessInput):
    prompt = f"""
### Instruction:
Create a comprehensive and highly detailed marketing strategy for the given business. 
The response must be structured, professional, and actionable.

### Input:
Business Name: {business.name}
Industry: {business.industry}
Description: {business.description}
Target Audience: {business.target_audience}
Budget: {business.budget or 'Not specified'}
Goals: {business.goals}

### Output:
Provide a full marketing plan with the following sections:

1. Market Analysis  
2. Target Audience Insights  
3. Marketing Channels Strategy  
4. Content Strategy  
5. Budget Allocation  
6. Timeline and Milestones  
7. KPIs and Success Metrics  
8. Implementation Plan  
9. Risk Assessment  
10. Conclusion  

Make each section clear, structured, and data-backed when possible.
"""
    return prompt.strip()
