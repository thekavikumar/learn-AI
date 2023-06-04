import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Configuration, OpenAIApi } from "openai";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getData = async (uri: string) => {
  const response = await axios.get(uri, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${process.env.LEARNAI_API_KEY}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = response.data;
  return data;
};

export const gptChatCompletion = async (prompt: string) => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_GPT_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  return completion.data.choices[0].message;
};

export const dollyChat = async (prompt: string) => {
  const response = await axios.post(`http://127.0.0.1:8000/dolly/${prompt}`);
  return response.data;
};

export const imageCreate = async (prompt: string) => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_GPT_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  });
  return response.data.data[0].url;
};

export const flanQuestion = async (prompt: string) => {
  const response = await axios.post(`http://127.0.0.1:8000/googleFlan/${prompt}`);
  return response.data;
}