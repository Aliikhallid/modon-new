import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Flag from 'react-flagkit';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
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
      <Select
        onValueChange={(e) => changeLanguage(e)}
        value={i18n.language}
      >
        <SelectTrigger className='border-none hover:border-none'>
        <SelectValue >{i18n.language == 'en'? <Flag country='GB'/>:<Flag country='IQ'/>}</SelectValue>
        </SelectTrigger>
        <SelectContent className='bg-white/60 min-w-[fit]'>
        <SelectGroup>
          <SelectItem value="ar">{<Flag country='IQ'/>}</SelectItem>
          <SelectItem value="en"><Flag country='GB'/></SelectItem>
        </SelectGroup>
      </SelectContent>
      </Select>
    </div>
  );
};

export default LangSwitcher;
