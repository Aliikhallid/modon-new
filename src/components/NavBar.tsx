import modonLogo from '../assets/modonlogo-removebg-preview.png'
import {Button} from './ui/button'
import {useTranslation} from 'react-i18next'
import LangSwitcher from './sections/LangSwitcher';
import whatsLogo from  '../assets/whatsapp.png';


const NavBar = () => {
 
  const {t} = useTranslation();
  const navbar = document.querySelector('.navbar')
  window.addEventListener('scroll', ()=> {
    if(window.scrollY > 350) {
      navbar?.classList.add('bg-white')
      navbar?.classList.remove('text-white')
      navbar?.classList.remove('h-20')
      navbar?.classList.add('h-16')
      navbar?.classList.add('text-black')
      navbar?.classList.add('box-shadow-nav')
    } else {
      navbar?.classList.remove('box-shadow-nav')
      navbar?.classList.remove('bg-white')
      navbar?.classList.add('h-20')
      navbar?.classList.remove('h-16')
      navbar?.classList.remove('text-black')
      navbar?.classList.add('text-white')
    }
  })
  return (
    <div className='navbar justify-between items-center text-white h-20 mr-6 ml-6 fixed top-0 w-full flex light z-30'>
      <div className="list-items-left flex items-center justify-around w-1/3">
        <a className="item cursor-pointer">{t("home_string")}</a>
        <a className="item cursor-pointer" href='/project'>{t("projects_string")}</a>
        <a className="item cursor-pointer">{t("news_string")}</a>
      </div>
      <img src={modonLogo} className='logo h-14 m-3 cursor-pointer' alt='modon-logo'></img>
      <div className="list-items-right flex justify-around w-1/3 items-center">
        <a className="item"><img src={whatsLogo} className='h-6 m-3 cursor-pointer' alt="whats-logo" /></a>
        <LangSwitcher />
      <Button size={'lg'} className='z-10 bg-modon-blue text-white'>{t("enquire_string")}</Button>
      </div>
    </div>
  )
}

export default NavBar