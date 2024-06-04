/* AIzaSyDTiMhdanoRzUHmHVanuK_a61Nup8I7cU0 */

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const API_KEY = "AIzaSyDTiMhdanoRzUHmHVanuK_a61Nup8I7cU0"
const genAI = new GoogleGenerativeAI(API_KEY);

async function run(prompt) {
  
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text
}

export default run;

