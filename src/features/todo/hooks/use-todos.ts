'use client';

import type { CreateTodoInput, Todo, TodoFilter, UpdateTodoInput } from '../types';
import { useCallback, useState } from 'react';
import { filterTodos, getTodoStats } from '../utils/todo-helpers';

export function useTodos(initialTodos: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<TodoFilter>('all');

  const addTodo = useCallback((input: CreateTodoInput) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: input.title,
      description: input.description,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
  }, []);

  const updateTodo = useCallback((input: UpdateTodoInput) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === input.id
          ? {
              ...todo,
              ...input,
              updatedAt: new Date(),
            }
          : todo,
      ),
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const toggleTodoStatus = useCallback((id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'active' ? 'completed' : 'active',
              updatedAt: new Date(),
            }
          : todo,
      ),
    );
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos(prev => prev.filter(todo => todo.status === 'active'));
  }, []);

  const filteredTodos = filterTodos(todos, filter);
  const stats = getTodoStats(todos);

  return {
    todos: filteredTodos,
    allTodos: todos,
    filter,
    stats,
    setFilter,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoStatus,
    clearCompleted,
  };
}
