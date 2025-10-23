
import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateStory(parentStory: string): Promise<string> {
  const model = 'gemini-2.5-flash';
  const prompt = `다음은 아빠가 아이의 그림을 보고 쓴 글입니다. 이 글을 5~7세 아이가 이해하기 쉽고, 따뜻하고 상상력을 자극하는 아름다운 동화 문체로 다듬어 주세요. 원본의 핵심 내용은 유지하되, 더욱 풍부하고 서정적인 표현을 사용해 주세요.

--- 원본 글 ---
${parentStory}
---

동화로 다듬은 글:`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating story with Gemini:", error);
    throw new Error("Failed to generate story from Gemini API.");
  }
}
