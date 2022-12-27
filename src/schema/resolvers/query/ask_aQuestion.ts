import { Configuration, OpenAIApi } from "openai";

export const ask_aQuestion = async (_: any, args: any, context: any) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const completion = openai.createCompletion({
    model: "text-davinci-003",
    prompt: args.question,
    max_tokens: 1000,
  });

  let theAnswer;
  await completion.then(async (r) => {
    theAnswer = await r.data.choices[0].text;
    console.info(r.data.choices[0].text);
  });

  return theAnswer;
};
