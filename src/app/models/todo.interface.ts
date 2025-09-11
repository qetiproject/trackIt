export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodoResultData {
    limit: number;
    skip: number;
    total: number;
    todos: Todo[];
}