var graphql = require ('graphql');
var exampleQuery = require('./queries');
var MutationType = require('./mutations');

module.exports = new graphql.GraphQLSchema({
  query: exampleQuery,
  mutation: MutationType
});
