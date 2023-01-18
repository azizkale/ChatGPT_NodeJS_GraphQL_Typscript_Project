import { Configuration, OpenAIApi } from "openai";

export const chat = async (_: any, args: any, context: any) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const completion = openai.createCompletion({
    model: "text-davinci-003",
    prompt: "\n\nHuman :" + args.question + "\n\nAI:",
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  });

  let theAnswer;
  await completion.then(async (r) => {
    theAnswer = await r.data.choices[0].text;
  });

  return theAnswer;
};
