import { gql } from "apollo-server";

export const typeDefs = gql`

    type Todo {
        id: Int!
        text: String! 
        completed: Boolean!
    }

    type TodoValidationError {
        message: String!
    }

    type AddTodoResult {
        success: Boolean!
        todo: Todo
        error: TodoValidationError
    }

    type Query {
        todo (id: Int!): Todo!
    }

    type Mutation {
        addTodo (text: String!): AddTodoResult!
    }

`;