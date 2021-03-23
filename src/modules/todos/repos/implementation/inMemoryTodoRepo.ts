import { Todo } from '../../../../generated/graphql';
import { TodoRepo } from '../todoRepo';


export class InMememoryTodoRepo implements TodoRepo {

    private todos: Todo[] = [
        { id: 1, text: "Getting started", completed: false },
        { id: 2, text: "Second todo", completed: false },
        { id: 3, text: "Third todo", completed: false },
    ]

    private lastTodoId: number = this.todos.length;

    constructor () {}

    public async addTodo(text: string): Promise<void> {
        if(text.length < 3) throw new Error("Todos needs to be longer than 3 characters.")
        this.lastTodoId++;
        this.todos.push({ id: this.lastTodoId, text, completed: false });
        console.log('New todo list', this.todos);
    }

    public async getLastTodo(): Promise<Todo> {
        return this.todos[this.todos.length -1];
    }

}