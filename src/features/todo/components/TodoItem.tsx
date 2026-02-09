'use client';

import type { Todo } from '../types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <Card className={todo.status === 'completed' ? 'opacity-60' : ''}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-1 items-start gap-3">
            <input
              type="checkbox"
              checked={todo.status === 'completed'}
              onChange={() => onToggle(todo.id)}
              className="mt-1 size-5 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex-1">
              <CardTitle
                className={`text-lg ${
                  todo.status === 'completed' ? 'line-through' : ''
                }`}
              >
                {todo.title}
              </CardTitle>
              {todo.description && (
                <CardDescription className="mt-1">
                  {todo.description}
                </CardDescription>
              )}
            </div>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-gray-500">
          Created:
          {' '}
          {new Date(todo.createdAt).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
}
