const { Configuration, OpenAIApi } = require("openai");

export const context = async (_: any, args: any, context: any) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
      translate this word with its all diverse meanings into ${args.outputLanguage}: ${args.word}

      and than make ${args.inputLanguage}-${args.outputLanguage} sentence pairs with its meanings.
      
      make them a json object with this structure: 
      {
        meaning: in ${args.outputLanguage},
        example sentence of this meaning: in ${args.inputLanguage},
        example sentence of this meaning: in ${args.outputLanguage}
      }
            `,
      temperature: 0.3,
      max_tokens: 500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(response.data.choices[0].text?.trim());
    return response.data.choices[0].text?.trim();
  } catch (error) {
    return error;
  }
};
