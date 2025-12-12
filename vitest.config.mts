import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{js,jsx,ts,tsx}'],
    },
    include: ['src/**/*.test.{js,ts,tsx}'],
    exclude: ['src/hooks/**/*.test.ts'],
    environment: 'node',
    env: loadEnv('', process.cwd(), ''),
  },
});
