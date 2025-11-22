import os
import torch
from transformers import pipeline, AutoModelForCausalLM, AutoTokenizer
from .prompt import generatePrompt
from .class_list import BusinessInput

# Use all CPU threads
torch.set_num_threads(os.cpu_count())
os.environ["OMP_NUM_THREADS"] = str(os.cpu_count())
os.environ["MKL_NUM_THREADS"] = str(os.cpu_count())

# Load model and tokenizer (CPU only)
model_name = "seedgularity/NazareAI-Senior-Marketing-Strategist"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    device_map="auto"  # CPU
)

# Optional: compile for PyTorch 2.1+ CPU speedup
model = torch.compile(model)

# Pipeline
pipe = pipeline("text-generation", model=model, tokenizer=tokenizer)

# Generate function
def generatePlan(business: BusinessInput):
    prompt = generatePrompt(business)

    result = pipe(
        prompt,
        max_new_tokens=800,  # adjust length for speed
        do_sample=False       # deterministic, fastest on CPU
    )

    full = result[0]["generated_text"]
    ai_text = full.split("### Output:")[-1].strip()
    return ai_text
