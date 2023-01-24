import axios from "axios";
import { Todo1, TodoDto } from "../interfaces/Todo1";

export const getAllTodos = async (): Promise<Todo1[]> => {
  const response = await axios.get("http://127.0.0.1:8000/api/todos/");
  const status = response.status;
  console.log("DEBUG:");
  console.log("    GET STATUS:", status);
  console.log(response.data);
  return response.data.todos;
};

export const getTodo = async (id: number): Promise<Todo1> => {
  const response = await axios.get(`/Todo/${id}`);
  const status = response.status;
  console.log("DEBUG:");
  console.log("    GET STATUS:", status);
  return response.data;
};

export const createTodo = async (data: TodoDto): Promise<number> => {
  const response = await axios.post("/Todo", data);
  const status = response.status;
  console.log("DEBUG:");
  console.log("    CREATE STATUS:", status);
  return status;
};

export const updateTodo = async (
  id: number,
  data: TodoDto
): Promise<number> => {
  const response = await axios.put(`/Todo/${id}`, data);
  const status = response.status;
  console.log("DEBUG:");
  console.log("    UPDATE STATUS:", status);
  return status;
};

export const deleteTodo = async (id: number): Promise<number> => {
  const response = await axios.delete(`/Todo/${id}`);
  const status = response.status;
  console.log("DEBUG:");
  console.log("    DELETE STATUS:", status);
  return status;
};
