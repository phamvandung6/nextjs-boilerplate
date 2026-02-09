import type { Metadata } from 'next';
import Image from 'next/image';

type IPortfolioDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Array.from(Array.from({ length: 6 }).keys()).map(elt => ({
    slug: `${elt}`,
  }));
}

export async function generateMetadata(props: IPortfolioDetailProps): Promise<Metadata> {
  const { slug } = await props.params;

  return {
    title: `Portfolio ${slug}`,
    description: `Portfolio ${slug} description`,
  };
}

export default async function PortfolioDetail(props: IPortfolioDetailProps) {
  const { slug } = await props.params;

  return (
    <>
      <h1 className="capitalize">
        Portfolio
        {' '}
        {slug}
      </h1>
      <p>
        Created a set of promotional materials and branding elements for a
        corporate event. Crafted a visually unified theme, encompassing a logo,
        posters, banners, and digital assets. Integrated the client&apos;s brand
        identity while infusing it with a contemporary and innovative approach.
      </p>

      <div className="mt-5 text-center text-sm">
        Code review powered by
        {' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
        >
          CodeRabbit
        </a>
      </div>

      <a
        href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
      >
        <Image
          className="mx-auto mt-2"
          src="/assets/images/coderabbit-logo-light.svg"
          alt="CodeRabbit"
          width={128}
          height={22}
        />
      </a>
    </>
  );
}

export const dynamicParams = false;
