import { OPENAI_API_KEY } from "../config/config.js";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, 
});

export const getMessages = async (message)=>{
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-1106',
            messages: [{ role: 'user', content: 'Say this is a test' }],
          });
        console.log(chatCompletion);
    } catch (error) {
        console.log(error);
    }
 }
