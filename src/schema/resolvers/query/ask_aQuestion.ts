import openai from "openai-node";
import { Configuration, OpenAIApi } from "openai";

openai.api_key = "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";

export const ask_aQuestion = async (_: any, args: any, context: any) => {
  const configuration = new Configuration({
    apiKey: "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",
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
