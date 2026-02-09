# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 boilerplate with internationalization (i18n), TypeScript, Tailwind CSS, and shadcn/ui components. The project uses the App Router with a locale-based routing structure.

## Development Commands

### Running the application
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run build-stats` - Build with bundle analyzer

### Testing and quality checks
- `npm test` - Run Vitest tests
- `npm run lint` - Lint codebase
- `npm run lint:fix` - Auto-fix linting issues
- `npm run check:types` - Type-check with TypeScript
- `npm run check:deps` - Check for unused dependencies with knip
- `npm run check:i18n` - Validate i18n translations

### Utilities
- `npm run clean` - Remove build artifacts (.next, out, coverage)
- `npm run commit` - Interactive commit using commitlint

## Architecture

### Feature-Based Architecture
- Project uses feature-based organization in `src/features/`
- Each feature is self-contained with its own components, hooks, types, and utils
- Features export public APIs through `index.ts` files
- Import features using: `import { Component } from '@/features/feature-name'`
- See `src/features/README.md` for detailed guidelines and examples

### Routing Structure
- Uses Next.js App Router with locale-based routing: `app/[locale]/(marketing)/`
- Route groups like `(marketing)` organize pages without affecting URL structure
- All pages must be wrapped in locale parameter for i18n

### Internationalization (i18n)
- Uses `next-intl` for translations
- Configuration: `src/libs/I18n.ts`, `src/libs/I18nRouting.ts`, `src/libs/I18nNavigation.ts`
- Supported locales defined in `src/utils/AppConfig.ts` (default: 'en', 'fr')
- Translation files: `src/locales/[locale].json`
- Locale prefix mode: 'as-needed' (default locale has no prefix)

### Environment Variables
- Validated using `@t3-oss/env-nextjs` with Zod schemas in `src/libs/Env.ts`
- Sensitive values should go in `.env.local` (not tracked by Git)
- Server-side: `ARCJET_KEY`
- Client-side: `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN`, etc.

### Component Organization
- `src/features/[feature-name]/components/` - Feature-specific components
- `src/components/` - Shared React components (used across features)
- `src/components/ui/` - shadcn/ui components (configured via `components.json`)
- shadcn/ui uses "new-york" style with Tailwind CSS variables
- Follow feature-based structure: keep related code together in feature folders

### Path Aliases
- `@/*` → `src/*`
- `@/public/*` → `public/*`
- Components: `@/components`
- UI components: `@/components/ui`
- Utils: `@/libs/utils`
- Libs: `@/libs`

### Styling
- Tailwind CSS 4.x with PostCSS
- Global styles: `src/styles/global.css`
- Uses `clsx` and `tailwind-merge` via `cn()` utility in `src/libs/utils.ts`
- Animation library: `tw-animate-css`

### Logging & Monitoring
- Logger: LogTape configured in `src/libs/Logger.ts`
- Error tracking: Sentry (configured in `src/instrumentation.ts` and `next.config.ts`)
- Security: Arcjet (configured in `src/libs/Arcjet.ts`)
- Sentry can be disabled with `NEXT_PUBLIC_SENTRY_DISABLED` env var

### Testing
- Test framework: Vitest
- Configuration: `vitest.config.mts`
- Test location: `src/**/*.test.{js,ts,tsx}`
- Excludes: `src/hooks/**/*.test.ts`
- Coverage includes `src/**/*` excluding stories

### TypeScript Configuration
- Strict mode enabled with comprehensive type safety rules
- `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters` enabled
- JSX: uses React automatic runtime (`react-jsx`)
- Path resolution: bundler mode

### Code Quality
- ESLint: Uses `@antfu/eslint-config` with React, Next.js, and TypeScript support
- Config file: `eslint.config.mjs`
- Custom rules: prefer `type` over `interface`, 1TBS brace style
- Tailwind CSS linting enabled
- Accessibility: `eslint-plugin-jsx-a11y` included
- Git hooks: Managed by lefthook (see `lefthook.yml`)
  - Pre-commit: Auto-fix linting and type-check
  - Commit-msg: Validate with commitlint

### Commits
- Uses conventional commits (enforced by commitlint)
- Config: `commitlint.config.ts`
- Semantic release configured for `main` branch

## Key Files to Modify

### Adding new locales
1. Update `src/utils/AppConfig.ts` - add locale to `locales` array
2. Create `src/locales/[locale].json` with translations
3. Update `src/libs/I18nRouting.ts` if needed

### Adding environment variables
1. Add validation schema to `src/libs/Env.ts`
2. Add to `runtimeEnv` object in same file
3. Document in `.env` file

### Adding shadcn/ui components
- Use the shadcn CLI: `npx shadcn@latest add [component]`
- Components are added to `src/components/ui/`
- Configuration: `components.json`

### Creating new pages
- Add to `src/app/[locale]/` or appropriate route group
- Must handle locale parameter in Server Components
- Use `setRequestLocale(locale)` for static pages
- Import translations via `useTranslations()` from next-intl

## Next.js Features

### Optimizations
- React Compiler enabled (`reactCompiler: true`)
- Turbopack file system cache for dev mode
- React Strict Mode enabled
- Powered by header disabled

### Plugins
- Bundle analyzer: triggered with `ANALYZE=true`
- Sentry: automatic error tracking and performance monitoring
- next-intl: handles i18n routing and message loading

## Node Requirements

- Node.js >=20 required (specified in `package.json`)
