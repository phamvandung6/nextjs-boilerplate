import type { Metadata } from 'next';
import { TodoList } from '@/features/todo';

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'Manage your tasks with this simple todo list',
};

export default function TodosPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Todo List</h1>
      <p className="mt-2 text-gray-600">
        A simple feature-based todo list example
      </p>

      <div className="mt-8">
        <TodoList />
      </div>
    </>
  );
}
