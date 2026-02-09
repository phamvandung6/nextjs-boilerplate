# Features

This directory contains feature-based modules organized by domain/functionality.

## Structure

Each feature follows this structure:

```
features/
└── [feature-name]/
    ├── components/     # Feature-specific React components
    ├── hooks/          # Feature-specific custom hooks
    ├── types/          # Feature-specific TypeScript types
    ├── utils/          # Feature-specific utility functions
    ├── api/            # Feature-specific API calls (optional)
    ├── constants/      # Feature-specific constants (optional)
    └── index.ts        # Public API - exports everything the feature exposes
```

## Benefits of Feature-Based Architecture

1. **Encapsulation**: Each feature is self-contained with its own components, logic, and types
2. **Scalability**: Easy to add new features without affecting existing ones
3. **Maintainability**: Related code is grouped together, making it easier to understand and modify
4. **Reusability**: Features can be easily moved between projects
5. **Team Collaboration**: Different teams can work on different features independently

## Guidelines

### 1. Keep Features Independent
- Features should not directly import from other features
- Use shared utilities from `/libs` or `/utils` for common functionality
- Pass data between features through props or context

### 2. Export Through index.ts
- Always export public APIs through the `index.ts` file
- Keep internal implementation details private
- Use named exports for better tree-shaking

### 3. Component Organization
- Put feature-specific components in `components/`
- Shared components go in `/src/components/`
- UI components (shadcn/ui) go in `/src/components/ui/`

### 4. Type Safety
- Define all types in the `types/` directory
- Export types through `index.ts`
- Use strict TypeScript configuration

## Example: Todo Feature

```typescript
// Using the todo feature in a page
import { TodoList, type Todo } from '@/features/todo';

export default function TodosPage() {
  return <TodoList />;
}
```

## Creating a New Feature

1. Create the feature directory:
   ```bash
   mkdir -p src/features/my-feature/{components,hooks,types,utils}
   ```

2. Define types in `types/index.ts`

3. Create components in `components/`

4. Create custom hooks in `hooks/`

5. Create the public API in `index.ts`:
   ```typescript
   // Components
   export { MyFeatureComponent } from './components/MyFeatureComponent';

   // Hooks
   export { useMyFeature } from './hooks/use-my-feature';

   // Types
   export type { MyFeatureType } from './types';
   ```

6. Use the feature in your app:
   ```typescript
   import { MyFeatureComponent } from '@/features/my-feature';
   ```
