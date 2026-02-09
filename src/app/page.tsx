import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Next.js Feature-Based Template',
  description: 'A production-ready Next.js template with feature-based architecture, TypeScript, Tailwind CSS, and best practices.',
};

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Next.js Feature-Based Template
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Production-ready boilerplate with clean architecture and developer-friendly structure
        </p>
      </div>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">What&apos;s Included</CardTitle>
          <CardDescription>Everything you need to build a modern web application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                🏗️ Feature-Based Architecture
              </h3>
              <p className="text-sm text-gray-600">
                Organized by features, not by file types. Each feature is self-contained with its own components, hooks, types, and utilities.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                ⚡ Modern Tech Stack
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Next.js 16 (App Router)</li>
                <li>• TypeScript (Strict mode)</li>
                <li>• Tailwind CSS v4</li>
                <li>• shadcn/ui Components</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                🔧 Developer Tools
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• ESLint + Prettier</li>
                <li>• Vitest (Testing)</li>
                <li>• Lefthook (Git hooks)</li>
                <li>• TypeScript strict mode</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                🎨 UI Components
              </h3>
              <p className="text-sm text-gray-600">
                Pre-configured shadcn/ui components for rapid development. Clean, accessible, and customizable.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Quick Start Guide</CardTitle>
          <CardDescription>Get started building your application in 3 simple steps</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">1. Create a Feature</h3>
            <div className="rounded-md bg-gray-100 p-3">
              <code className="text-sm">src/features/my-feature/</code>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Organize your code by domain/feature. Keep related code together.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">2. Add a Page</h3>
            <div className="rounded-md bg-gray-100 p-3">
              <code className="text-sm">src/app/my-page/page.tsx</code>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Create pages in the app router that use your features.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">3. Build Your App</h3>
            <p className="mt-2 text-sm text-gray-600">
              Import and use your features anywhere in your application.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Example Feature */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Example Feature</CardTitle>
          <CardDescription>
            See a complete example of the feature-based architecture in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold">📝 Todo Feature</h3>
              <p className="mb-4 text-sm text-gray-600">
                A fully-functional Todo List demonstrating components, hooks, types, and utilities organized in a feature.
              </p>
              <Link href="/todos">
                <Button size="lg">
                  View Todo Example →
                </Button>
              </Link>
            </div>

            <div className="text-sm text-gray-600">
              <p className="font-semibold">Feature Structure:</p>
              <ul className="mt-2 space-y-1">
                <li>• components/ - React components</li>
                <li>• hooks/ - Custom hooks</li>
                <li>• types/ - TypeScript types</li>
                <li>• utils/ - Helper functions</li>
                <li>• index.ts - Public API exports</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documentation Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Documentation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <a
              href="/src/features/README.md"
              className="rounded-lg border p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
            >
              <h3 className="font-semibold">📚 Features Guide</h3>
              <p className="mt-1 text-sm text-gray-600">
                Learn how to create and organize features
              </p>
            </a>
            <a
              href="/CLAUDE.md"
              className="rounded-lg border p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
            >
              <h3 className="font-semibold">🤖 CLAUDE.md</h3>
              <p className="mt-1 text-sm text-gray-600">
                Architecture and development guide
              </p>
            </a>
            <a
              href="/README.md"
              className="rounded-lg border p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
            >
              <h3 className="font-semibold">📖 README</h3>
              <p className="mt-1 text-sm text-gray-600">
                Project overview and setup instructions
              </p>
            </a>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
            >
              <h3 className="font-semibold">🎨 shadcn/ui Docs</h3>
              <p className="mt-1 text-sm text-gray-600">
                UI component library documentation
              </p>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Get Started CTA */}
      <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Build?</h2>
        <p className="mt-2 text-lg opacity-90">
          Start by exploring the example or dive into the documentation
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/todos">
            <Button size="lg" variant="secondary">
              View Todo Example
            </Button>
          </Link>
          <a
            href="https://github.com/ixartz/Next-js-Boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600">
              GitHub →
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
