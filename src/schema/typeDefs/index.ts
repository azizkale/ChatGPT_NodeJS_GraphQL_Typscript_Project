export const typeDefs = `
type Query {
    chat(question:String) : String
    correctGrammer(language: String, sentence: String): String
    translate(text:String, language:String):String
    context(word:String , inputLanguage: String, outputLanguage:String): String
}
`;
