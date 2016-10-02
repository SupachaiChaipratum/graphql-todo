//import data

import {
  // GraphQL types
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLNonNull,

  //create the schema
  GraphQLSchema
} from 'graphql';


const Query = new GraphQLObjectType({
  name: 'TodoSchema',
  description: 'Root Schema',
  fields: () => ({
    hello: {
      type: GraphQLString,
      description: 'say hello your name',
      args: {
        name: {type: GraphQLString}
      },
      resolve: function(root, {name}) {
        return `hello ${name}` ;
      }
    }
  })
});

// The Schema
const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
