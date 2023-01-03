export const typeDefs = `
type Query {
    chat(question:String) : String
    correctGrammer(language: String, sentence: String): String
}
`;
