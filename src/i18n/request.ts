import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import type enMessages from '../../messages/en.json';

type Messages = typeof enMessages;

const getLocaleFromAcceptLanguage = (acceptLanguage: string | null): string => {
  if (!acceptLanguage) return 'en';
  
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale] = lang.trim().split(';');
      return locale.toLowerCase();
    });
  
  for (const lang of languages) {
    if (lang.startsWith('pt')) {
      return 'pt-br';
    }
    if (lang.startsWith('en')) {
        // TODO: alterar para en quando implementar cookie
        return 'pt-br';
    }
  }
  
  return 'en';
};

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const headersList = await headers();
    
    let locale = cookieStore.get('locale')?.value;
    
    if (!locale) {
        const acceptLanguage = headersList.get('accept-language');
        locale = getLocaleFromAcceptLanguage(acceptLanguage);
    }
    
    const supportedLocales = ['en', 'pt-br'];
    if (!locale || !supportedLocales.includes(locale)) {
        locale = 'en';
    }

    const messagesModule = await import(`../../messages/${locale}.json`) as {default: Messages};
    const messages: Messages = messagesModule.default;
 
  return {
    locale,
    messages
  };
});