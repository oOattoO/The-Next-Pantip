import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'The Next Pantip',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
