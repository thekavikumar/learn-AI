import os
from fastapi import FastAPI
from langchain.llms import OpenAI
from langchain import HuggingFaceHub, LLMChain
from fastapi.middleware.cors import CORSMiddleware


openai_api_key = "YOUR_API_KEY_HERE"

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
    "http://localhost:8000",
    "localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


os.environ['HUGGINGFACEHUB_API_TOKEN'] = 'YOUR_API_TOKEN_HERE'


@app.post("/dolly/{text}")
async def llm(text: str):
    llm = OpenAI(model_name='text-davinci-003', openai_api_key=openai_api_key)
    return {"message": llm(text)}


@app.post("/googleFlan/{text}")
async def llm(text: str):
    hub_llm = HuggingFaceHub(
        repo_id='google/flan-t5-xl',
        model_kwargs={'temperature': 1e-10}
    )
    llm_chain = LLMChain(
        prompt=text,
        llm=hub_llm
    )
    return {"message": llm_chain.generate()}
