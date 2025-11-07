import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <MdLanguage className='size-5' />
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32">
        <li><button onClick={() => changeLanguage('en')}>English</button></li>
        <li><button onClick={() => changeLanguage('ar')}>العربية</button></li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;