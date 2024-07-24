import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { LogOutButton } from '@/components/LogOutButton';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const t = useTranslations('DashboardLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/dashboard/"
              className="rounded-lg border-2 bg-slate-500 px-2 py-1 uppercase text-gray-100 hover:bg-red-800 hover:text-gray-50"
            >
              {t('dashboard_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user-profile/"
              className="rounded-lg border-2 bg-slate-500 px-2 py-1 uppercase text-gray-100 hover:bg-red-800 hover:text-gray-50"
            >
              {t('user_profile_link')}
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <LogOutButton />
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}
