import { FetchTodosAction, DeleteTodoAction } from "./"

export enum ACTION_TYPES {
  FETCH_TODOS,
  DELETE_TODO
}

export type Action =
  FetchTodosAction |
  DeleteTodoAction;