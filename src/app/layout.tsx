import type { Metadata } from 'next';
import Link from 'next/link';
import { AppConfig } from '@/utils/AppConfig';
import '@/styles/global.css';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full px-1 text-gray-700 antialiased">
          <div className="mx-auto max-w-screen-md">
            <header className="border-b border-gray-300">
              <div className="pt-16 pb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  {AppConfig.name}
                </h1>
                <h2 className="text-xl">{AppConfig.description}</h2>
              </div>

              <div className="flex justify-between">
                <nav aria-label="Main navigation">
                  <ul className="flex flex-wrap gap-x-5 text-xl">
                    <li>
                      <Link
                        href="/"
                        className="border-none text-gray-700 hover:text-gray-900"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="border-none text-gray-700 hover:text-gray-900"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio"
                        className="border-none text-gray-700 hover:text-gray-900"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/todos"
                        className="border-none text-gray-700 hover:text-gray-900"
                      >
                        Todos
                      </Link>
                    </li>
                    <li>
                      <a
                        className="border-none text-gray-700 hover:text-gray-900"
                        href="https://github.com/ixartz/Next-js-Boilerplate"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

            <main>
              <div className="py-5 text-xl [&_p]:my-6">{children}</div>
            </main>

            <footer className="border-t border-gray-300 py-8 text-center text-sm">
              {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. Made with `}
              <a
                href="https://nextjs-boilerplate.com"
                className="text-blue-700 hover:border-b-2 hover:border-blue-700"
              >
                Next.js Boilerplate
              </a>
              .
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
