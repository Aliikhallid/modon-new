import modonLogo from '../assets/modonlogo-removebg-preview.png'
import {Button} from './ui/button'
import {useTranslation} from 'react-i18next'
import LangSwitcher from './LangSwitcher';

// i18next.changeLanguage('ar')


const NavBar = () => {
 
  const {t} = useTranslation();
  const navbar = document.querySelector('.navbar')
  window.addEventListener('scroll', ()=> {
    if(window.scrollY > 350) {
      navbar?.classList.add('bg-white')
      navbar?.classList.remove('text-white')
      navbar?.classList.remove('h-24')
      navbar?.classList.add('h-16')
      navbar?.classList.add('text-black')
      navbar?.classList.add('box-shadow-nav')
    } else {
      navbar?.classList.remove('box-shadow-nav')
      navbar?.classList.remove('bg-white')
      navbar?.classList.add('h-24')
      navbar?.classList.remove('h-16')
      navbar?.classList.remove('text-black')
      navbar?.classList.add('text-white')
    }
  })

  return (
    <div className='navbar flex justify-between items-center text-white h-24 mr-6 ml-6 fixed top-0 w-full light z-30'>
      <div className="list-items-left flex items-center justify-around w-1/3">
        <a className="item cursor-pointer">{t("home_string")}</a>
        <a className="item cursor-pointer">{t("projects_string")}</a>
        <a className="item cursor-pointer">{t("news_string")}</a>
      </div>
      <img src={modonLogo} className='logo h-12 m-3 cursor-pointer' alt='modon-logo'></img>
      <div className="list-items-right flex justify-around w-1/3 items-center">
        <a className="item" href='http://www.youtube.com'>{t("whats_app")}</a>
        <LangSwitcher />
      <Button size={'lg'} className='z-10 bg-teal-700'>{t("enquire_string")}</Button>
      </div>
    </div>
  )
}

export default NavBar