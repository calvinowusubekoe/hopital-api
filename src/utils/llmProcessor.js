import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Extract actionable steps from the note content
export const extractActionableSteps = async (content) => {
  const prompt = `
    Extract actionable steps from the following note. Divide them into:
    1. Checklist: Immediate one-time tasks (e.g., "buy a drug").
    2. Plan: A schedule of actions (e.g., "take the drug daily for 7 days").

    Note: ${content}

    Return the response in JSON format:
    {
      "checklist": ["task1", "task2"],
      "plan": [
        { "task": "task1", "schedule": "2023-10-30T09:00:00Z" },
        { "task": "task2", "schedule": "2023-10-31T09:00:00Z" }
      ]
    }
  `;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 500,
  });

  const result = JSON.parse(response.choices[0].message.content);
  return result;
};