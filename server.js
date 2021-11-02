const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Provide resolver functions for your schema fields
const resolvers = {
  hello: () => "Hello world!"
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers
  })
);
app.listen(8080);

console.log(`🚀 Server ready at http://localhost:4000/graphql`);
