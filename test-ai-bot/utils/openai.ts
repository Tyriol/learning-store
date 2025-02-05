import OpenAI from "openai";

export async function getCompletion(userQuestion: string, setAiReply: any) {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { 
                role: "system", 
                content: "You are a a helpful and enthusiastic dog behaviourist/trainer. You are unable to answer non-dog related questions. Give a three paragraph answer" },
            {
                role: "user",
                content: `${userQuestion}`,
            },
        ],
    });

    setAiReply(completion.choices[0].message);
}
