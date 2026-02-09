import type { Todo, TodoFilter } from '../types';

export function filterTodos(todos: Todo[], filter: TodoFilter): Todo[] {
  switch (filter) {
    case 'active':
      return todos.filter(todo => todo.status === 'active');
    case 'completed':
      return todos.filter(todo => todo.status === 'completed');
    case 'all':
    default:
      return todos;
  }
}

export function getTodoStats(todos: Todo[]) {
  return {
    total: todos.length,
    active: todos.filter(todo => todo.status === 'active').length,
    completed: todos.filter(todo => todo.status === 'completed').length,
  };
}

export function sortTodosByDate(todos: Todo[], order: 'asc' | 'desc' = 'desc'): Todo[] {
  return [...todos].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
}
