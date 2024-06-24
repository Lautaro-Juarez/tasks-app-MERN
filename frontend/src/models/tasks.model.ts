export interface Task {
  _id: string;
  title: string;
  description?: string;
  done?: boolean;
  createdAt?: Date;
  updateAt?: Date;
}
export type CreateTask = Pick<Task, 'title' | 'description' | 'done'>

export type UpdateTask = Partial<CreateTask>