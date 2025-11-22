from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from main import app as fastapi_app
from mangum import Mangum

handler = Mangum(fastapi_app)
