
import { Todo, ACTION_TYPES, Action } from "../actions"


export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_TODOS:
      return action.payload;
    case ACTION_TYPES.DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
}