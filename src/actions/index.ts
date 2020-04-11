import axios from 'axios';
import {Dispatch} from  'redux';
import { ActionTypes } from './types';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}
const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchToDos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo[]>(url);

    dispatch({
      type: ActionTypes.fetchToDos,
      payload: response.data
    })
  }

}