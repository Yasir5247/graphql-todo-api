import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

import { inMememoryTodoRepo } from './modules/todos/repos';
import { TodoRepo } from './modules/todos/repos/todoRepo';

export type Context = { inMememoryTodoRepo: TodoRepo }

const server = new ApolloServer({
  context: () => ({ inMememoryTodoRepo } as Context),
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
