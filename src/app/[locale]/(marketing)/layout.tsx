import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DemoBanner } from '@/components/DemoBanner';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { AppConfig } from '@/utils/AppConfig';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <>
      <DemoBanner />
      <div className="w-full px-1 text-gray-700 antialiased">
        <div className="mx-auto max-w-screen-md">
          <header className="border-b border-gray-300">
            <div className="pt-16 pb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                {AppConfig.name}
              </h1>
              <h2 className="text-xl">{t('description')}</h2>
            </div>

            <div className="flex justify-between">
              <nav aria-label="Main navigation">
                <ul className="flex flex-wrap gap-x-5 text-xl">
                  <li>
                    <Link
                      href="/"
                      className="border-none text-gray-700 hover:text-gray-900"
                    >
                      {t('home_link')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/"
                      className="border-none text-gray-700 hover:text-gray-900"
                    >
                      {t('about_link')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio/"
                      className="border-none text-gray-700 hover:text-gray-900"
                    >
                      {t('portfolio_link')}
                    </Link>
                  </li>
                  <li>
                    <a
                      className="border-none text-gray-700 hover:text-gray-900"
                      href="https://github.com/ixartz/Next-js-Boilerplate"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </nav>

              <nav>
                <ul className="flex flex-wrap gap-x-5 text-xl">
                  <li>
                    <LocaleSwitcher />
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main>
            <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
          </main>

          <footer className="border-t border-gray-300 py-8 text-center text-sm">
            {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. `}
            {t.rich('made_with', {
              author: () => (
                <a
                  href="https://nextjs-boilerplate.com"
                  className="text-blue-700 hover:border-b-2 hover:border-blue-700"
                >
                  Next.js Boilerplate
                </a>
              ),
            })}
          </footer>
        </div>
      </div>
    </>
  );
}
