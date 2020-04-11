import { ToDo, FetchTodosAction, ActionTypes } from '../actions';

export const todosReducer = (
    state: ToDo[] = [], 
    action: FetchTodosAction
  ) => {  
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default: 
      return state;
  }
}
