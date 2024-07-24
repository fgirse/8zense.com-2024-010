import { deDE, enUS, frFR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

import InfoBar from '@/components/InfoBar';

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let clerkLocale = deDE;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';

  if (props.params.locale === 'fr') {
    clerkLocale = frFR;
  }

  if (props.params.locale === 'en') {
    clerkLocale = enUS;
  }

  if (props.params.locale !== 'en') {
    signInUrl = `/${props.params.locale}${signInUrl}`;
    signUpUrl = `/${props.params.locale}${signUpUrl}`;
    dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  }

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
    >
      <InfoBar />
      {props.children}
    </ClerkProvider>
  );
}
