'use client';

import type { Todo } from '../types';
import { useTodos } from '../hooks/use-todos';
import { TodoFilter } from './TodoFilter';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  initialTodos?: Todo[];
};

const EMPTY_TODOS: Todo[] = [];

export function TodoList({ initialTodos = EMPTY_TODOS }: TodoListProps) {
  const {
    todos,
    filter,
    stats,
    setFilter,
    addTodo,
    toggleTodoStatus,
    deleteTodo,
    clearCompleted,
  } = useTodos(initialTodos);

  return (
    <div className="space-y-6">
      <TodoForm onSubmit={addTodo} />

      <TodoFilter
        currentFilter={filter}
        onFilterChange={setFilter}
        stats={stats}
        onClearCompleted={clearCompleted}
      />

      <div className="space-y-3">
        {todos.length === 0
          ? (
              <p className="py-8 text-center text-gray-500">
                {filter === 'all'
                  ? 'No todos yet. Add one above!'
                  : `No ${filter} todos.`}
              </p>
            )
          : (
              todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodoStatus}
                  onDelete={deleteTodo}
                />
              ))
            )}
      </div>
    </div>
  );
}
