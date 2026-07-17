// All site copy lives here, keyed by locale.
// Source of truth: Smart Recipe — Website Build Brief (EN + AR copy).

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const dirFor: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl',
};

export const ui = {
  en: {
    'site.name': 'Smart Recipe',
    'site.descriptor': 'IT Company',
    'site.tagline': 'The recipe for a smarter life.',
    'site.description':
      'Smart Recipe is an IT company providing AI-powered software solutions that make everyday life better, easier, and faster.',

    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.why': 'Why Smart Recipe',
    'nav.contact': 'Contact',
    'nav.langSwitch': 'العربية',

    'hero.eyebrow': 'Smart Recipe',
    'hero.title.pre': 'The recipe for a ',
    'hero.title.accent': 'smarter',
    'hero.title.post': ' life.',
    'hero.body':
      'Intelligent software, blended with the latest AI — to make everyday life better, easier, and faster.',
    'hero.cta': 'Explore our products',
    'hero.ctaSecondary': 'Get in touch',

    'about.title': 'About us',
    'about.body':
      "At Smart Recipe, we believe technology should work for you, not the other way around. We build intelligent, AI-powered solutions that simplify the everyday and unlock what's possible — blending thoughtful engineering with the latest advances in AI to create products that save time, reduce effort, and improve how you live and work.",

    'products.title': 'Our products',
    'products.subtitle': 'Two apps, one goal: making your life smarter.',
    'products.martin.name': 'Martin',
    'products.martin.tag': 'Your smart assistant, always a step ahead.',
    'products.martin.body':
      'Martin is a personal assistant on your phone that helps you plan, remember, and get things done. Powered by AI, it handles the small tasks and big reminders so you can focus on what matters — making every day more organized, easier, and faster.',
    'products.yellga.name': 'Yellga',
    'products.yellga.tag': 'Find anything on the web, instantly.',
    'products.yellga.body':
      "Yellga is a smart discovery app that finds what you're looking for across the web in seconds. Instead of endless searching, Yellga uses AI to understand what you actually need and bring it straight to you — the fastest way from question to answer.",

    'why.title': 'Why Smart Recipe',
    'why.1.title': 'AI at the core',
    'why.1.body':
      'Every product is built around intelligent technology, not bolted on.',
    'why.2.title': 'Simple by design',
    'why.2.body': 'Powerful tools that stay effortless to use.',
    'why.3.title': 'Better, easier, faster',
    'why.3.body': 'The promise behind everything we make.',

    'contact.section.title': "Let's build something smarter together.",
    'contact.section.cta': 'Get in touch',

    'contact.title': 'Get in touch',
    'contact.subtitle':
      "Let's build something smarter together. Send us a message and we will reply as soon as possible.",
    'contact.form.name': 'Your name',
    'contact.form.email': 'Email address',
    'contact.form.message': 'Your message',
    'contact.form.submit': 'Send message',
    'contact.info.title': 'Contact information',
    'contact.info.email': 'info@example.com',
    'contact.info.phone': '+000 000 0000',
    'contact.info.address': 'City, Country',

    'footer.slogan': 'The recipe for a smarter life.',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    'site.name': 'سمارت ريسيبي',
    'site.descriptor': 'IT Company',
    'site.tagline': 'وصفتك لحياة أذكى.',
    'site.description':
      'سمارت ريسيبي شركة تقنية معلومات تقدم حلولاً برمجية مدعومة بالذكاء الاصطناعي تجعل حياتك اليومية أفضل وأسهل وأسرع.',

    'nav.about': 'من نحن',
    'nav.products': 'منتجاتنا',
    'nav.why': 'لماذا سمارت ريسيبي',
    'nav.contact': 'تواصل معنا',
    'nav.langSwitch': 'English',

    'hero.eyebrow': 'سمارت ريسيبي',
    'hero.title.pre': 'وصفتك لحياة ',
    'hero.title.accent': 'أذكى',
    'hero.title.post': '.',
    'hero.body':
      'برمجيات ذكية ممزوجة بأحدث تقنيات الذكاء الاصطناعي — لنجعل حياتك اليومية أفضل وأسهل وأسرع.',
    'hero.cta': 'اكتشف منتجاتنا',
    'hero.ctaSecondary': 'تواصل معنا',

    'about.title': 'من نحن',
    'about.body':
      'في سمارت ريسيبي، نؤمن بأن التقنية يجب أن تعمل من أجلك، لا أن تزيد حياتك تعقيداً. نبني حلولاً ذكية مدعومة بالذكاء الاصطناعي تُبسّط تفاصيل يومك وتفتح أمامك آفاقاً جديدة — عبر مزج الهندسة البرمجية المدروسة بأحدث ما توصّل إليه الذكاء الاصطناعي، لنصنع منتجات توفّر وقتك، وتقلّل جهدك، وتُحسّن أسلوب حياتك وعملك.',

    'products.title': 'منتجاتنا',
    'products.subtitle': 'تطبيقان، وهدف واحد: أن نجعل حياتك أذكى.',
    'products.martin.name': 'مارتن',
    'products.martin.tag': 'مساعدك الذكي، دائماً بخطوة تسبقك.',
    'products.martin.body':
      'مارتن مساعد شخصي على هاتفك يساعدك على التخطيط والتذكّر وإنجاز مهامك. مدعوماً بالذكاء الاصطناعي، يتولّى المهام الصغيرة والتذكيرات المهمة، لتركّز على ما يهمّك فعلاً — ويجعل كل يوم أكثر تنظيماً وسهولةً وسرعة.',
    'products.yellga.name': 'يلغا',
    'products.yellga.tag': 'اعثر على أي شيء على الويب في لحظة.',
    'products.yellga.body':
      'يلغا تطبيق بحث ذكي يجد ما تبحث عنه عبر الويب في ثوانٍ. بدلاً من البحث الطويل، يعتمد يلغا على الذكاء الاصطناعي لفهم ما تحتاجه فعلاً وتقديمه إليك مباشرة — أسرع طريق من السؤال إلى الإجابة.',

    'why.title': 'لماذا سمارت ريسيبي',
    'why.1.title': 'الذكاء الاصطناعي في الجوهر',
    'why.1.body': 'كل منتج مبني حول تقنية ذكية، لا مضافة إليه لاحقاً.',
    'why.2.title': 'البساطة في التصميم',
    'why.2.body': 'أدوات قوية تبقى سهلة الاستخدام.',
    'why.3.title': 'أفضل وأسهل وأسرع',
    'why.3.body': 'الوعد الذي يقف خلف كل ما نصنعه.',

    'contact.section.title': 'لنبنِ معاً شيئاً أذكى.',
    'contact.section.cta': 'تواصل معنا',

    'contact.title': 'تواصل معنا',
    'contact.subtitle':
      'لنبنِ معاً شيئاً أذكى. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info.title': 'معلومات التواصل',
    'contact.info.email': 'info@example.com',
    'contact.info.phone': '+000 000 0000',
    'contact.info.address': 'المدينة، الدولة',

    'footer.slogan': 'وصفتك لحياة أذكى.',
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
