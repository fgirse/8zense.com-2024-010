import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Hero from '@/components/Hero';
// import { Sponsors } from '@/components/Sponsors';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-300">
      <section className="relative">
        <Hero />
      </section>
    </main>
  );
}
