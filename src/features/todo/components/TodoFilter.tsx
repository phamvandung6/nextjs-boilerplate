'use client';

import type { TodoFilter as TodoFilterType } from '../types';
import { Button } from '@/components/ui/button';

type TodoFilterProps = {
  currentFilter: TodoFilterType;
  onFilterChange: (filter: TodoFilterType) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
};

export function TodoFilter({
  currentFilter,
  onFilterChange,
  stats,
  onClearCompleted,
}: TodoFilterProps) {
  const filters: Array<{ value: TodoFilterType; label: string }> = [
    { value: 'all', label: `All (${stats.total})` },
    { value: 'active', label: `Active (${stats.active})` },
    { value: 'completed', label: `Completed (${stats.completed})` },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {filters.map(filter => (
          <Button
            key={filter.value}
            variant={currentFilter === filter.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </Button>
        ))}
      </div>
      {stats.completed > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearCompleted}
          className="text-red-600 hover:text-red-700"
        >
          Clear Completed
        </Button>
      )}
    </div>
  );
}
