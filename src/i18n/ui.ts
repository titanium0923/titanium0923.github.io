// src/i18n/ui.ts
export const languages = {
  ru: 'РУ',
  en: 'EN',
  kk: 'ҚАЗ',
};

export const defaultLang = 'ru';

export const ui = {
  ru: {
    'nav.about': 'Обо мне',
    'nav.projects': 'Проекты',
    'nav.skills': 'Навыки',
    'nav.contact': 'Контакты',
    'hero.status': 'Открыт к предложениям',
    'contact.title': 'Давайте работать',
    'contact.copyEmail': 'Скопировать email',
    'contact.copied': 'Скопировано!',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.status': 'Open to offers',
    'contact.title': 'Let\'s work together',
    'contact.copyEmail': 'Copy email',
    'contact.copied': 'Copied!',
  },
  kk: {
    'nav.about': 'Мен туралы',
    'nav.projects': 'Жобалар',
    'nav.skills': 'Дағдылар',
    'nav.contact': 'Байланыс',
    'hero.status': 'Ұсыныстарға ашықпын',
    'contact.title': 'Бірге жұмыс істейік',
    'contact.copyEmail': 'Email көшіру',
    'contact.copied': 'Көшірілді!',
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}