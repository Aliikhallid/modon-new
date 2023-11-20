import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import en from '../../assets/en.png'
import ar from '../../assets/iraq.webp'

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get the user's preferred language or use a default language
    const userLanguage = localStorage.getItem('userLanguage') || 'en';

    // Set the initial language and direction
    i18n.changeLanguage(userLanguage);
    document.documentElement.dir = userLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = userLanguage;

  }, [i18n]);

  const changeLanguage = (language: string) => {
    // Update the user's language preference
    localStorage.setItem('userLanguage', language);

    // Change the language and direction
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

  };

  return (
    <div>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="bg-transparent cursor-pointer"
      >
        <option className="bg-transparent text-black" value="en"><img src={en} alt=""/></option>
        <option className="bg-transparent text-black" value="ar"><img src={ar} alt="" /></option>
      </select>
    </div>
  );
};

export default LangSwitcher;
