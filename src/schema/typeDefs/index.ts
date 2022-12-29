export const typeDefs = `
type Query {
    ask_aQuestion(question:String) : String
    correctGrammer(sentence: String): String
}
`;
