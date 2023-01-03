const { Configuration, OpenAIApi } = require("openai");

export const translate = async (_: any, args: any, context: any) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Translate this into" + args.language + ":" + args.text,
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    return response.data.choices[0].text?.trim();
  } catch (error) {
    return error;
  }
};
