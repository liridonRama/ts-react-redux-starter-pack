import axios from "axios";
import { Dispatch } from "redux"
import { ACTION_TYPES } from './types';

const url = "https://jsonplaceholder.typicode.com/todos";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


export interface FetchTodosAction {
  type: ACTION_TYPES.FETCH_TODOS;
  payload: Todo[];
}


export interface DeleteTodoAction {
  type: ACTION_TYPES.DELETE_TODO;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosAction>) => {
    const response = await axios.get<Todo[]>(url);

    dispatch({
      type: ACTION_TYPES.FETCH_TODOS,
      payload: response.data
    })
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ACTION_TYPES.DELETE_TODO,
    payload: id,
  }
}