import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          {t('welcome_title')}
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          {t('welcome_subtitle')}
        </p>
      </div>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('features_title')}</CardTitle>
          <CardDescription>{t('features_description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                🏗️
                {t('architecture_title')}
              </h3>
              <p className="text-sm text-gray-600">{t('architecture_description')}</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">
                ⚡
                {t('tech_stack_title')}
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
                🔧
                {t('dev_tools_title')}
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
                🌍
                {t('i18n_title')}
              </h3>
              <p className="text-sm text-gray-600">{t('i18n_description')}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('quick_start_title')}</CardTitle>
          <CardDescription>{t('quick_start_description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">
              1.
              {t('step_1_title')}
            </h3>
            <div className="rounded-md bg-gray-100 p-3">
              <code className="text-sm">src/features/my-feature/</code>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('step_1_description')}</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">
              2.
              {t('step_2_title')}
            </h3>
            <div className="rounded-md bg-gray-100 p-3">
              <code className="text-sm">src/app/[locale]/(marketing)/my-page/page.tsx</code>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('step_2_description')}</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">
              3.
              {t('step_3_title')}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{t('step_3_description')}</p>
          </div>
        </CardContent>
      </Card>

      {/* Example Feature */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('example_title')}</CardTitle>
          <CardDescription>{t('example_description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold">📝 Todo Feature</h3>
              <p className="mb-4 text-sm text-gray-600">
                {t('todo_example_description')}
              </p>
              <Link href="/todos">
                <Button size="lg">
                  {t('view_example_button')}
                  {' '}
                  →
                </Button>
              </Link>
            </div>

            <div className="text-sm text-gray-600">
              <p className="font-semibold">{t('feature_structure_title')}</p>
              <ul className="mt-2 space-y-1">
                <li>
                  • components/ -
                  {t('components_desc')}
                </li>
                <li>
                  • hooks/ -
                  {t('hooks_desc')}
                </li>
                <li>
                  • types/ -
                  {t('types_desc')}
                </li>
                <li>
                  • utils/ -
                  {t('utils_desc')}
                </li>
                <li>
                  • index.ts -
                  {t('index_desc')}
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documentation Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('documentation_title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <a
              href="/src/features/README.md"
              className="rounded-lg border p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
            >
              <h3 className="font-semibold">📚 Features Guide</h3>
              <p className="mt-1 text-sm text-gray-600">{t('features_guide_desc')}</p>
            </a>
            <a
              href="/CLAUDE.md"
              className="rounded-lg border p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
            >
              <h3 className="font-semibold">🤖 CLAUDE.md</h3>
              <p className="mt-1 text-sm text-gray-600">{t('claude_md_desc')}</p>
            </a>
            <a
              href="/README.md"
              className="rounded-lg border p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
            >
              <h3 className="font-semibold">📖 README</h3>
              <p className="mt-1 text-sm text-gray-600">{t('readme_desc')}</p>
            </a>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
            >
              <h3 className="font-semibold">🎨 shadcn/ui Docs</h3>
              <p className="mt-1 text-sm text-gray-600">{t('shadcn_desc')}</p>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Get Started CTA */}
      <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center text-white">
        <h2 className="text-3xl font-bold">{t('cta_title')}</h2>
        <p className="mt-2 text-lg opacity-90">{t('cta_description')}</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/todos">
            <Button size="lg" variant="secondary">
              {t('view_example_button')}
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
};
