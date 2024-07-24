import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          {' '}
          <div className="flex  flex-col items-start  gap-x-2  gap-y-3 md:flex-row  md:items-stretch md:text-sm">
            <li className="">
              <Link
                href="/"
                className="rounded-lg border-2 bg-slate-500 px-2 py-1 uppercase text-gray-100 hover:bg-red-800 hover:text-gray-50"
              >
                {t('home_link')}
              </Link>
            </li>
            <li className="">
              <Link
                href="/about/"
                className="rounded-lg border-2 bg-slate-500 px-2 py-1 uppercase text-gray-100 hover:bg-red-800 hover:text-gray-50"
              >
                {t('about_link')}
              </Link>
            </li>
            <li className="">
              <Link
                href="/guestbook/"
                className="rounded-lg border-2 bg-slate-500 px-2 py-1 uppercase text-gray-100 hover:bg-red-800 hover:text-gray-50"
              >
                {t('guestbook_link')}
              </Link>
            </li>
            <li className="">
              <Link
                href="/portfolio/"
                className="rounded-lg border-2 bg-slate-500 px-2 py-1 uppercase text-gray-100 hover:bg-red-800 hover:text-gray-50"
              >
                {t('portfolio_link')}
              </Link>
            </li>
            <li>
              <a
                className="rounded-lg border-2 bg-slate-500 px-2 py-1 uppercase text-gray-100 hover:bg-red-800 hover:text-gray-50"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub{' '}
              </a>
            </li>
          </div>
        </>
      }
      rightNav={
        <>
          <li>
            <Link
              href="/sign-in/"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="rouded-lg border-2 bg-amber-600/50 px-2 py-1 text-gray-200 hover:bg-amber-600 hover:text-gray-50"
            >
              {t('sign_in_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="rouded-lg border-2 bg-lime-600/50 px-2 py-1 text-gray-200 hover:bg-lime-600 hover:text-gray-50"
            >
              {t('sign_up_link')}
            </Link>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
