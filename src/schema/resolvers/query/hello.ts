import openai from "openai-node";

openai.api_key = "YOUR API KEY"; // required

export const hello = (_: any, args: any, context: any) => {
  return "hello world!";
};
