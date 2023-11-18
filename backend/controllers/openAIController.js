import openai  from "../config/openAIConfig.js";
  
export const getMessages = async (message)=>{
    try {
       
       const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Hallo' }],
        model: 'gpt-3.5-turbo',
        max_tokens:100
      });
        console.log(chatCompletion);
    } catch (error) {
        console.log(error);
    }
 }