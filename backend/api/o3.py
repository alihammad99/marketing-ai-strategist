import os
from openai import OpenAI
from dotenv import load_dotenv
from .class_list import BusinessInput
from .prompt import generatePrompt

load_dotenv()

endpoint = "https://alire-miac7e5t-eastus2.cognitiveservices.azure.com/openai/v1"
deployment_name = "o3-mini"
api_key = os.getenv("AZURE_API_KEY", "")
 
client = OpenAI(
    base_url=endpoint,
    api_key=api_key
)


def generateCloudPlan(business: BusinessInput):
    prompt = generatePrompt(business)

    completion = client.chat.completions.create(
        model=deployment_name,
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
    )

    result = completion.choices[0].message.content

    print(result)
    return result