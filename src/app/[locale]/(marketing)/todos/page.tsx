import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { TodoList } from '@/features/todo';

type ITodosProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ITodosProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Todos',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function TodosPage(props: ITodosProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Todos',
  });

  return (
    <>
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-2 text-gray-600">{t('description')}</p>

      <div className="mt-8">
        <TodoList />
      </div>
    </>
  );
}
