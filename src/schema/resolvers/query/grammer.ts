import { Configuration, OpenAIApi } from "openai";

export const correctGrammer = async (_: any, args: any, context: any) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Correct this to standard" + args.language + ": " + args.sentence,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  return completion.data.choices[0].text?.trim();
};
