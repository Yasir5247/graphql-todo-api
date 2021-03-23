
import { Todo } from "../../../generated/graphql";


export interface TodoRepo {
    addTodo(text: string): Promise<void>,
    getLastTodo(): Promise<Todo>
}