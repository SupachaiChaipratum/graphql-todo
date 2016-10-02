import TodosList from './data/todos';

import {
  // GraphQL types
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLBoolean,
  GraphQLNonNull,

  //for create the schema
  GraphQLSchema
} from 'graphql';

const Todo = new GraphQLObjectType({
  name: "Todo",
  description: "Todo list",
  fields: () => ({
    _id: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    completed: {type: GraphQLBoolean}
  })
});


// This is the Root Query
const Query = new GraphQLObjectType({
  name: 'TodoSchema',
  description: "Root Schema",
  fields: () => ({
    todos: {
      type: new GraphQLList(Todo),
      resolve: function() {
        return TodosList;
      }
    }
  })
});

// This the Schema
const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
