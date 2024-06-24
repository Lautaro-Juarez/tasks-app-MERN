import { CreateTask, UpdateTask } from "../models/tasks.model";

const API = "http://localhost:3000/api";

export const createTaskApi = async (task: CreateTask) => {
  return fetch(`${API}/tasks`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getTasksApi = async () => {
  return fetch(`${API}/tasks`);
};

export const deleteTaskApi = async (id: string) => {
  return fetch(`${API}/tasks/${id}`, {
    method: "DELETE",
  });
};
export const updateTaskApi = async (id: string, task: UpdateTask) =>
  fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
