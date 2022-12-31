export const typeDefs = `
type Query {
    ask_aQuestion(question:String) : String
    correctGrammer(language: String, sentence: String): String
}
`;
