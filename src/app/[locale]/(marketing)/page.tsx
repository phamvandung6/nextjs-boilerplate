import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Sponsors } from '@/components/Sponsors';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
    <>
      <p>
        {`Follow `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://twitter.com/ixartz"
          target="_blank"
          rel="noreferrer noopener"
        >
          @Ixartz on Twitter
        </a>
        {` for updates and more information about the boilerplate.`}
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate Code for Your Next.js Project with Tailwind CSS
      </h2>
      <p className="text-base">
        Next.js Boilerplate is a developer-friendly starter code for Next.js projects, built with Tailwind CSS and TypeScript.
        {' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>
        {' '}
        Designed with developer experience in mind, it includes:
      </p>
      <ul className="mt-3 text-base">
        <li>🚀 Next.js with App Router support</li>
        <li>🔥 TypeScript for type checking</li>
        <li>💎 Tailwind CSS integration</li>
        <li>🌐 Multi-language support (i18n) with next-intl</li>
        <li>🔴 Validation with Zod and env safety (T3 Env)</li>
        <li>📏 Linting and formatting (ESLint, Prettier)</li>
        <li>🦊 Git hooks and commit linting (Husky, Commitlint)</li>
        <li>🦺 Testing with Vitest</li>
        <li>
          🐰 AI-powered code reviews with
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
          >
            CodeRabbit
          </a>
        </li>
        <li>
          🚨 Error monitoring (
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://sentry.io/for/nextjs/?utm_source=github&amp;utm_medium=paid-community&amp;utm_campaign=general-fy25q1-nextjs&amp;utm_content=github-banner-nextjsboilerplate-logo"
          >
            Sentry
          </a>
          ) and logging (LogTape, an alternative to Pino.js)
        </li>
        <li>
          🔐 Security and bot protection (
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://launch.arcjet.com/Q6eLbRE"
          >
            Arcjet
          </a>
          )
        </li>
        <li>🤖 SEO optimization (metadata, JSON-LD, Open Graph tags)</li>
        <li>⚙️ Development tools (VSCode config, bundler analyzer, changelog generation)</li>
      </ul>
      <p className="text-base">
        Our sponsors&apos; exceptional support has made this project possible.
        Their services integrate seamlessly with the boilerplate, and we
        recommend trying them out.
      </p>
      <h2 className="mt-5 text-2xl font-bold">{t('sponsors_title')}</h2>
      <Sponsors />

      <h2 className="mt-8 text-2xl font-bold">shadcn/ui Components Demo</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Button Component</CardTitle>
            <CardDescription>
              Các variant và size khác nhau của Button component
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>
              Component Card với các phần tử Header, Content và Footer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Đây là một ví dụ về Card component từ shadcn/ui. Bạn có thể sử dụng
              các component này để xây dựng UI đẹp và nhất quán.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tích hợp hoàn tất</CardTitle>
            <CardDescription>
              shadcn/ui đã được tích hợp thành công vào dự án
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li>✅ Components đã được cài đặt</li>
              <li>✅ CSS variables đã được cấu hình</li>
              <li>✅ Utility function cn() đã sẵn sàng</li>
              <li>✅ Tailwind CSS v4 đã được tích hợp</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Xem thêm components
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
