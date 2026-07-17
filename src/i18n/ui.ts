// All site copy lives here so real content from the company documentation
// can be dropped in without touching page markup.
// NOTE: Everything below is PLACEHOLDER copy until the official content arrives.

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const dirFor: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
};

export const ui = {
  en: {
    'site.name': 'Smart Recipe',
    'site.tagline': 'IT Solutions',
    'site.description':
      'Smart Recipe is an IT solutions company delivering modern software, infrastructure, and digital services.',

    'nav.home': 'Home',
    'nav.contact': 'Contact',
    'nav.langSwitch': 'العربية',

    'hero.title': 'The right recipe for your technology',
    'hero.subtitle':
      'We design, build, and support smart IT solutions that help your business grow.',
    'hero.cta': 'Get in touch',

    'services.title': 'What we do',
    'services.subtitle':
      'A taste of our services — full details coming from the company documentation.',
    'services.1.title': 'Software Development',
    'services.1.body':
      'Custom web and mobile applications built with modern technology.',
    'services.2.title': 'IT Infrastructure',
    'services.2.body':
      'Reliable networks, cloud, and systems that keep your business running.',
    'services.3.title': 'Digital Solutions',
    'services.3.body':
      'Smart tools and automation that simplify how you work.',

    'cta.title': 'Ready to start your project?',
    'cta.body': 'Tell us what you need and we will get back to you shortly.',
    'cta.button': 'Contact us',

    'contact.title': 'Contact us',
    'contact.subtitle':
      'We would love to hear from you. Send us a message and we will reply as soon as possible.',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Email address',
    'contact.form.message': 'Your message',
    'contact.form.submit': 'Send message',
    'contact.info.title': 'Contact information',
    'contact.info.email': 'info@example.com',
    'contact.info.phone': '+000 000 0000',
    'contact.info.address': 'City, Country',

    'footer.rights': 'All rights reserved.',
  },
  ar: {
    'site.name': 'سمارت ريسيبي',
    'site.tagline': 'حلول تقنية المعلومات',
    'site.description':
      'سمارت ريسيبي شركة حلول تقنية معلومات تقدم برمجيات حديثة وبنية تحتية وخدمات رقمية.',

    'nav.home': 'الرئيسية',
    'nav.contact': 'اتصل بنا',
    'nav.langSwitch': 'English',

    'hero.title': 'الوصفة الصحيحة لتقنيتك',
    'hero.subtitle':
      'نصمم ونبني وندعم حلول تقنية ذكية تساعد أعمالك على النمو.',
    'hero.cta': 'تواصل معنا',

    'services.title': 'ماذا نقدم',
    'services.subtitle':
      'لمحة عن خدماتنا — التفاصيل الكاملة ستضاف من وثائق الشركة.',
    'services.1.title': 'تطوير البرمجيات',
    'services.1.body': 'تطبيقات ويب وجوال مخصصة مبنية بأحدث التقنيات.',
    'services.2.title': 'البنية التحتية لتقنية المعلومات',
    'services.2.body': 'شبكات وسحابة وأنظمة موثوقة تحافظ على استمرارية أعمالك.',
    'services.3.title': 'الحلول الرقمية',
    'services.3.body': 'أدوات ذكية وأتمتة تبسّط طريقة عملك.',

    'cta.title': 'جاهز لبدء مشروعك؟',
    'cta.body': 'أخبرنا بما تحتاجه وسنعاود التواصل معك قريباً.',
    'cta.button': 'اتصل بنا',

    'contact.title': 'اتصل بنا',
    'contact.subtitle':
      'يسعدنا تواصلك معنا. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info.title': 'معلومات التواصل',
    'contact.info.email': 'info@example.com',
    'contact.info.phone': '+000 000 0000',
    'contact.info.address': 'المدينة، الدولة',

    'footer.rights': 'جميع الحقوق محفوظة.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui.en[key];
  };
}

/** Prefix a site-relative path with the configured base and locale. */
export function localePath(locale: Locale, path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const clean = path === '/' ? '' : path;
  return `${base}${localePrefix}${clean}` || '/';
}
