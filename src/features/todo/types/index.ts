export type TodoStatus = 'active' | 'completed';

export type TodoFilter = 'all' | 'active' | 'completed';

export type Todo = {
  id: string;
  title: string;
  description?: string;
  status: TodoStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateTodoInput = {
  title: string;
  description?: string;
};

export type UpdateTodoInput = {
  id: string;
  title?: string;
  description?: string;
  status?: TodoStatus;
};
