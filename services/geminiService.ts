import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// Note: In a real app, ensure API_KEY is handled securely. 
// For this demo, we assume the environment variable is injected.

const ai = new GoogleGenAI({ apiKey });

export const getCreativeSuggestion = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: Connect API Key for AI suggestions.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      You are "Akhra AI", a helpful, friendly, and creative assistant for a Bangladeshi stationery shop named "Akhra Stationery".
      The user is asking: "${userQuery}".
      
      Your tone should be:
      - Warm and encouraging (like a study buddy).
      - Relevant to students, artists, and exam-takers.
      - Suggest specific types of stationery items (notebooks, pens, paints) that might help them.
      - Keep it short (max 3 sentences).
      - You can use a mix of Bangla and English (Banglish) or pure Bangla if the query implies it, but English is safe.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "দুঃখিত, এখন উত্তর দিতে পারছি না। একটু পরে আবার চেষ্টা করুন।";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "নেটওয়ার্ক সমস্যার কারণে সংযোগ করা যাচ্ছে না।";
  }
};