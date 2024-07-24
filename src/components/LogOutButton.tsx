'use client';

import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LogOutButton = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  const t = useTranslations('DashboardLayout');

  return (
    <button
      className="my-3 mr-1 rounded-lg border-2 bg-lime-600/50 px-2 py-1 text-sm uppercase text-gray-100 hover:bg-yellow-600 hover:text-gray-50 active:border-orange-500"
      type="button"
      onClick={() => signOut(() => router.push('/'))}
    >
      {t('sign_out')}
    </button>
  );
};

export { LogOutButton };
