import {
    AddTodoResult
} from './generated/graphql';

import { Context } from './index';

export const resolvers = {

    Mutation: {
        addTodo: async (_, { text }, context: Context): Promise<AddTodoResult> => {
            const { inMememoryTodoRepo  } = context;
            
            try {

                await inMememoryTodoRepo.addTodo(text);
                const todo = await inMememoryTodoRepo.getLastTodo();
                return { success: true, todo }
                
            } catch (err) {
                return { success: false, error: { message: 'To do must be greater than 3 chars'} }
            }
        },
    },
    Query: {
        todo: async (_, { id }, context) => {
            return null;
        },
    }

}