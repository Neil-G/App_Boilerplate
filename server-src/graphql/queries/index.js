exports.example = require('./example');
var graphql = require ('graphql');
var todos = require('./example')



var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      todos
    }
  }
});

module.exports = queryType;
